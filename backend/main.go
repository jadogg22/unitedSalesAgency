package main

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/AzureAD/microsoft-authentication-library-for-go/apps/confidential"
)

const (
	clientID     = "<your_client_id>"
	clientSecret = "<your_client_secret>"
	tenantID     = "<your_tenant_id>"
	scope        = "https://graph.microsoft.com/.default"
	authority    = "https://login.microsoftonline.com/"
	apiURL       = "https://graph.microsoft.com/v1.0"
)

func main() {
	// Authenticate and get the access token
	token, err := getAccessToken()
	if err != nil {
		log.Fatalf("Failed to get access token: %v", err)
	}

	// Define the meeting parameters
	meetingRequest := map[string]interface{}{
		"attendees": []map[string]interface{}{
			{
				"type": "required",
				"emailAddress": map[string]string{
					"name":    "Samantha Booth",
					"address": "samanthab@contoso.com",
				},
			},
		},
		"locationConstraint": map[string]interface{}{
			"isRequired":      false,
			"suggestLocation": false,
			"locations": []map[string]interface{}{
				{
					"resolveAvailability": false,
					"displayName":         "Conf room Hood",
				},
			},
		},
		"timeConstraint": map[string]interface{}{
			"activityDomain": "work",
			"timeslots": []map[string]interface{}{
				{
					"start": map[string]string{
						"dateTime": "2017-04-18T09:00:00",
						"timeZone": "Pacific Standard Time",
					},
					"end": map[string]string{
						"dateTime": "2017-04-20T17:00:00",
						"timeZone": "Pacific Standard Time",
					},
				},
			},
		},
		"meetingDuration":           "PT2H",
		"returnSuggestionReasons":   true,
		"minimumAttendeePercentage": 100,
	}

	// Find possible meeting times
	err = findMeetingTimes(token, meetingRequest)
	if err != nil {
		log.Fatalf("Failed to find meeting times: %v", err)
	}
}

func getAccessToken() (string, error) {
	cred, err := confidential.NewCredFromSecret(clientSecret)
	if err != nil {
		return "", err
	}

	app, err := confidential.New(clientID, cred, confidential.WithAuthority(authority+tenantID))
	if err != nil {
		return "", err
	}

	result, err := app.AcquireTokenByCredential(context.Background(), []string{scope})
	if err != nil {
		return "", err
	}

	return result.AccessToken, nil
}

func findMeetingTimes(token string, meetingRequest map[string]interface{}) error {
	body, err := json.Marshal(meetingRequest)
	if err != nil {
		return err
	}

	req, err := http.NewRequest("POST", fmt.Sprintf("%s/me/findMeetingTimes", apiURL), bytes.NewBuffer(body))
	if err != nil {
		return err
	}

	req.Header.Set("Authorization", "Bearer "+token)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Prefer", `outlook.timezone="Pacific Standard Time"`)

	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return fmt.Errorf("failed to find meeting times: %v", resp.Status)
	}

	respBody, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return err
	}

	var result map[string]interface{}
	err = json.Unmarshal(respBody, &result)
	if err != nil {
		return err
	}

	if result["emptySuggestionsReason"] != nil {
		fmt.Printf("No meeting times found: %s\n", result["emptySuggestionsReason"])
	} else {
		fmt.Printf("Meeting time suggestions: %v\n", result["meetingTimeSuggestions"])
	}

	return nil
}

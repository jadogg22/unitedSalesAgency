package getCalender

import (
	"fmt"
	// get environment variable
	"github.com/joho/godotenv"
	"os"
)

func GetCalender() {
	fmt.Println("This is a calender")
	// get environment variable
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file")
	}

	// get environment variable
	applicationID := os.Getenv("ApplicationIDClient")

	fmt.Println("Application ID: ", applicationID)

}

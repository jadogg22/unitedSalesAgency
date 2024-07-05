
import React, { useState } from 'react';

const EmailModal = ({ isOpen, onClose, eventTitle }) => {
  const [message, setMessage] = useState('');

  const handleEmailSend = () => {
    const subject = encodeURIComponent(eventTitle);
    const body = encodeURIComponent(message);
    const mailtoUrl = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    onClose(); // Close the modal after sending email
  };

  return (
    <div className={`overlay ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Send Email</h2>
        <form onSubmit={handleEmailSend}>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Send Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailModal;


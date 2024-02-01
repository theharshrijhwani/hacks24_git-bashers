import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for submitting feedback here
    console.log('Feedback submitted:', feedback);
    // You can add further logic like sending the feedback to a server
  };

  return (
    <div className="container mx-auto mt-8 max-w-md">
      <h2 className="text-3xl font-semibold mb-4">Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-600">
            Your Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Type your feedback here..."
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;

import React from 'react';
import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <div className="thank-you-content">
        <h1>Thank You!</h1>
        <p>Your application has been submitted successfully.</p>
        <p>We will review your application and get back to you soon.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    </div>
  );
};

export default ThankYouPage;

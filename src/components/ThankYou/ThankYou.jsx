import React from 'react';
import { Link } from 'react-router-dom';
import "./ThankYou.css";
const ThankYouPage = () => {
  return (
      /* ThankYouPage body */
   <body className='thank-you-card'>
   
    <div className="card-2">
    <div className="card-bod2">
      <h1 className="card-title-2">Thank You!</h1>
      <p className="card-text-2">Your application has been submitted successfully. We will review your application and get back to you soon.</p>
      <Link to="/" className="btn-2 btn-primary">Back to Home</Link>
    </div>
  </div>
  </body>
   
   
  );
};

export default ThankYouPage;

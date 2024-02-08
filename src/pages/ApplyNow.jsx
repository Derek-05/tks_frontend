import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Forms from '../components/Form/Forms';

const ApplyNow = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSuccess = () => {
    // Handle form success if needed
    setIsFormSubmitted(true);
  };

  if (isFormSubmitted) {
    return <Navigate to="/thankyou" />; // Redirect to the thank you page after form submission
  }

  return (
    <div className='FormInfo'>
      <Forms onFormSuccess={handleFormSuccess} />
    </div>
  );
};

export default ApplyNow;

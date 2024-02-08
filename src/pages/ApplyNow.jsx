import React from 'react';
import Forms from '../components/Form/Forms';

const ApplyNow = () => {
  const handleFormSuccess = () => {
    // Handle form success if needed
  };

  return (
    <div className="FormInfo">
      <Forms onFormSuccess={handleFormSuccess} />
    </div>
  );
};

export default ApplyNow;

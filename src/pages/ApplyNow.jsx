import React, { useState, useEffect } from 'react';
import Forms from '../components/Form/Forms';
import { useNavigate } from 'react-router-dom';
import { getTokenFromLocalStorage } from '../api/authApi';

const ApplyNow = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthentication();
  }, []); // Run once on component mount

  const checkAuthentication = () => {
    const userToken = getTokenFromLocalStorage();
    if (userToken) {
      setIsAuthenticated(true);
    } else {
      navigate('/Signup', { replace: true });
    }
  };

  const handleFormSuccess = (newToken, user) => {
    // No need to set token in local storage here, as it's already set
    setIsAuthenticated(true);
  };

  return isAuthenticated ? (
    <div className="FormInfo">
      <Forms onFormSuccess={handleFormSuccess} />
    </div>
  ) : null;
};

export default ApplyNow;

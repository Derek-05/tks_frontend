import React, { useState, useEffect } from 'react';
import Forms from '../components/Form/Forms';
import { useNavigate } from 'react-router-dom';

const ApplyNow = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    // Check if a valid token exists in local storage
    const userToken = localStorage.getItem('token');
    if (userToken) {
      setIsAuthenticated(true);
    } else {
      // Navigate to the login page if no token is found
      navigate('/login', { replace: true });
    }
  }, [navigate]); // Add navigate as a dependency

  const handleFormSuccess = (token, user) => {
    // Save token in local storage
    localStorage.setItem('token', token);
    // Set token state
    setToken(token);
    // Set isAuthenticated state
    setIsAuthenticated(true);
  };

  return isAuthenticated ? (
    <div className="FormInfo">
      <Forms onFormSuccess={handleFormSuccess} token={token} />
    </div>
  ) : null; // Return null if not authenticated
};

export default ApplyNow;

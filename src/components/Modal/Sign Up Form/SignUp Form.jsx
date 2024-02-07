import React, { useState } from 'react';
import './SignUp.css';
import { registerUser } from '../../../api/authApi';

const SignUpForm = ({ onSignupSuccess  }) => {
  const [credentials, setCredentials] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await registerUser(credentials);
      console.log('Signup successful:', response);
      onSignupSuccess(response.user);
    } catch (error) {
      console.error('SignUp failed:', error.response ? error.response.data : error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="modal-container">
      <div className="signup-modal">
        <h2>Sign Up</h2>
        <form className="signup-form" onSubmit={handleSignupSubmit}>
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={credentials.first_name}
              onChange={handleChange}
              required
            />

            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={credentials.last_name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          {loading && <p>Loading...</p>}
          <button type="submit" className="signup-button" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;

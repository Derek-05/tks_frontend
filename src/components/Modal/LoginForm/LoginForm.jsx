// Import React and other necessary dependencies
import React, { useState } from "react";
import "./LoginForm.css";
import { loginUser } from "../../../api/authApi";

// Define the LoginForm component
const LoginForm = ({ onLoginSuccess }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true during the login request
    try {
      const response = await loginUser(credentials);
      console.log("Login successful:", response);
      onLoginSuccess(response.token, response.user);
    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error.message);
    } finally {
      setLoading(false); // Set loading back to false after the login attempt
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="modal-container">
      <div className="login-modal">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
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
          {/* Display loading indicator during login request */}
          {loading && <p>Loading...</p>}
          <button type="submit" className="login-button" disabled={loading}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// Export the LoginForm component
export default LoginForm;

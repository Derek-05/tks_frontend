import React, { useState } from "react";
import "./LoginForm.css";
import { loginUser } from "../../../api/authApi";

const LoginForm = ({ onLoginSuccess }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked", credentials);
    try {
      const response = await loginUser(credentials);
      console.log("Login successful:", response);
      onLoginSuccess(response.token, response.user);
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="modal-container">
      <div className="login-modal">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <br />
          <br />
          <br />
          <button type="submit" className="login-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

import React, { useState } from "react";
import "./LoginForm.css";
import { loginUser, getTokenFromCookie } from "../../../api/authApi";

const LoginForm = ({ onLoginSuccess }) => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);

    // Check if user is already authenticated
    const token = getTokenFromCookie();
    if (token) {
        // Redirect or handle already authenticated user
        // For example:
        // return <Redirect to="/dashboard" />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await loginUser(credentials);
            console.log("Login successful:", response);
            // Call the onLoginSuccess callback with token and user data
            onLoginSuccess(response.token, response.user);
        } catch (error) {
            console.error("Login failed:", error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [name]: value,
        }));
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
                    {loading && <p>Loading...</p>}
                    <button type="submit" className="login-button" disabled={loading}>
                        {loading ? 'Logging in...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );

    };

export default LoginForm;

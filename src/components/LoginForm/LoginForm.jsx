import React, { useState } from "react";
import "./LoginForm.css";
import { loginUser, setTokenInLocalStorage } from "../../api/authApi";
import Dashboard from "../ReportTable/Table"; // Import the Dashboard component

const LoginForm = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false); // State to track if user is logged in

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await loginUser(credentials);
            console.log("Login successful:", response);
            
            // Ensure response contains token and user data
            if (response.token && response.filteredUserData.roleId === 1) {
                setTokenInLocalStorage(response.token);
                setLoggedIn(true); // Set loggedIn state to true upon successful login
            } else {
                throw new Error("User does not have roleId of 1.");
            }
        } catch (error) {
            console.error("Login failed:", error.response ? error.response.data : error.message);
            setError("Login failed. Please check your credentials.");
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

    // Render the Dashboard component if user is logged in
    if (loggedIn) {
        return <Dashboard />;
    }

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
                            disabled={loading} // Disable input while loading
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
                            disabled={loading} // Disable input while loading
                        />
                    </div>
                    {loading && <p>Loading...</p>}
                    {error && <p className="error-message">{error}</p>} {/* Apply CSS for error message */}
                    <button type="submit" className="login-button" disabled={loading}>
                        {loading ? 'Logging in...' : 'Submit'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;

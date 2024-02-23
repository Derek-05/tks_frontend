import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const LoginPage = () => {
    const navigate = useNavigate(); // Get the navigate function from React Router

    const handleLoginSuccess = () => {
        navigate('/dashboard'); // Redirect to apply_now page after successful login
    };

    return (
       /*Login page */
        <div>
            <h1>Login Page</h1>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>
    );
};

export default LoginPage;

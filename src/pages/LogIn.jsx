import React from 'react';
import LoginForm from '../components/Modal/LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const LoginPage = () => {
    const navigate = useNavigate(); // Get the navigate function from React Router

    const handleLoginSuccess = () => {
        navigate('/apply_now'); // Redirect to apply_now page after successful login
    };

    return (
        <div>
            <h1>Login Page</h1>
            <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>
    );
};

export default LoginPage;

// UserAuth.jsx
import React from 'react';
import './UserAuth.css';
import LoginForm from "../Modal/LoginForm/LoginForm";
import SignUpForm from "../Modal/Sign Up Form/SignUp Form";

const UserAuth = ({ user, onLoginClick, onLogoutClick, onSignupClick }) => {
  return (
    <div className="user-auth">
      {user ? (
        <>
          <span>Hi, {user.first_name}</span>
          <button
            type="button"
            onClick={() => onLogoutClick()}
            aria-label="Logout"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            onClick={() => onSignupClick()}
            aria-label="Sign Up"
          >
            Sign Up
          </button>
         
          <button
            type="button"
            onClick={() => onLoginClick()}
            aria-label="Log In"
          >
            Log In
          </button>
        </>
      )}
    </div>
  );
};

export default UserAuth;

import React from 'react';
import './UserAuth.css';

const UserAuth = ({ user, onLoginClick, onLogoutClick }) => {
  return (
    <div className="user-auth">
      {user ? (
        <>
          <span>Hi, {user.first_name}</span>
          <button
            type="button"
            onClick={onLogoutClick}
            role="button"
            aria-label="Logout"
          >
            Logout
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={onLoginClick}
          role="button"
          aria-label="Log In"
        >
          Log In
        </button>
      )}
    </div>
  );
};

export default UserAuth;

// UserAuth.jsx
import React from 'react';
import './UserAuth.css';

const UserAuth = ({ user, onLogoutClick }) => {
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
        <div>
         
        </div>
      )}
    </div>
  );
};

export default UserAuth;

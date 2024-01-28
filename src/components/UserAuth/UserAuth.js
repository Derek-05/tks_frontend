import React from 'react';
import './UserAuth.css';

const UserAuth = ({ user, onLoginClick, onLogoutClick }) => {
  return (
    <div className="user-auth">
      {user ? (
        <>
          <span>Hi, {user.first_name}</span> {/* Display user's email or name */}
          {/* Using button type="button" to differentiate from submit buttons in forms */}
          <button type="button" onClick={onLogoutClick}>Logout</button>
        </>
      ) : (
        // Adding type="button" is good practice for accessibility
        <button type="button" onClick={onLoginClick}>Log In</button>
      )}
    </div>
  );
};

export default UserAuth;
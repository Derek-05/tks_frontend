import React, { useState } from "react";
import "./Modal.css";
import LoginForm from "../Modal/LoginForm/LoginForm";
import SignUpForm from "../Modal/Sign Up Form/SignUp Form";

const Modal = ({ show, onClose, onLoginSuccess, onSignupSucess }) => {
  const [activeForm, setActiveForm] = useState('login');

  if (!show) {
    return null;
  }

  const handleSwitchForm = (formType) => {
    setActiveForm(formType);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose} aria-label="Close">
          &times;
        </span>

        {activeForm === "signup" ? (
          <SignUpForm onSignupSuccess={onSignupSucess} />
        ) : (
          <LoginForm onLoginSuccess={onLoginSuccess} />
        )}

        <div className="form-switch">
          <p>{activeForm === "signup" ? "Don't have an account?" : "Already have an account?"}</p>
          <button onClick={() => handleSwitchForm("signup")}>
            Sign Up
          </button>
          <button onClick={() => handleSwitchForm("login")}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

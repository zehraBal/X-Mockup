import React, { useState } from "react";
import ModalForm from "./ModalForm";

export default function MainPageButtonsSection() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <button className="signup-buttons">
        <img src="/src/assets/googleIcon.png" />
        <span> </span>
        Sign up with Google
      </button>
      <button className="signup-buttons">
        <img src="/src/assets/appleIcon.png" />
        <span> </span>
        Sign up with Apple
      </button>
      <div className="or-section">
        <div className="line"></div>
        <div className="or">or</div>
        <div className="line"></div>
      </div>
      <button className="createAcc-button">Create Account</button>
      <div className="terms-section">
        <p>
          By signing up, you agree to the Terms of Service and Privacy Policy,
          including Cookie Use.
        </p>
      </div>
      <div className="loginButton-section">
        <div>Already have an account?</div>
        <button className="login-button" onClick={handleShowModal}>
          Login
        </button>
      </div>

      <ModalForm show={showModal} handleClose={handleCloseModal} />
    </>
  );
}

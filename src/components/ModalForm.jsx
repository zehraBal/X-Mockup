import React, { useState } from "react";
import { Modal, Button, ModalTitle } from "react-bootstrap";
import Login from "./Login";
import LoginForm from "./LoginForm";

const ModalForm = ({ show, handleClose }) => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);

  const handleNext = (email) => {
    setEmail(email);
    setStep(2);
  };

  return (
    <Modal dialogClassName="custom-modal" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <img
          className="modal-logo"
          src="/src/assets/logo-white.png"
          alt="Modal Logo"
        />
      </Modal.Header>
      <Modal.Body>
        {step === 1 ? (
          <Login onForward={handleNext} />
        ) : (
          <div className="loginform-content">
            <LoginForm email={email} />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
const Login = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const [email, setEmail] = useState("");

  const handleForwardClick = (data) => {
    setEmail(data.email);
    onNext(data.email);
  };

  return (
    <div className="login-content">
      <h2>Login to X</h2>
      <button className="signup-buttons">
        <img src="/src/assets/googleIcon.png" />
        <span> </span>
        Sign in with Google
      </button>
      <button className="signup-buttons">
        <img src="/src/assets/appleIcon.png" />
        <span> </span>
        Sign in with Apple
      </button>
      <div className="or-section">
        <div className="line"></div>
        <div className="or">or</div>
        <div className="line"></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit(handleForwardClick)}>
          <input
            className="input-field"
            type="email"
            placeholder="Phone number, email or username"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
          <button type="submit" disabled={!isValid} className="signup-buttons">
            Forward
          </button>
        </form>
      </div>

      <button className="login-button">Did you forget your password?</button>
      <p>Don't have an account yet? Register</p>
    </div>
  );
};

export default Login;

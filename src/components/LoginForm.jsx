import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ email }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: { email: { email }, password: "" },
    mode: "all",
  });
  //react-router-dom v6 useHistory yerine useNavigate kullanılıyor.
  const navigate = useNavigate();
  const formSubmit = (formData) => {
    console.log(formData);
    axios
      .post("https://reqres.in/api/users", formData)
      .then((res) => {
        console.log("Login Successful! : ", res.data);
        navigate("/home");
      })
      .catch((err) => console.warn(err));
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)} className="loginform-content">
      <div>
        <h2>Enter your password</h2>
      </div>
      <label style={{ color: "gray" }} htmlFor="email">
        Email
      </label>
      <input
        style={{ color: "gray" }}
        className="input-field"
        type="email"
        value={email}
        readOnly
        data-cy="secondEmail"
      />
      <label htmlFor="password">Password</label>
      <input
        className="input-field"
        type="password"
        data-cy="pswd"
        placeholder="Password"
        {...register("password", {
          required: "Password field cannot be left blank",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters.",
          },
        })}
      />
      {errors.password && (
        <p style={{ color: "rgb(13, 141, 232)" }} className="error-message">
          {errors.password.message}
        </p>
      )}
      <button
        className="signup-buttons"
        type="submit"
        disabled={!isValid}
        data-cy="secondLogin"
      >
        Login
      </button>
      <p style={{ cursor: "pointer" }}>Did you forget your password?</p>
      <p style={{ cursor: "pointer" }}>Don't have an account yet? Register</p>
    </form>
  );
};

export default LoginForm;

import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ email }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
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
        console.log(res.data);
        navigate("/home");
      })
      .catch((err) => console.warn(err));
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)} className="loginform-content">
      <div>
        <h2>Enter your password</h2>
      </div>

      <input className="input-field" type="email" value={email} readOnly />
      <input
        className="input-field"
        type="password"
        placeholder="Password"
        {...register("password", { required: "Enter your password" })}
      />
      <button className="signup-buttons" type="submit" disabled={!isValid}>
        Login
      </button>
      <p style={{ cursor: "pointer" }}>Did you forget your password?</p>
      <p style={{ cursor: "pointer" }}>Don't have an account yet? Register</p>
    </form>
  );
};

export default LoginForm;

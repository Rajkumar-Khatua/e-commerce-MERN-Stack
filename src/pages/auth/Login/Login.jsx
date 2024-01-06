// Login.jsx
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";

const Login = ({ setAuthenticatedUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    showPassword: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setFormData((prevData) => ({
      ...prevData,
      showPassword: !prevData.showPassword,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here, for now, let's assume it's successful
    const fakeAuthenticatedUser = { username: formData.username };
    setAuthenticatedUser(fakeAuthenticatedUser);
    // Redirect to the home page or any other desired page after login
    navigate("/");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>
        <label htmlFor="username" className="login-label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
          className="login-input"
          required

        />

        <label htmlFor="password" className="login-label">
          Password:
        </label>
        <div className="password-input-container">
          <input
            type={formData.showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="login-input"
            required

          />
          <button
            type="button"
            className="password-toggle-btn"
            onClick={togglePasswordVisibility}
          >
            {formData.showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
      <span className="goTo-registerPage">
        Don't have an account?{" "}
        <Link className="register-link" to="/register">
          Register
        </Link>
      </span>
    </div>
  );
};

export default Login;

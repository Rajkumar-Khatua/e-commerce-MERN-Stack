import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Register.scss";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Register = ({ setAuthenticatedUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2 className="register-title">Register</h2>
        <label htmlFor="username" className="register-label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter your username"
          className="register-input"
          required
        />

        <label htmlFor="email" className="register-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="register-input"
          required
        />

        <label htmlFor="password" className="register-label">
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
            className="register-input"
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

        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
      <span className="goTo-loginPage">
        Already have an account? <Link to="/login">Login</Link>
      </span>
    </div>
  );
};

export default Register;

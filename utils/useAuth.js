// useAuth.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // For demonstration purposes, let's assume the user is authenticated by default.
    setIsAuthenticated(true);
  }, []);

  const login = () => {
    // Perform your login logic here

    // For demonstration purposes, let's assume the login is successful.
    setIsAuthenticated(true);

    // Redirect to the home page after login
    navigate("/");
  };

  const logout = () => {
    // Perform your logout logic here

    // For demonstration purposes, let's assume the logout is successful.
    setIsAuthenticated(false);

    // Redirect to the login page after logout
    navigate("/login");
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;

import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiLogin } from "react-icons/ci";
import "./Navbar.scss";
import { CartProvider, useCart } from "../Cart/Cart"; // Import useCart
import useAuth from "../../../utils/useAuth";
const Navbar = () => {
  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");

    if (navbar) {
      const scrolled = window.scrollY;
      const threshold = 50;

      if (scrolled > threshold) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { cart } = useCart(); // Destructure cart from the useCart hook
  const { isAuthenticated, login, logout } = useAuth(); // Use the useAuth hook
  const handleLogout = () => {
    logout();
  };
  return (
    <nav className={`navbar ${isAuthenticated ? "authenticated" : ""}`}>
      <div className="leftNavBar">
        <Link to="/" className="logo">
        Your Store
        </Link>
      </div>
      <div className="middleNavBar">
        <ul className="navLists">
          <Link to="/" className="navLink">
            Home
          </Link>

          <Link to="/products" className="navLink">
            Products
          </Link>
          <Link to="/about-us" className="navLink">
            About Us
          </Link>
          <Link to="/contact-us" className="navLink">
            Contact Us
          </Link>
          <Link to="/careers" className="navLink">
            Careers
          </Link>
        </ul>
      </div>
      <div className="rightNavBar">
        <div className="cartContainer">
          <Link to="/cart" className="cartLink">
            <PiShoppingCartThin className="cartIcon" />
            <span className="cartCount">{cart.length}</span>
          </Link>
        </div>
        <div className="searchContainer">
          <Link to="/search">
            <CiSearch className="searchIcon" />
          </Link>
        </div>
        <div className="authButtons">
          {isAuthenticated ? (
            <button onClick={handleLogout} className="authButton">
              Logout
            </button>
          ) : (
            <button onClick={login} className="authButton">
              Sign In
              <CiLogin fontSize={20} />
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

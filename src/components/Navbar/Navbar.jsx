// Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiLogin } from "react-icons/ci";
import "./Navbar.scss";
import { CartProvider, useCart } from "../Cart/Cart"; // Import useCart
const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [demoUser, setDemoUser] = useState({
    username: "DemoUser",
    profileImage:
      "https://images.pexels.com/photos/16756656/pexels-photo-16756656/free-photo-of-black-and-white-photo-of-a-swan-on-a-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  });

  useEffect(() => {
    // For demonstration purposes, let's assume the user is authenticated by default.
    setIsAuthenticated(false);
  }, []);

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

  return (
    <nav className={`navbar ${isAuthenticated ? "authenticated" : ""}`}>
      <div className="leftNavBar">
        <Link to="/" className="logo">
          Ss Store
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
        <Link to="/search">
          <div className="searchContainer">
            <CiSearch className="searchIcon" />
            <input
              type="text"
              placeholder="Titles, People, Genres"
              className="searchInput"
            />
          </div>
        </Link>
        {isAuthenticated ? (
          <div className="profileContainer">
            <div className="profileImgContainer">
              <img
                src={demoUser.profileImage}
                alt="Profile"
                className="profileImg"
              />
            </div>
          </div>
        ) : (
          <div className="authButtons">
            <Link to="/login" className="authButton">
              Sign In
              <CiLogin fontSize={20} />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

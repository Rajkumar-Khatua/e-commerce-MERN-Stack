import React, { useEffect, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { CiLogin, CiSearch } from "react-icons/ci";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { PiShoppingCartThin } from "react-icons/pi";
import { PiHeartLight } from "react-icons/pi";
import "./MobileNavbar.scss";
import { CartProvider, useCart } from "../Cart/Cart"; // Import useCart
import useAuth from "../../../utils/useAuth";

const MobileMenu = () => {
  const [showMenuLinks, setShowMenuLinks] = useState(false);

  const handleMenuIconClick = () => {
    setShowMenuLinks(!showMenuLinks);
  };

  const handleLinkClick = () => {
    // Additional logic when a menu link is clicked
    setShowMenuLinks(false); // Close the menu after clicking a link
  };

  const { cart } = useCart(); // Destructure cart from the useCart hook
  const { isAuthenticated, login, logout } = useAuth(); // Use the useAuth hook
  const handleLogout = () => {
    logout();
  };
  return (
    <nav className={`mobile-menu ${isAuthenticated ? "authenticated" : ""}`}>
      <div className="menu-icon" onClick={handleMenuIconClick}>
        {showMenuLinks ? <RxCross1 /> : <RiMenu2Line />}
      </div>
      <div className={`menu-links ${showMenuLinks ? "show" : ""}`}>
        <Link
          to="/"
          className="menu-link"
          onClick={() => {
            handleLinkClick();
          }}
        >
          Home
        </Link>
        <Link
          to="/products"
          className="menu-link"
          onClick={() => {
            handleLinkClick();
          }}
        >
          Products
        </Link>
        <Link
          to="/products"
          className="menu-link"
          onClick={() => {
            handleLinkClick();
          }}
        >
          Latest Products
        </Link>
        <Link
          to="/about-us"
          className="menu-link"
          onClick={() => {
            handleLinkClick();
          }}
        >
          About Us
        </Link>
        <Link
          to="/contact-us"
          className="menu-link"
          onClick={() => {
            handleLinkClick();
          }}
        >
          Contact Us
        </Link>
      </div>

      <div className="logo-container">
        <Link to="/" className="logo">
          Ss Store
        </Link>
      </div>
      <div className="profile-and-cart-options">
        <Link
          to="/search"
          className="menu-link search-link"
          onClick={() => {
            handleLinkClick();
          }}
        >
          <CiSearch fontSize={22} className="search-icon" />
        </Link>

        <div className="cart-container">
          <Link
            to="/cart"
            className="menu-link cart-link"
            onClick={() => {
              handleLinkClick();
            }}
          >
            <PiShoppingCartThin fontSize={20} className="cart-icon" />
            <span className="cartCount">{cart.length}</span>
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
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MobileMenu;

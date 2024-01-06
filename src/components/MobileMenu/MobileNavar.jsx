import React, { useEffect, useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { PiShoppingCartThin } from "react-icons/pi";
import { PiHeartLight } from "react-icons/pi";
import "./MobileNavbar.scss";
import { CartProvider, useCart } from "../Cart/Cart"; // Import useCart

const MobileMenu = () => {
  const [showMenuLinks, setShowMenuLinks] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // For demonstration purposes, let's assume the user is authenticated by default.
    setIsAuthenticated(true);
  }, []);

  const handleMenuIconClick = () => {
    setShowMenuLinks(!showMenuLinks);
  };

  const handleLinkClick = () => {
    // Additional logic when a menu link is clicked
    setShowMenuLinks(false); // Close the menu after clicking a link
  };

  const { cart } = useCart(); // Destructure cart from the useCart hook

  return (
    <nav className={`mobile-menu ${isAuthenticated ? "authenticated" : ""}`}>
      <div className="menu-icon" onClick={handleMenuIconClick}>
        {showMenuLinks ? <RxCross1 /> : <RiMenu2Line />}
      </div>
      <div className={`menu-links ${showMenuLinks ? "show" : ""}`}>
        <Link
          to="/home"
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
          to="/latest-products"
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
        {isAuthenticated ? (
          <Link
            to="/profile"
            className="menu-link"
            onClick={() => {
              handleLinkClick();
            }}
          >
            <AiOutlineUser fontSize={20} />
            Profile
          </Link>
        ) : (
          <Link
            to="/signin"
            className="menu-link"
            onClick={() => {
              handleLinkClick();
            }}
          >
            <AiOutlineLogin fontSize={20} />
            Sign Out
          </Link>
        )}
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

        {isAuthenticated ? (
          <Link
            to="/signout"
            className="menu-link profile-link"
            onClick={() => {
              handleLinkClick();
            }}
          >
            <div className="profile-img">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Profile"
                className="dummy-profile-pic"
              />
            </div>
            <div className="indicator green"></div>
          </Link>
        ) : (
          <Link
            to="/signin"
            className="menu-link"
            onClick={() => {
              handleLinkClick();
            }}
          >
            <AiOutlineLogin fontSize={20} />
            <div className="indicator grey"></div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default MobileMenu;

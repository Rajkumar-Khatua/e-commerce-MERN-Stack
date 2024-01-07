import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        <Link to="/" className="logo">
        Your Store
        </Link>
        <div className="social-icons">
          <FaFacebook className="social__icon__FB" />
          <FaXTwitter className="social__icon__TW" />
          <FaInstagram className="social__icon__IG" />
          <FaLinkedin className="social__icon__LD" />
        </div>
      </div>
      <div className="middle">
        <h4 className="middle_Title">Useful Links</h4>
        <ul className="footer-links">
          <Link className="footer__link" to="/">
            Home
          </Link>
          <Link className="footer__link" to="/products">
            Products
          </Link>
          <Link className="footer__link" to="/about-us">
            About Us
          </Link>
          <Link className="footer__link" to="/contact-us">
            Contact Us
          </Link>
          <Link className="footer__link" to="/careers">
            Career
          </Link>
        </ul>
      </div>
      <div className="right">
        <div className="newsletter">
          <h4 className="newsLetter_Title">Newsletter</h4>
          <input
            type="email"
            className="newLetter__input"
            placeholder="Subscribe to newsletter"
          />
          <button className="newLetter__btn">Subscribe</button>
        </div>
      </div>
      <div className="bottom">
        <p>&copy; 2024 Your Store. All rights reserved.</p>
        <span>Made With - 🌹</span>
      </div>
    </footer>
  );
};
export default Footer;

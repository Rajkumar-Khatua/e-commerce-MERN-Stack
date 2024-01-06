import React from "react";
import "./CartPage.scss";
import { BsCartX } from "react-icons/bs";
import { AiOutlineClear } from "react-icons/ai";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

import { useCart } from "../../components/Cart/Cart";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleClearCart = (e) => {
    e.preventDefault();

    // Clear Cart
    clearCart();
  };

  const handleCheckout = () => {
    // You can perform any additional actions before navigating to the checkout page

    // Navigate to the checkout page
    navigate("/checkout");
  };

  return (
    <div className="cart-page">
      <h1 className="Cart-Title">Your Cart</h1>

      <div className="cart-layout">
        {cart.length === 0 ? (
          <div className="empty-div">
            <p className="Cart-empty-title">Your cart is empty.</p>
            <Link to="/products" className="Cart-empty-link">
              Go to Products
              <MdOutlineProductionQuantityLimits size={22} />
            </Link>
          </div>
        ) : (
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">$ {item.price}</p>
                  <p className="cart-item-description">{item.description}</p>
                  <p className="cart-item-quantity">
                    Quantity: {item.quantity}
                  </p>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                    <BsCartX className="remove-icon" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="cart-Actions">
          <span className="Total-price">
            Total Price: $ {cart.reduce((acc, item) => acc + item.price, 0)}
          </span>
          <button className="clear-cart" onClick={handleClearCart}>
            Clear Cart <AiOutlineClear size={22} />
          </button>
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout <IoBagCheckOutline size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

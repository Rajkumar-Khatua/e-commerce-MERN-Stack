import React, { useState } from "react";
import "./CheckoutPage.scss"; // Add your styling
import { useCart, CartProvider } from "../../components/Cart/Cart";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleBuyNow = () => {
    setLoading(true);
    // Perform the buy now action (e.g., payment processing)

    // simulate a delay in the process to show a loading indicator to the user
    setTimeout(() => {
      // Clear the cart after successful purchase
      // This is just an example, you may want to handle this based on your actual requirements
      // For now, we'll just clear the cart
      clearCart();
      // Redirect to a thank you page or any other relevant page
      navigate("/thank-you");
    }, 5000);
  };

  return (
    <div className="checkout-page">
      <h1 className="checkout-heading">Checkout</h1>
      {loading ? (
        <p className="loading-indicator">Processing your purchase...</p>
      ) : cart.length === 0 ? (
        <p className="empty-cart-message">
          Your cart is empty. Add some items before proceeding to checkout.
        </p>
      ) : (
        <>
          <ul className="checkout-items">
            {cart.map((item) => (
              <li key={item.id} className="checkout-item">
                {/* Image is not displayed, show only name and price */}
                <div className="checkout-item-details">
                  <h3 className="checkout-item-name">{item.name}</h3>
                  <p className="checkout-item-price">$ {item.price}</p>
                  <button
                    className="remove-from-cart"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="buyer-info">
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" id="fullName" name="fullName" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" />

            <label htmlFor="payment">Payment Options:</label>
            <select id="payment" name="payment" disabled>
              <option value="cod">Cash on Delivery</option>
              {/* Online payment options are disabled and a placeholder message is shown */}
              <option value="coming-soon" disabled>
                Online payment options (Coming Soon)
              </option>
            </select>
          </div>

          <span className="total-price">
            Total Price: $ {cart.reduce((acc, item) => acc + item.price, 0)}
          </span>
          <button className="buy-now" onClick={handleBuyNow}>
            Buy Now
          </button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;

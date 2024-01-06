import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import "./ThankYou.scss";

const ThankYouPage = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  return (
    <animated.div style={fadeIn} className="thank-you-page">
      <div className="thank-you-content">
        <h1 className="thank-you-heading">Thank You!</h1>
        <p className="thank-you-message">
          Your purchase was successful. We appreciate your business!
        </p>
        <Link to="/" className="back-to-home">
          Back to Home
        </Link>
      </div>
    </animated.div>
  );
};

export default ThankYouPage;

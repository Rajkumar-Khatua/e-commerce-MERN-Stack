// AboutUs.jsx
import React from 'react';
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-section">
        <h1>Welcome to Ss Store</h1>
        <p>
          At Your Store, we believe in providing a seamless shopping experience for our
          customers. Our commitment is to offer a diverse range of high-quality
          products at affordable prices.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower individuals and enhance their lives by offering
          innovative and reliable products. We strive to build lasting relationships
          with our customers through exceptional service and customer satisfaction.
        </p>
      </section>

      <section className="values-section">
        <h2>Our Values</h2>
        <ul>
          <li>Quality - Delivering products of the highest standards.</li>
          <li>Customer-Centric - Putting our customers first.</li>
          <li>Innovation - Constantly seeking new and improved solutions.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;

// Contact.jsx
import React from 'react';
import './Contact.scss';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the form submission (e.g., send data to server, etc.)
    console.log('Form submitted!');
  };

  return (
    <div className="contact-container">
      <section className="contact-info-section">
        <h1>Contact Us</h1>
        <p>
          Have questions or feedback? Reach out to us through the following
          channels:
        </p>
        <ul>
          <li>Email: <a href="mailto:info@Your Store.com">info@Your Store.com</a></li>
          <li>Phone: +1 (123) 456-7890</li>
          <li>Address: 1234 Store Street, Cityville, Country</li>
        </ul>
      </section>

      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;

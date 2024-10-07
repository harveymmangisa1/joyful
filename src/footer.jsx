import React from 'react';
import './Footer.css'; // Ensure you create a Footer.css file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and About */}
        <div className="footer-about">
          <h3>Joyful Kids</h3>
          <p>We believe in making the world a better place, one child at a time.</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#donate">Donate</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h4>Connect with Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="footer-payments">
        <h4>We Accept:</h4>
        <img src="path/to/paypal-icon.png" alt="PayPal" className="payment-icon" />
        <img src="path/to/visa-icon.png" alt="Visa" className="payment-icon" />
      </div>

      {/* Copyright Notice */}
      <div className="footer-bottom">
        <p>&copy; 2024 Joyful Kids. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

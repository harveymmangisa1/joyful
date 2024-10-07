// Checkout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Checkout.css'; // Create a CSS file for styling

const Checkout = () => {
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <p>Select your payment method:</p>
      <div className="payment-options">
        <div className="option">
          <h2>PayPal</h2>
          <div id="paypal-button-container"></div> {/* PayPal button will be rendered here */}
        </div>
        <div className="option">
          <h2>Credit Card</h2>
          {/* Here you can add a form for credit card information */}
          <form>
            <input type="text" placeholder="Card Number" required />
            <input type="text" placeholder="Expiration Date (MM/YY)" required />
            <input type="text" placeholder="CVV" required />
            <button type="submit">Pay with Visa</button>
          </form>
        </div>
      </div>
      <Link to="/">Back to Donation</Link>
    </div>
  );
};

export default Checkout;

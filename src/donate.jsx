// Donate.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Donate.css';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const navigate = useNavigate();

  const handleDonate = () => {
    if (!amount && !customAmount) {
      alert('Please select an amount to donate or enter a custom amount.');
      return;
    }
    
    const donationAmount = customAmount || amount;
    navigate('/checkout', { state: { amount: donationAmount } });
  };

  return (
    <div className="donate-page">
      <h1>Support Joyful Kids</h1>
      <p>Your donations help provide education, health, and a brighter future for children in need.</p>

      <div className="donation-amounts">
        <button onClick={() => { setAmount(10); setCustomAmount(''); }} className="donation-button">$10</button>
        <button onClick={() => { setAmount(20); setCustomAmount(''); }} className="donation-button">$20</button>
        <button onClick={() => { setAmount(50); setCustomAmount(''); }} className="donation-button">$50</button>
        <button onClick={() => { setAmount(100); setCustomAmount(''); }} className="donation-button">$100</button>
        <input
          type="number"
          placeholder="Custom amount"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setAmount('');
          }}
          className="custom-amount-input"
        />
      </div>

      <button onClick={handleDonate} className="donate-button">Donate</button>

      <Link to="/" className="back-to-home">Back to Home</Link>
    </div>
  );
};

export default Donate;

// GetInTouch.jsx
import React, { useState } from 'react';
import './Contact.css'; // Create this CSS file for styling

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a successful submission
    setSuccessMessage('Joyful Kids is glad to hear from you!');

    // Clear the form fields
    setName('');
    setEmail('');
    setPhone('');
    setComment('');

    // Hide the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="get-in-touch">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <textarea
          placeholder="Comment (optional)"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default Contact;

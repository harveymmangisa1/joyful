import React from 'react';
import './Cta.css';
import { useNavigate } from 'react-router-dom';

const Cta = () => {
  const navigate = useNavigate();

  const goToDonatePage = () => {
    navigate('/donate');
  };

  return (
    <section className="call-to-action">
      <div className="cta-content">
        <h2>Help Us Make a Difference</h2>
        <p>Your support can change the lives of many children in need. Join us in providing them with a brighter future.</p>
        <div className="cta-buttons">
          <button onClick={goToDonatePage}>Donate Now</button> {/* Navigates to the Donate page */}
          <a href="/get-involved" className="cta-button">Get Involved</a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
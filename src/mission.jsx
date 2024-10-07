// MissionVision.jsx

import React from 'react';
import './Mission.css'; // Create a separate CSS file for styles

const Mission = () => {
  return (
    <div className="mission-vision" style={{ backgroundImage: 'url(./images/your-background-image.jpg)' }}>
      <div className="mission-vision-content">
        <h2>Our Mission, Vision & Slogan</h2>
        <div className="cards">
          <div className="card">
            <h3>Mission</h3>
            <p>To empower children with education and resources for a brighter future.</p>
          </div>
          <div className="card">
            <h3>Vision</h3>
            <p>A world where every child has access to quality education and support.</p>
          </div>
          <div className="card">
            <h3>Slogan</h3>
            <p>Building a better future, one child at a time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;

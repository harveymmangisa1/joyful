// About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Stories from './Stories'; // Import the Stories component
import Team from './Team'; // Import the Team component
import './About.css'; // Optional: Import CSS for the About component

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p className="about-description">
        We are dedicated to supporting underprivileged children by providing them with education, health, and a brighter future. Join us in making a difference in their lives!
      </p>

      <Link to="/stories" className="about-link">Read Our Stories</Link>
      <Link to="/team" className="about-link">Meet Our Team</Link>

      <Stories /> {/* Stories Component */}
      <Team /> {/* Team Component */}
    </div>
  );
};

export default About;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Nav.css'; // We will add CSS for styling

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
      <div className="logo">
  <h2>
    <Link to="/">Joyful Kids</Link> {/* Change href to Link component */}
  </h2>
</div>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/about">About </Link></li>
            <li><a href="#programs">Programs</a></li>
            <li><Link to="/donate">Donate</Link></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

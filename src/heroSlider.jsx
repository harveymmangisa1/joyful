import React, { useState } from 'react';
import './HeroSlider.css'; // Assuming styles are in a separate file

const images = [
  './images/volunteers1.jpeg',
  './images/volunteers2.jpeg',
  './images/volunteers3.jpeg',
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="hero-slider">
      <div
        className="hero"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="hero-content">
          <h1>Welcome to Joyful Kids</h1>
          <p>Empowering communities with love and care.</p>
        </div>
      </div>

      {/* Buttons */}
      <button className="left-arrow" onClick={prevImage}>
        &#10094; {/* Left arrow symbol */}
      </button>
      <button className="right-arrow" onClick={nextImage}>
        &#10095; {/* Right arrow symbol */}
      </button>
    </div>
  );
};

export default HeroSlider;

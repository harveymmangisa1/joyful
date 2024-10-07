import React, { useState, useEffect } from 'react';
import './Hero.css';
import volunteersImage from './images/volunteers.jpeg'; // Import the images
import background2Image from './images/background2.jpeg';
import background3Image from './images/background3.jpeg';

const Hero = () => {
  const images = [volunteersImage, background2Image, background3Image]; // Use imported images

  const [currentImage, setCurrentImage] = useState(0);

  // Automatically move to the next image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className="hero" style={{ backgroundImage: `url(${images[currentImage]})` }}>
      <div className="hero-content">
        <h1>Joyful Kids</h1>
        <p>Building a better future</p>
      </div>
      <button className="nav-button left" onClick={goToPrevious}>&#10094;</button>
      <button className="nav-button right" onClick={goToNext}>&#10095;</button>
    </div>
  );
};

export default Hero;

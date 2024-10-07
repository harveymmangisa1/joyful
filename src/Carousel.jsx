import React, { useState } from 'react';
import './Carousel.css'; // We will add CSS for styling

const images = [
  'images/image1.jpg', // Replace with your image URLs
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
  // Add more images as needed
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        <div
          className="carousel-image"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>
      </div>
      <button className="carousel-button left" onClick={prevImage}>
        &#10094; {/* Left arrow */}
      </button>
      <button className="carousel-button right" onClick={nextImage}>
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Carousel;

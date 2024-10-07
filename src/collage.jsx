// Collage.jsx
import React, { useState } from 'react';
import './Collage.css'; // Import your styles for the collage

const images = [
  { src: "/src/images/volunteers.jpeg", alt: "Inspiration 1" },
  { src: "/src/images/joy1.jpeg", alt: "Inspiration 2" },
  { src: "/src/images/joy2.jpeg", alt: "Inspiration 3" },
  { src: "/src/images/joy3.jpeg", alt: "Inspiration 4" },
  { src: "/src/images/joy4.jpeg", alt: "Inspiration 5" },
  { src: "/src/images/joy5.jpeg", alt: "Inspiration 6" },
  { src: "/src/images/joy6.jpeg", alt: "Inspiration 7" },
  { src: "/src/images/joy7.jpeg", alt: "Inspiration 8" },
];

const Collage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="collage">
      <h2>Inspiration for Giving</h2>
      <div className="collage-image-container">
        <button className="nav-button" onClick={prevImage}>❮</button>
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="collage-image" />
        <button className="nav-button" onClick={nextImage}>❯</button>
      </div>
    </div>
  );
};

export default Collage;

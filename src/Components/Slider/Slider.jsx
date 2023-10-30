import React, { useState, useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';

const images = ['images/Slider/1.png', 'images/Slider/2.png', 'images/Slider/3.png'];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScrollToFavorites = () => {
    const favoritesSection = document.getElementById('favorites');
    if (favoritesSection) {
      const offsetTop = favoritesSection.offsetTop; // Obtiene la posición superior de la sección "favorites"
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentIndex(randomIndex);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slider-container">
      <h1 className="top-left-button"><img src="images/logo.png" alt="" /></h1>
      <Link to='work'>
        <a className="top-right-button">Work</a>
      </Link>
      <Link to='more'>
        <a className="bottom-left-button">More</a>
      </Link>
      <div className="flecha-container" onClick={handleScrollToFavorites}>
        <img src="images/flecha.png" alt="" className="flecha" />
      </div>
      <Link to='about'>
        <a className="bottom-right-button">About</a>
      </Link>

      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-image ${index === currentIndex ? "active" : ""}`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}
    </div>
  );
};

export default Slider;

import React, { useState, useEffect, useRef } from "react";
import useScrollHandler from '../../js/useScrollHandler';


const images = ['images/Slider/1.png', 'images/Slider/2.png', 'images/Slider/3.png'];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const myRef = useRef(null);
  const isScrolling = useScrollHandler(myRef);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentIndex(randomIndex);
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleScrollToFavorites = () => {
    const favoritesSection = document.getElementById('favorites');
    if (favoritesSection) {
      favoritesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="slider-container" ref={myRef}>

      <div className="flecha-container" onClick={handleScrollToFavorites}>
        <img src="images/flecha.png" alt="" className="flecha" />
      </div>
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-image ${index === currentIndex ? "active" : ""}`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}
    </header>
  );
};

export default Slider;

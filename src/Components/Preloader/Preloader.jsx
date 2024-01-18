// Preloader.js
import React, { useEffect, useState } from 'react';
import { useSecondData } from '../../../Context/Context';

const Preloader = ({ visible, onLoaded }) => {
  const secondData = useSecondData();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = secondData.map((item) => item.c[5]?.v).filter(Boolean);

  useEffect(() => {
    let intervalId;

    if (visible) {
      const startImageRotation = () => {
        intervalId = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Cambiado a 3000 milisegundos (3 segundos)
      };

      startImageRotation();

      const hidePreloaderTimeout = setTimeout(() => {
        clearInterval(intervalId);
        if (typeof onLoaded === 'function') {
          onLoaded();
        }
      }, 3000);

      return () => {
        clearInterval(intervalId);
        clearTimeout(hidePreloaderTimeout);
      };
    }
  }, [images, onLoaded, visible]);

  return (
    <div className={`preloader-container ${visible ? '' : 'loaded'}`}>
      {visible && <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />}
    </div>
  );
};

export default Preloader;

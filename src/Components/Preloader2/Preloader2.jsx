import React, { useState, useEffect } from 'react';
import { useSecondData } from '../../../Context/Context';

const Preloader2 = () => {
//   const images = ['images/insta.png', 'images/carga.png', 'images/lupa.png'];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const secondData = useSecondData();
  
  const images = secondData.map((item) => item.c[5]?.v).filter(Boolean);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Cambia la imagen cada segundo

    setTimeout(() => {
      clearInterval(interval);
      setIsLoading(false); // Oculta el preloader después de 3 segundos
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log('isLoading:', isLoading);
  }, [isLoading]);

  return (
    <div className={`preloader-container ${isLoading ? 'visible' : 'hidden'}`}>
      {isLoading && <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />}
    </div>
  );
};

export default Preloader2;

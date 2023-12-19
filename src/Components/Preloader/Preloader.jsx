import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const images = ['images/video.png', 'images/x.png', 'images/lupa.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Establecer un temporizador para asegurarse de que el preloader dure al menos 2 segundos
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Intervalo para cambiar las imágenes
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    // Limpiar temporizador e intervalo al desmontar el componente
    return () => {
      clearInterval(intervalId);
      clearTimeout(timerId);
    };
  }, [images]);

  return (
    <div className={`preloader-container ${isLoading ? 'loading' : ''}`}>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
    </div>
  );
};

export default Preloader;

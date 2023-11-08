import React from 'react';
import SmoothScroll from 'smooth-scroll';

const Project2 = () => {
  // Inicializar Smooth Scroll
  new SmoothScroll('a[href*="#"]', {
    speed: 1000, // Duración de la animación en milisegundos
    easing: 'easeInOutQuad', // Tipo de animación (opcional, puedes ajustarlo según tus preferencias)
  });

  return (
    <div className="slider">
        <img src="images/Slider/1.png" alt="Imagen 1" />
        <img src="images/Slider/2.png" alt="Imagen 2" />
        <img src="images/Slider/3.png" alt="Imagen 3" />
        <img src="images/Slider/3.png" alt="Imagen 3" />
        <img src="images/Slider/3.png" alt="Imagen 3" />
        <img src="images/Slider/3.png" alt="Imagen 3" />

    </div>
  );
};

export default Project2;
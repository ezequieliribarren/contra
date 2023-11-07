import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TopLeftButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Lógica de ocultar el botón cuando se hace scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link to='/' className={`top-left-button ${isVisible ? 'visible' : 'hidden'}`}>
      {/* Contenido del botón */}
    </Link>
  );
};

export default TopLeftButton;
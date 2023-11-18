import React, { useState, useEffect } from 'react';
import { useFourData } from '../../../Context/Context';

const Marcas = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const data = useFourData();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const calculateActiveIndex = () => {
      const liElements = document.querySelectorAll('.fondo-change ol li');

      for (let i = 0; i < liElements.length; i++) {
        const rect = liElements[i].getBoundingClientRect();
        const liTop = rect.top;
        const liBottom = rect.bottom;

        if (liTop <= window.innerHeight / 2 && liBottom >= window.innerHeight / 2) {
          setActiveIndex(i);
          break;
        }
      }
    };

    calculateActiveIndex();

    window.addEventListener('scroll', calculateActiveIndex);

    return () => {
      window.removeEventListener('scroll', calculateActiveIndex);
    };
  }, []);

  const marcas = data.map((row) => ({
    nombre: row.c[12]?.v,
    imagen: row.c[13]?.v,
  }));

  const backgroundImageStyle = marcas[activeIndex]?.imagen
    ? {
        backgroundImage: `url(${marcas[activeIndex].imagen})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        height: '100%', 
      }
    : {};

  // Ajusta el valor de scrollThreshold según tus necesidades
  const scrollThreshold = 20; 

  return (
    <div className='fondo-change' style={backgroundImageStyle}>
      <ol>
        {marcas.map((marca, index) =>
          marca.nombre && marca.imagen ? (
            <li
              key={index}
              style={{
                height: '30rem', // Ajusta la altura según tus necesidades
                lineHeight: '30rem', // Puedes ajustar esto también
                textAlign: 'center',
                color: activeIndex === index ? 'white' : 'gray',
                fontFamily: 'machina',
                fontSize: '5rem',
                marginBottom: '80px', // Agrega un margen inferior para separar los elementos
                transition: 'background-image 0.5s ease-in-out', // Agregado para suavizar el cambio
              }}
            >
              <div>
                <img className='img-fluid' src={marca.nombre} alt="" />
              </div>
            </li>
          ) : null
        )}
      </ol>
    </div>
  );
};

export default Marcas;

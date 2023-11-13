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
      for (let i = liElements.length - 1; i > 0; i--) {
        const rect = liElements[i].getBoundingClientRect();
        const liTop = rect.top;
        if (liTop <= window.innerHeight / 2) {
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

  // Mapear los datos de la hoja de cálculo a un formato compatible
  const marcas = data.map((row) => ({
    nombre: row.c[10]?.v,
    imagen: row.c[11]?.v,
  }));

  const backgroundImageStyle = marcas[activeIndex]?.imagen
    ? { backgroundImage: `url(${marcas[activeIndex].imagen})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center center', }
    : {};

  return (
    <div className='fondo-change' style={backgroundImageStyle}>
      <ol>
        {marcas.map((marca, index) => (
          <li
            key={index}
            style={{
              height: index > 0 ? '40rem' : '30rem',
              lineHeight: index > 0 ? '40rem' : '30rem',
              textAlign: 'center',
              color: activeIndex === index ? 'white' : 'gray',
              fontFamily: 'machina',
              fontSize: '5rem',
            }}
          >
            <div><img src={marca.nombre} alt="" /></div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Marcas;

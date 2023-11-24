import React, { useState, useEffect, useRef } from 'react';
import { useFourData } from '../../../Context/Context';

const Marcas = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const data = useFourData();
  const olRef = useRef(null);

  useEffect(() => {
    const calculateActiveIndex = () => {
      const liElements = olRef.current.querySelectorAll('li');

      for (let i = 0; i < liElements.length; i++) {
        const liRect = liElements[i].getBoundingClientRect();
        const liTop = liRect.top;
        const liBottom = liRect.bottom;

        if (liTop <= window.innerHeight / 2 && liBottom >= window.innerHeight / 2) {
          setActiveIndex(i);
          break;
        }
      }
    };

    calculateActiveIndex();

    const olElement = olRef.current;
    olElement.addEventListener('scroll', calculateActiveIndex);

    return () => {
      olElement.removeEventListener('scroll', calculateActiveIndex);
    };
  }, []);

  if (!data || data.length === 0) {
    return null; // Si no hay datos, no renderiza nada
  }

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

  return (
    <div className='fondo-change' style={backgroundImageStyle}>
      <ol className='scrollable-list' ref={olRef}>
        {marcas.map((marca, index) =>
          marca.nombre && marca.imagen ? (
            <li
              key={index}
              style={{
                height: index === 0 ? 0 : '30rem',
                lineHeight: '30rem',
                textAlign: 'center',
                color: activeIndex === index ? 'white' : 'gray',
                fontFamily: 'machina',
                fontSize: '5rem',
                marginBottom: '80px',
                opacity: index === 0 ? 0 : 1,
                transition: 'color 0.5s ease-in-out, opacity 0.3s ease-in-out', // Ajusta la duración y la función de temporización según tus preferencias
              }}
            >
              <div>
                <img className='img-fluid' src={marca.nombre} alt="Marca" />
              </div>
            </li>
          ) : null
        )}
      </ol>
    </div>
  );
};

export default Marcas;

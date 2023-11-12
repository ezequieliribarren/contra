import React, { useState, useEffect } from 'react';

const Marcas = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

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

  const marcas = [
    { nombre: '', imagen: '' },
    { nombre: 'Cliente 2', imagen: 'images/Slider/2.png' },
    { nombre: 'Cliente 3', imagen: 'images/Slider/3.png' },
    { nombre: 'Cliente 4', imagen: 'images/Slider/1.png' },
  ];

  return (
    <div className='fondo-change' style={{ backgroundImage: `url(${marcas[activeIndex].imagen})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
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
            <div>{marca.nombre}</div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Marcas;

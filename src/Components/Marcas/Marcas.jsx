<<<<<<< HEAD
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
=======
import React, { useState, useEffect, useRef } from 'react';
import { useFourData } from '../../../Context/Context';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Marcas = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const data = useFourData();
  const olRef = useRef(null);

  useEffect(() => {
    const calculateActiveIndex = () => {
      const liElements = olRef.current.querySelectorAll('li');

      for (let i = 0; i < liElements.length; i++) {
        const liRect = liElements[i].getBoundingClientRect();
        const liTop = liRect.top;
        const liBottom = liRect.bottom;
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23

        if (liTop <= window.innerHeight / 2 && liBottom >= window.innerHeight / 2) {
          setActiveIndex(i);
          break;
        }
      }
    };

    calculateActiveIndex();

<<<<<<< HEAD
    window.addEventListener('scroll', calculateActiveIndex);

    return () => {
      window.removeEventListener('scroll', calculateActiveIndex);
    };
  }, []);

  // Mapear los datos de la hoja de cálculo a un formato compatible
  const marcas = data.map((row) => ({
    nombre: row.c[11]?.v,
    imagen: row.c[12]?.v,
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
              }}
            >
              <div>
                <img src={marca.nombre} alt="" />
              </div>
            </li>
          ) : null
        )}
      </ol>
=======
    const olElement = olRef.current;
    olElement.addEventListener('scroll', calculateActiveIndex);

    return () => {
      olElement.removeEventListener('scroll', calculateActiveIndex);
    };
  }, []);

  const marcas = data.map((row) => ({
    nombre: row.c[12]?.v,
    imagen: row.c[13]?.v,
  }));

  const backgroundImageStyle = marcas[activeIndex]?.imagen && imageLoaded
  ? {
      backgroundImage: `url(${marcas[activeIndex].imagen})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      height: '100%',
      transition: 'none',
    }
  : {};

  useEffect(() => {
    // Precarga de imágenes
    const imagePromises = marcas.map((marca) => {
      return new Promise((resolve) => {
        const image = new Image();
        image.src = marca.imagen;
        image.onload = () => resolve();
      });
    });

    Promise.all(imagePromises).then(() => {
      // Todas las imágenes han sido precargadas
      setImageLoaded(true);
    });
  }, [marcas]);

  const handleScroll = (scrollDirection) => {
    const totalItems = marcas.length;

    if (scrollDirection === 'up' && activeIndex === 0) {
      // Scroll hacia arriba desde el primer elemento
      scroll.scrollTo('han-trabajado-aqui', {
        duration: 700,
        smooth: 'easeInOutQuart',
      });
    } else if (scrollDirection === 'down' && activeIndex === totalItems - 1) {
      // Scroll hacia abajo desde el último elemento
      scroll.scrollTo('contact', {
        duration: 700,
        smooth: 'easeInOutQuart',
      });
    }
  };

  const handleScrollLinkClick = () => {
    // Si haces clic en el enlace de ScrollLink, haz scroll al siguiente elemento
    const nextSection = olRef.current.nextSibling;
    if (nextSection) {
      scroll.scrollTo(nextSection.offsetTop, {
        duration: 700,
        smooth: 'easeInOutQuart',
      });
    }
  };

  return (
    <div id='marcas' className='fondo-change' style={backgroundImageStyle}>
      <ol className='scrollable-list' ref={olRef}>
        {marcas.map((marca, index) => (
          <li
            key={index}
            className={`${
              !marca.nombre || !marca.imagen ? 'display-none' : ''
            }`}
            style={{
              height: index === 0 ? 0 : '30rem',
              textAlign: 'center',
              color: activeIndex === index ? 'white' : 'gray',
              fontFamily: 'machina',
              fontSize: '5rem',
              marginBottom: '80px',
              opacity: index === 0 ? 0 : 1,
            }}
          >
            <div>
              <img className='img-fluid' src={marca.nombre} alt="Marca" />
            </div>
          </li>
        ))}
      </ol>

      <ScrollLink
        to="han-trabajado-aqui"
        spy={true}
        smooth={true}
        duration={700}
        className='scroll-link'
        onClick={handleScrollLinkClick}
      ></ScrollLink>

      <ScrollLink
        to="contact"
        spy={true}
        smooth={true}
        duration={700}
        className='scroll-link'
        onClick={handleScrollLinkClick}
      ></ScrollLink>
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
    </div>
  );
};

export default Marcas;

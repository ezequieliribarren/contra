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
    </div>
  );
};

export default Marcas;

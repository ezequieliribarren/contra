<<<<<<< HEAD
import React, { useRef } from 'react';
import useScrollHandler from '../../js/useScrollHandler';
import { useFourData } from '../../../Context/Context';

const HanTrabajadoAqui = () => {
  const listContainerRef = useRef(null);
  const isScrolling = useScrollHandler(listContainerRef);
  const data = useFourData();
=======
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useFourData } from '../../../Context/Context';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HanTrabajadoAqui = () => {
  const listContainerRef = useRef(null);
  const data = useFourData();
  const [hoveredIndexLeft, setHoveredIndexLeft] = useState(null);
  const [hoveredIndexRight, setHoveredIndexRight] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleScroll = useCallback(
    (event) => {
      const delta = Math.sign(event.deltaY);

      // Ajusta el umbral de desplazamiento
      const scrollThreshold = 3; // Cambiado a 3px

      setScrollY((prevScrollY) => prevScrollY + Math.abs(delta));

      if (delta > 0 && Math.abs(scrollY) >= scrollThreshold) {
        // Solo permite desplazamiento hacia abajo
        const nextSection = listContainerRef.current.nextSibling;
        if (nextSection) {
          // Utiliza ScrollLink para realizar el scroll hacia abajo
          scroll.scrollTo(nextSection.offsetTop, {
            duration: 700,
            smooth: 'easeInOutQuart',
          });
        }

        setScrollY(0);
      }
    },
    [scrollY]
  );

  useEffect(() => {
    if (listContainerRef.current) {
      listContainerRef.current.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (listContainerRef.current) {
        listContainerRef.current.removeEventListener('wheel', handleScroll);
      }
    };
  }, [handleScroll]);
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23

  return (
    <section id='han-trabajado-aqui' ref={listContainerRef}>
      <div className="container-fluid">
<<<<<<< HEAD
        <h2>Han trabajado aquí</h2>
=======
        <h2 data-aos="zoom-in">Han trabajado aquí</h2>
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
        <div className="row">
          <div className="col-12 col-sm-6" data-aos="zoom-in">
            <ul>
<<<<<<< HEAD
              {data.slice(1).map((member, index) => (
                <li key={index}>{member.c[8]?.v}</li>
=======
              {data.slice(1).filter(member => member.c[9]?.v).map((member, index) => (
                <li
                  className={`li-trabajado ${hoveredIndexLeft === index ? 'hovered' : ''}`}
                  key={index}
                  onMouseEnter={() => setHoveredIndexLeft(index)}
                  onMouseLeave={() => setHoveredIndexLeft(null)}
                  style={{ backgroundImage: `url(${hoveredIndexLeft === index ? member.c[14]?.v : ''})` }}
                >
                  <h4>{member.c[9]?.v}</h4>
                </li>
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
              ))}
            </ul>
          </div>
          <div className="col-12 col-sm-6" data-aos="zoom-in">
            <ul>
<<<<<<< HEAD
              {data.slice(1).map((member, index) => (
                <li key={index}>{member.c[9]?.v}</li>
=======
              {data.slice(1).filter(member => member.c[10]?.v).map((member, index) => (
                <li
                  className={`li-trabajado ${hoveredIndexRight === index ? 'hovered' : ''}`}
                  key={index}
                  onMouseEnter={() => setHoveredIndexRight(index)}
                  onMouseLeave={() => setHoveredIndexRight(null)}
                  style={{ backgroundImage: `url(${hoveredIndexRight === index ? member.c[14]?.v : ''})` }}
                >
                  <h4>{member.c[10]?.v}</h4>
                </li>
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Utiliza ScrollLink para ir a la sección #marcas */}
      <ScrollLink
        to="marcas"
        spy={true}
        smooth={true}
        duration={700}
        className='scroll-link'
      ></ScrollLink>
    </section>
  );
};

export default HanTrabajadoAqui;

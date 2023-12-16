import React, { useRef, useEffect, useState, useCallback } from 'react';
import useScrollHandler from '../../js/useScrollHandler';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useFourData } from '../../../Context/Context';

const HanTrabajadoAqui = () => {
  const listContainerRef = useRef(null);
  const isScrolling = useScrollHandler(listContainerRef);
  const data = useFourData();
  const [hoveredIndexLeft, setHoveredIndexLeft] = useState(null);
  const [hoveredIndexRight, setHoveredIndexRight] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback((event) => {
    const delta = Math.sign(event.deltaY);

    // Ajusta el umbral de desplazamiento
    const scrollThreshold = 2;

    setScrollY((prevScrollY) => prevScrollY + Math.abs(delta));

    if (Math.abs(scrollY) >= scrollThreshold) {
      const nextSection = listContainerRef.current.nextSibling;
      const prevSection = listContainerRef.current.previousSibling;

      if (delta > 0) {
        // Scrolling hacia abajo
        if (nextSection) {
          scroll.scrollTo(nextSection.offsetTop, {
            duration: 700,
            smooth: 'easeInOutQuart',
          });
        }
      } else {
        // Scrolling hacia arriba
        if (prevSection) {
          scroll.scrollTo(prevSection.offsetTop, {
            duration: 700,
            smooth: 'easeInOutQuart',
          });
        }
      }

      setScrollY(0);
    }
  }, [scrollY]);

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

  return (
    <section id='han-trabajado-aqui' ref={listContainerRef}>
      <div className="container-fluid">
        <h2>Han trabajado aquí</h2>
        <div className="row">
          <div className="col-12 col-sm-6">
            <ul>
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
              ))}
            </ul>
          </div>
          <div className="col-12 col-sm-6">
            <ul>
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
              ))}
            </ul>
          </div>
        </div>
      </div>
      <ScrollLink
        to={`equipo`}
        smooth={true}
        duration={1500}
        offset={-50} // Ajusta este valor según sea necesario
        className='scroll-link'
      ></ScrollLink>
    </section>
  );
};

export default HanTrabajadoAqui;

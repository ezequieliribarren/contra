import React, { useRef, useEffect } from 'react';
import useScrollHandler from '../../js/useScrollHandler';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useFourData } from '../../../Context/Context';

const HanTrabajadoAqui = () => {
  const listContainerRef = useRef(null);
  const isScrolling = useScrollHandler(listContainerRef);
  const data = useFourData();

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);

    if (delta < 0) {
      // Scrolling hacia arriba
      const prevSection = listContainerRef.current.previousSibling;
      if (prevSection) {
        scroll.scrollTo(prevSection.offsetTop, {
          duration: 700,
          smooth: 'easeInOutQuart',
        });
      }
    } else {
      // Scrolling hacia abajo
      const nextSection = listContainerRef.current.nextSibling;
      if (nextSection) {
        scroll.scrollTo(nextSection.offsetTop, {
          duration: 700,
          smooth: 'easeInOutQuart',
        });
      }
    }
  };

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
          <div className="col">
            <ul>
              {data.slice(1).filter(member => member.c[9]?.v).map((member, index) => (
                <li key={index}>{member.c[9]?.v}</li>
              ))}
            </ul>
          </div>
          <div className="col">
            <ul>
              {data.slice(1).filter(member => member.c[10]?.v).map((member, index) => (
                <li key={index}>{member.c[10]?.v}</li>
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

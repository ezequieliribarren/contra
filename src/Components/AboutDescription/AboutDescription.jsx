import React, { useRef, useState, useEffect } from 'react';
import { useFourData } from '../../../Context/Context';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { GridLoader } from 'react-spinners';
import Diagrama from '../Diagrama/Diagrama';

const AboutDescription = () => {
  const data = useFourData();
  const aboutDescriptionRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);

    // Ajusta el umbral de desplazamiento
    const scrollThreshold = 2;

    setScrollY((prevScrollY) => prevScrollY + Math.abs(delta));

    if (Math.abs(scrollY) >= scrollThreshold) {
      const nextSection = aboutDescriptionRef.current.nextSibling;
      if (nextSection) {
        scroll.scrollTo(nextSection.offsetTop, {
          duration: 700,
          smooth: 'easeInOutQuart',
        });
      }

      setScrollY(0);
    }
  };

  useEffect(() => {
    if (aboutDescriptionRef.current) {
      aboutDescriptionRef.current.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (aboutDescriptionRef.current) {
        aboutDescriptionRef.current.removeEventListener('wheel', handleScroll);
      }
    };
  }, [handleScroll]);

  useEffect(() => {
    setLoading(true);
    if (data && data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  return (
    <section id='about-description' ref={aboutDescriptionRef}>
      {loading ? (
        <div className="spinner-container">
          <GridLoader color={'#E3570D'} size={20} loading={loading} padd />
        </div>
      ) : (
        <div className="container-fluid about-description">
          <div className="row">
            <div className="col-12 col-xl-6 about-description-text">
              {data.slice(1).map((p, index) => (
                <React.Fragment key={index}>
                  <p className='about-p'>{p.c[0]?.v}</p>
                  <p>{p.c[1]?.v}</p>
                  <p className='about-p3'>{p.c[2]?.v}</p>
                </React.Fragment>
              ))}
              <div>
                <a className='about-description-a' download='' href="">
                  Descarga nuestro dossier (.pdf)
                </a>
              </div>
            </div>
            <div className="col-12 col-xl-6 about-grafic">
              <img src="images/about/grafic.png" alt="" />
            </div>
          </div>
        </div>
      )}
      <ScrollLink
        to={`equipo`}
        smooth={true}
        duration={1500}
        offset={-50}
        className="scroll-link"
      ></ScrollLink>
    </section>
  );
}

export default AboutDescription;

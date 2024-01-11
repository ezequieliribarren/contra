<<<<<<< HEAD
import React, { useRef } from 'react';
import useScrollHandler from '../../js/useScrollHandler';
import { useFourData } from '../../../Context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutDescription = () => {
  const mySectionRef = useRef(null);
  const isScrolling = useScrollHandler(mySectionRef);
  const data = useFourData();

  return (
    <section id='about-description' ref={mySectionRef}>
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
            <img className='img-fluid' src="images/about/grafic.png" alt="" />
          </div>
        </div>
      </div>
=======
import React, { useRef, useState, useEffect } from 'react';
import { useFourData } from '../../../Context/Context';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { GridLoader } from 'react-spinners';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutDescription = () => {
  const data = useFourData();
  const aboutDescriptionRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);
  
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);

    // Ajusta el umbral de desplazamiento
    const scrollThreshold = 1;

    setScrollY((prevScrollY) => prevScrollY + Math.abs(delta));

    if (delta > 0 && Math.abs(scrollY) >= scrollThreshold) {
      // Solo permite desplazamiento hacia abajo
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
          <GridLoader color={'#E3570D'} size={20} loading={loading} />
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
                  {data.slice(1).map((p, index) => (
                    p.c[11]?.v && (
                      <a target='_blank' className='about-description-a' download='' href={p.c[11]?.v} key={index}>
                        Descarga nuestro dossier (.pdf)
                      </a>
                    )
                  ))}
              </div>
            </div>
            <div className="col-12 col-xl-6 about-grafic"  data-aos="fade-left">
            {data.slice(1).map((p, index) => (
  p.c[16]?.v && (
    <img className='img-fluid'src={p.c[16]?.v} key={index} alt=''>
    </img>
  )
))}
            </div>
          </div>
        </div>
      )}
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
    </section>
  );
}

export default AboutDescription;

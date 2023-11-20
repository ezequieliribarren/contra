import React, { useRef, useState, useCallback, useEffect } from 'react';
// import useScrollHandler from '../../js/useScrollHandler';
import { useFourData } from '../../../Context/Context';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Diagrama from '../Diagrama/Diagrama';


const AboutDescription = () => {
  // const mySectionRef = useRef(null);
  // const isScrolling = useScrollHandler(mySectionRef);
  const data = useFourData();
  const aboutDescriptionRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);
  
    if (delta > 0) {
      // Scrolling hacia abajo
      const nextSection = aboutDescriptionRef.current.nextSibling;
      if (nextSection) {
        scroll.scrollTo(nextSection.offsetTop, {
          duration: 700,
          smooth: 'easeInOutQuart',
        });
      }
    } else if (delta < 0) {
      // Scrolling hacia arriba
      const prevSection = aboutDescriptionRef.current.previousSibling;
      if (prevSection) {
        scroll.scrollTo(prevSection.offsetTop, {
          duration: 700,
          smooth: 'easeInOutQuart',
        });
      }
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
  return (
    <section id='about-description' ref={aboutDescriptionRef}>
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
            {/* <img className='img-fluid' src="images/about/grafic.png" alt="" /> */}
            <Diagrama/>
          </div>
        </div>
      </div>
      <ScrollLink
  to={`equipo`}
  smooth={true}
  duration={1500}
  offset={-50}  // Ajusta este valor según sea necesario
  className="scroll-link"
>
</ScrollLink>
    </section>
  );
}

export default AboutDescription;

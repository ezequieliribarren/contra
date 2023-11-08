import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeft, ArrowRight } from '../Arrows/Arrows'; // Asegúrate de importar los componentes de flechas personalizadas
import Nav from '../Nav/Nav';

const Project = ({ content, imageUrls, id, index }) => {
  const projectRef = useRef(null);
  const sliderRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    
    const handleScroll = (event) => {
      if (isScrolling || !projectRef.current) {
        return;
      }
    
      const delta = Math.sign(event.deltaY);
    
      if (delta > 0) {
        const nextProject = projectRef.current.nextSibling;
        if (nextProject) {
          setIsScrolling(true);
          window.scrollTo({
            top: nextProject.offsetTop,
            behavior: 'smooth',
            duration: 1000, // Duración de la animación en milisegundos (por ejemplo, 1000ms para 1 segundo)
          });
    
          setTimeout(() => {
            setIsScrolling(false);
          }, 500);
        }
      } else if (delta < 0) {
        const prevProject = projectRef.current.previousSibling;
        if (prevProject) {
          setIsScrolling(true);
          window.scrollTo({
            top: prevProject.offsetTop,
            behavior: 'smooth',
            duration: 1000, // Duración de la animación en milisegundos
          });
    
          setTimeout(() => {
            setIsScrolling(false);
          }, 500);
        }
      }
    };

    if (projectRef.current) {
      projectRef.current.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (projectRef.current) {
        projectRef.current.removeEventListener('wheel', handleScroll);
      }
    };
  }, [isScrolling]);

  // const handleGoToLastSlide = () => {
  //   if (sliderRef.current) {
  //     const lastIndex = imageUrls.length - 1;
  //     sliderRef.current.slickGoTo(lastIndex);
  //   }
  // };

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    easing: 'ease',
    // prevArrow: <ArrowLeft />, // Usar componente personalizado para la flecha izquierda
    // nextArrow: <ArrowRight />, // Usar componente personalizado para la flecha derecha
  };

  return (
    <div id={`project-${index}`} ref={projectRef} className="project-container" >
      <Nav/>
      <Slider className='slider-project' ref={sliderRef} id={id} {...settings}>
        {imageUrls.map((imageOrText, index) => (
          <div key={index} className="project-img-container">
            {typeof imageOrText === 'string' ? (
              <img src={imageOrText} alt={`Slide ${index}`} />
            ) : (
              <div className="abstract-container">
                <p>{imageOrText}</p>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;

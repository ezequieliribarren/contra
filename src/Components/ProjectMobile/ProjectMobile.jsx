import React, { useRef, useEffect, useState, useCallback } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeft, ArrowRight } from '../Arrows/Arrows';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const ProjectMobile = ({ imageUrls, id, index }) => {
  const projectRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [cursorPosition, setCursorPosition] = useState('middle');
  const maxVisibleDots = 3;


  const handleScroll = useCallback(
    (event) => {
      if (isScrolling || !projectRef.current) {
        return;
      }

      setIsScrolling(true);

      const delta = Math.sign(event.deltaY);

      if (delta > 0) {
        // Scrolling hacia abajo
        const nextProject = projectRef.current.nextSibling;
        if (nextProject) {
          scroll.scrollTo(nextProject.offsetTop, {
            duration: 700,
            smooth: 'easeInOutQuart',
          });
        } else {
          // Si es el último proyecto, hacer scroll al siguiente elemento (en este caso, el componente CallActionWork)
          scroll.scrollTo(document.getElementById('callActionWork').offsetTop, {
            duration: 700,
            smooth: 'easeInOutQuart',
          });
        }
      } else if (delta < 0) {
        // Scrolling hacia arriba
        const prevProject = projectRef.current.previousSibling;
        if (prevProject) {
          scroll.scrollTo(prevProject.offsetTop, {
            duration: 700,
            smooth: 'easeInOutQuart',
          });
        } else {
          // Si es el primer proyecto, hacer scroll al elemento con el id "slider"
          scroll.scrollTo(document.getElementById('slider').offsetTop, {
            duration: 700,
            smooth: 'easeInOutQuart',
          });
        }
      }

      setIsScrolling(false);
    },
    [isScrolling]
  );



  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    swipeToSlide: true,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,    
          arrows: false,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        {dots.slice(0, maxVisibleDots)} {/* Muestra solo los primeros maxVisibleDots dots */}
      </div>
    ),
  };


  const isVideoLink = (url) => {
    return url.endsWith('.mp4');
  };

  return (
    <div
      id={`project-${index}`}
      ref={projectRef}
      className={`project-container ${cursorPosition}-slide`}
    >
      <Slider className='slider-project' {...settings}>
        {imageUrls.map((imageOrText, index) => (
          <div key={index} className="project-img-container">
            {typeof imageOrText === 'string' ? (
              isVideoLink(imageOrText) ? (
                <div className="video-container">
                  <video autoPlay loop muted playsInline>
                    <source src={imageOrText} type="video/mp4" />
                    Tu navegador no soporta el tag de video.
                  </video>
                </div>
              ) : (
                <img src={imageOrText} alt={`Slide ${index}`} />
              )
            ) : (
              <div className="abstract-container">
                <p>{imageOrText}</p>
              </div>
            )}
          </div>
        ))}
      </Slider>
      {index < 2 && (
        <ScrollLink
          to={`project-${index + 1}`}
          smooth={true}
          duration={1500}
          className="scroll-link"
        ></ScrollLink>
      )}
      {index === 0 && (
        <ScrollLink
          to={`#slider`}
          smooth={true}
          duration={1500}
          offset={-50}
          className="scroll-link"
        ></ScrollLink>
      )}
      {index === imageUrls.length - 1 && (
        <ScrollLink
          to={'#callActionWork'}
          smooth={true}
          duration={1500}
          offset={-50}
          className="scroll-link"
        ></ScrollLink>
      )}
    </div>
  );
};

export default ProjectMobile;
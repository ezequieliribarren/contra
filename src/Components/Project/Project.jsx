import React, { useRef, useEffect, useState, useCallback } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeft, ArrowRight } from '../Arrows/Arrows';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Project = ({ imageUrls, id, index }) => {
  const projectRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [cursorPosition, setCursorPosition] = useState('middle');
  const customCursorRef = useRef(null);

  const handleScroll = useCallback(
    (event) => {
      if (isScrolling || !projectRef.current) {
        return;
      }

      setIsScrolling(true);

      const delta = Math.sign(event.deltaY);
      const scrollThreshold = 1;

      setScrollY((prevScrollY) => prevScrollY + Math.abs(delta));

      if (Math.abs(scrollY) >= scrollThreshold) {
        const direction = delta > 0 ? 1 : -1;

        if (direction === 1) {
          // Scrolling hacia abajo
          const nextProject = projectRef.current.nextSibling;
          if (nextProject) {
            scroll.scrollTo(nextProject.offsetTop, {
              duration: 700,
              smooth: 'easeInOutQuart',
            });
          } else {
            scroll.scrollTo(document.body.scrollHeight, {
              duration: 700,
              smooth: 'easeInOutQuart',
            });
          }
        } else {
          // Scrolling hacia arriba
          const prevProject = projectRef.current.previousSibling;
          if (prevProject) {
            scroll.scrollTo(prevProject.offsetTop, {
              duration: 700,
              smooth: 'easeInOutQuart',
            });
          } else {
            scroll.scrollTo(document.getElementById('slider').offsetTop, {
              duration: 700,
              smooth: 'easeInOutQuart',
            });
          }
        }

        setScrollY(0);
      }

      setIsScrolling(false);
    },
    [isScrolling, scrollY]
  );

  useEffect(() => {
    if (projectRef.current) {
      projectRef.current.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (projectRef.current) {
        projectRef.current.removeEventListener('wheel', handleScroll);
      }
    };
  }, [handleScroll]);

  // MOVIMIENTO DEL MOUSE
  const handleMouseMove = (event) => {
    const sliderRect = projectRef.current.getBoundingClientRect();
    const cursorX = event.clientX - sliderRect.left;
    const sliderWidth = sliderRect.width;

    const percentage = (cursorX / sliderWidth) * 100;

    if (percentage < 30) {
      setCursorPosition('left');
    } else if (percentage > 70) {
      setCursorPosition('right');
    } else {
      setCursorPosition('middle');
    }
  };

  useEffect(() => {
    if (projectRef.current) {
      projectRef.current.addEventListener('wheel', handleScroll);
      projectRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (projectRef.current) {
        projectRef.current.removeEventListener('wheel', handleScroll);
        projectRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [handleScroll, handleMouseMove]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    swipeToSlide: true,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,

    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
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
          // Verificar si la celda está vacía o es inválida
          imageOrText ? (
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
          ) : null
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
          to={'#contact'}
          smooth={true}
          duration={1500}
          offset={-50}
          className="scroll-link"
        ></ScrollLink>
      )}
    </div>
  );
};

export default Project;
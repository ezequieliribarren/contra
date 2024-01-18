import React, { useRef, useEffect, useState, useCallback } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeft, ArrowRight } from '../Arrows/Arrows';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { GridLoader } from 'react-spinners';

const Project = ({ imageUrls, index, setCursorPosition }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleVideoLoad = () => {
    setLoading(false);
  };

  const projectRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [cursorType, setCursorType] = useState('default');

  const handleScroll = useCallback(
    (event) => {
      if (isScrolling || !projectRef.current) {
        return;
      }

      setIsScrolling(true);

      const delta = Math.sign(event.deltaY);
      const scrollThreshold = 0.5;

      setScrollY((prevScrollY) => prevScrollY + Math.abs(delta));

      if (Math.abs(scrollY) >= scrollThreshold) {
        const direction = delta > 0 ? 1 : -1;

        if (direction === 1) {
          // Scrolling hacia abajo
          const nextProject = projectRef.current.nextSibling;
          if (nextProject) {
            scroll.scrollTo(nextProject.offsetTop, {
              duration: 550,
              smooth: 'easeInOutQuart',
            });
          } else {
            scroll.scrollTo(document.body.scrollHeight, {
              duration: 550,
              smooth: 'easeInOutQuart',
            });
          }
        } else {
          // Scrolling hacia arriba
          const prevProject = projectRef.current.previousSibling;
          if (prevProject) {
            scroll.scrollTo(prevProject.offsetTop, {
              duration: 550,

            });
          } else {
            scroll.scrollTo(document.getElementById('slider').offsetTop, {
              duration: 550,

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


  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    swipe: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,

    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
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
      className={`project-container ${cursorType.type}-slide`}
      onMouseMove={(e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }}
    >
      <Slider className='slider-project' {...settings}>
        {imageUrls.map((imageOrText, index) => (
          <div key={index} className="project-img-container">
            {typeof imageOrText === 'string' ? (
              isVideoLink(imageOrText) ? (
                <div className="video-container">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    onLoadedData={handleVideoLoad}
                    className={`video-element ${loading ? 'loading' : ''}`}
                  >
                    <source src={imageOrText} type="video/mp4" />
                    Tu navegador no soporta el tag de video.
                  </video>
                  {loading && <GridLoader />}
                </div>
              ) : (
                <img
                  className={`img-fluid ${loading ? 'loading' : ''}`}
                  src={imageOrText}
                  alt={`Slide ${index}`}
                  onLoad={handleImageLoad}
                />
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
          duration={500}
          className="scroll-link"
        ></ScrollLink>
      )}
      {index === 0 && (
        <ScrollLink
          to={`#slider`}
          smooth={true}
          duration={500}
          offset={-50}
          className="scroll-link"
        ></ScrollLink>
      )}
      {index === imageUrls.length - 1 && (
        <ScrollLink
          to={'#contact'}
          smooth={true}
          duration={500}
          offset={-50}
          className="scroll-link"
        ></ScrollLink>
      )}
    </div>
  );
};

export default Project;
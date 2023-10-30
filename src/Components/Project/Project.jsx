import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { HashLink as Link } from 'react-router-hash-link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Project = ({ imageUrls, index, id }) => {
  const projectRef = useRef(null);
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

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,

  };

  return (
    <div id={`project-${index}`} ref={projectRef} className="project-container">
      <a className="project-bottom-right-button">Abstract</a>
      <a className="project-top-right-button">What</a>
      <Slider id={id} {...settings}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="project-img-container">
            <img src={imageUrl} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Project;

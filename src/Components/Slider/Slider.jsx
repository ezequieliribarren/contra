import React, { useState, useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { useSecondData } from '../../../Context/Context';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const myRef = useRef(null);
  const videoRefs = useRef([]);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const secondData = useSecondData();

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % secondData.length);
  };

  const handleScrollToSection = () => {
    if (myRef.current) {
      const offsetTop = myRef.current.offsetTop + window.innerHeight;
      scroll.scrollTo(offsetTop, {
        behavior: 'smooth',
        duration: 800,
      });
    }
  };

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      handleScrollToSection('down');
    }
  };

  useEffect(() => {
    return () => {
      // Limpia los eventos al desmontar el componente
      videoRefs.current.forEach((videoRef) => {
        if (videoRef) {
          videoRef.removeEventListener('ended', handleVideoEnd);
        }
      });
    };
  }, []);

  useEffect(() => {
    // Verifica si el índice ha cambiado
    if (currentIndex !== null && currentIndex !== undefined) {
      const currentVideoRef = videoRefs.current[currentIndex];
      if (currentVideoRef) {
        currentVideoRef.addEventListener('ended', handleVideoEnd);
        currentVideoRef.play(); // Inicia la reproducción automáticamente
      }

      return () => {
        // Limpia el evento al desmontar el componente o al cambiar de video
        if (currentVideoRef) {
          currentVideoRef.removeEventListener('ended', handleVideoEnd);
        }
      };
    }
  }, [currentIndex]);

  useEffect(() => {
    // Limpia los eventos al desmontar el componente
    return () => {
      videoRefs.current.forEach((videoRef) => {
        if (videoRef) {
          videoRef.removeEventListener('ended', handleVideoEnd);
        }
      });
    };
  }, []);

  return (
    <header className="slider-container" ref={myRef} id="slider">
      <div className={`flecha-container ${isFilterVisible ? '' : 'hidden'}`} onClick={handleScrollToSection}>
        <img src="images/flecha.png" alt="flecha" className="flecha" />
      </div>
      {secondData &&
        secondData.map((item, index) => {
          const videoUrl = item.c[0]?.v;
          const isCurrentVideo = index === currentIndex;

          if (videoUrl && typeof videoUrl === 'string' && videoUrl.trim() !== '') {
            return (
              <div key={index} className={`slider-image ${isCurrentVideo ? 'active' : ''}`}>
                <div className="video-container">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    autoPlay={isCurrentVideo}
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%' }}
                    src={videoUrl}
                  >
                    Tu navegador no soporta el tag de video.
                  </video>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
    </header>
  );
};

export default Slider;

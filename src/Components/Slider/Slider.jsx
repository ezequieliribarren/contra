import React, { useState, useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { useSecondData } from '../../../Context/Context';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const myRef = useRef(null);
  const videoRef = useRef(null);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const secondData = useSecondData();
  const videoDuration = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondData && secondData.length > 0) {
        const nextIndex = (currentIndex + 1) % secondData.length;
        setCurrentIndex(nextIndex);
      }
    }, videoDuration);

    return () => {
      clearInterval(interval);
    };
  }, [secondData, currentIndex, videoDuration]);

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
    if (myRef.current) {
      myRef.current.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (myRef.current) {
        myRef.current.removeEventListener('wheel', handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <header className="slider-container"  ref={myRef} id="slider">
   <div className={`flecha-container ${isFilterVisible ? '' : 'hidden'}`} onClick={handleScrollToSection}>
        <img src="images/flecha.png" alt="flecha" className="flecha" />
      </div>
      {secondData &&
        secondData.map((item, index) => {
          const videoUrl = item.c[0]?.v;

          // Verificar si hay una URL de video disponible
          if (videoUrl && typeof videoUrl === 'string' && videoUrl.trim() !== '') {
            return (
              <div key={index} className={`slider-image ${index === currentIndex ? 'active' : ''}`}>
                <div className="video-container">
                  <video
                    autoPlay
                    loop
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
            return null; // Otra opción es mostrar un mensaje de carga o un mensaje de error
          }
        })}
    </header>
  );
};

export default Slider;

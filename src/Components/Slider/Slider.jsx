import React, { useState, useEffect, useRef } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { useSecondData } from '../../../Context/Context';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const myRef = useRef(null);
  const videoRef = useRef(null);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const secondData = useSecondData();
  const videoDuration = 5000; // Duración en milisegundos (5 segundos en este ejemplo)

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

  const handleScrollToNextSection = () => {
    const nextSection = myRef.current.nextSibling;
    if (nextSection) {
      scroll.scrollTo(nextSection.offsetTop, { behavior: 'smooth' });
    }
  };

  const handleVideoEnded = () => {
    const nextIndex = (currentIndex + 1) % secondData.length;
    setCurrentIndex(nextIndex);
  };

  const handleVideoLoadedMetadata = () => {
    // Este evento se dispara cuando se ha cargado la metadata del video.
    // Aprovechamos esto para establecer el tiempo de reproducción al segundo 0.
    videoRef.current.currentTime = 0;
  };

  return (
    <header className="slider-container" ref={myRef}>
      <div className={`flecha-container ${isFilterVisible ? '' : 'hidden'}`} onClick={handleScrollToNextSection}>
        <img src="images/flecha.png" alt="" className="flecha" />
      </div>
      {secondData &&
        secondData.map((item, index) => {
          const videoUrl = item.c[0]?.v;

          if (!videoUrl) {
            return null; // Skip empty content
          }

          return (
            <div key={index} className={`slider-image ${index === currentIndex ? 'active' : ''}`}>
              <div className="video-container">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onLoadedMetadata={handleVideoLoadedMetadata}
                  onEnded={handleVideoEnded}
                  style={{ width: '100%', height: '100%' }}
                >
                  <source src={videoUrl} type="video/mp4" />
                  Tu navegador no soporta el tag de video.
                </video>
              </div>
            </div>
          );
        })}
    </header>
  );
};

export default Slider;

import React, { useEffect, useState, useRef, useLayoutEffect, useMemo } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { useSecondData } from '../../../Context/Context';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const myRef = useRef(null);
  const videoRefs = useRef([]);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [areVideosLoaded, setAreVideosLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const secondData = useSecondData();

  const handleVideoEnd = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledData.length);
  };

  const shuffleVideos = (videos) => {
    return videos.slice().sort(() => Math.random() - 0.5);
  };

  const handleScrollToSection = () => {
    if (myRef.current) {
      const offsetTop = myRef.current.offsetTop + window.innerHeight;
      scroll.scrollTo(offsetTop, {
        behavior: 'smooth',
        duration: 600,
      });
    }
  };

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      handleScrollToSection('down');
    }
  };

  useLayoutEffect(() => {
    setCurrentIndex(0);
  }, []);

  useEffect(() => {
    return () => {
      videoRefs.current.forEach((videoRef) => {
        if (videoRef) {
          videoRef.removeEventListener('ended', handleVideoEnd);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (currentIndex !== null && currentIndex !== undefined) {
      videoRefs.current.forEach((videoRef, index) => {
        if (videoRef) {
          if (index === currentIndex) {
            videoRef.addEventListener('ended', handleVideoEnd);
            videoRef.play();
          } else {
            videoRef.pause();
            videoRef.currentTime = 0;
          }
        }
      });

      return () => {
        videoRefs.current.forEach((videoRef) => {
          if (videoRef) {
            videoRef.removeEventListener('ended', handleVideoEnd);
          }
        });
      };
    }
  }, [currentIndex, secondData]);

  const handleVideoLoaded = () => {
    setAreVideosLoaded(true);

    // Ocultar el preloader después de 5 segundos
    setTimeout(() => {
      setShowPreloader(false);
    }, 5000);
  };

  const shuffledData = useMemo(() => {
    return shuffleVideos(secondData);
  }, [secondData]);

  return (
    <header className="slider-container" ref={myRef} id="slider" onWheel={handleScroll}>
      <div className={`flecha-container ${isFilterVisible ? '' : 'hidden'}`} onClick={handleScrollToSection}>
        <img src="images/flecha.png" alt="flecha" className="flecha" />
      </div>
      {shuffledData.map((item, index) => {
        const videoUrl = item.c[1]?.v;
        const isCurrentVideo = index === currentIndex;

        // Skip rendering and playing videos when videoUrl is empty or null
        if (!videoUrl) {
          return null;
        }

        return (
          <div key={index} className={`slider-image ${isCurrentVideo ? 'active' : ''}`}>
            <div className="video-container">
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                  if (el) {
                    el.addEventListener('loadedmetadata', handleVideoLoaded);
                  }
                }}
                autoPlay={isCurrentVideo}
                preload="auto"
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
      })}
    </header>
  );
};

export default Slider;

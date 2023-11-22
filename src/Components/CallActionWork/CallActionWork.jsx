import React, { useEffect, useRef } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const CallActionWork = () => {
  const myRef = useRef(null);

  const handleScrollToSection = () => {
    if (myRef.current) {
      const offsetTop = myRef.current.offsetTop + window.innerHeight; // Suma 100vh
      scroll.scrollTo(offsetTop, {
        behavior: 'smooth',
        duration: 800,
      });
    }
  };

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      handleScrollToSection();
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
    <div className='call-action-work' ref={myRef}>
      <div>
        <h3>Welcome,</h3>
        <h3>explore</h3>
        <h3>our work</h3>
      </div>
      <div>
        <ScrollLink
          to='workMobile' // El ID de la sección a la que te gustaría desplazarte
          smooth={true}
          duration={800}
        >
          <img src="images/flecha-down.png" alt="" onClick={handleScrollToSection} />
        </ScrollLink>
      </div>
    </div>
  );
};

export default CallActionWork;

import React, { useEffect, useRef } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const CallActionWork = () => {
  const myRef = useRef(null);

  const handleScrollToSection = (offset) => {
    if (myRef.current) {
      const offsetTop = myRef.current.offsetTop + offset; // Agregando o restando el offset
      scroll.scrollTo(offsetTop, {
        behavior: 'smooth',
        duration: 800,
      });
    }
  };

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      // Scrolling down
      handleScrollToSection(window.innerHeight); // Hacia abajo 100vh
    } else {
      // Scrolling up
      handleScrollToSection(-window.innerHeight); // Hacia arriba 100vh
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
    <div className='call-action-work' ref={myRef} id='callActionWork'>
      <div>
        <h3>Welcome,</h3>
        <h3>explore</h3>
        <h3>our work</h3>
      </div>
      <div>
        <ScrollLink to='favorites-mobile' smooth={true} duration={800}>
        </ScrollLink>
        <ScrollLink to='workMobile' smooth={true} duration={800}>
          <img src="images/flecha-down.png" alt="" onClick={() => handleScrollToSection(window.innerHeight)} />
        </ScrollLink>
      </div>
    </div>
  );
};

export default CallActionWork;

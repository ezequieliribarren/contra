import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Cursor from '../Cursor/Cursor';


const Nav = ({ black, mitad, work, more, about, fixed, nav, blend }) => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDifference = scrollY - scrollPosition;

      if (scrollDifference > 1 && isButtonVisible) {
        setIsButtonVisible(false);
      } else if (scrollDifference < -1 && !isButtonVisible) {
        setIsButtonVisible(true);
      }

      setScrollPosition(scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isButtonVisible, scrollPosition]);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`nav-container ${fixed ? 'fixed' : ''}`}>
      <Cursor isHovered={isHovered} blendMode={isHovered ? 'difference' : 'normal'} />
      <Link className={`${nav} ${blend} ${isButtonVisible ? 'fixed' : mitad}`} to="/">
      </Link>
      <Link to="/work">
        <a
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className={`top-right-button ${black} ${work}`}
        >
          Work
        </a>
      </Link>
      <Link to="/more">
        <a
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className={`bottom-left-button ${black} ${more}`}
        >
          More
        </a>
      </Link>
      <Link to="/about">
        <a
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className={`bottom-right-button ${black} ${about}`}
        >
          About
        </a>
      </Link>
    </div>
  );
};

export default Nav;

import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Cursor from '../Cursor/Cursor';

<<<<<<< HEAD
const Nav = ({ black, mitad, work, more, about, fixed, nav, customClass }) => {
=======

const Nav = ({ black, mitad, work, more, about, fixed, nav, blend }) => {
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
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
<<<<<<< HEAD
    <div className={`nav-container ${fixed ? 'fixed' : ''} ${customClass}`}>
<Link className={`${nav} ${isButtonVisible ? 'fixed' : mitad}`} to='/'>
=======
    <div className={`nav-container ${fixed ? 'fixed' : ''}`}>
      <Cursor isHovered={isHovered} blendMode={isHovered ? 'difference' : 'normal'} />
      <Link  onMouseEnter={handleHover}
          onMouseLeave={handleLeave} className={`${nav} ${blend} ${isButtonVisible ? 'fixed' : mitad}`} to="/">
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
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
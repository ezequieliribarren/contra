import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Nav = ({ black, mitad, work, more, about, fixed, nav,}) => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

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

  return (
    <div className={`nav-container ${fixed ? 'fixed' : ''}`}>
<Link className={`${nav} ${isButtonVisible ? 'fixed' : mitad}`} to='/'>
      </Link>
      <Link to='/work'>
        <a className={`top-right-button ${black} ${work}`} >Work</a>
      </Link>
      <Link to='/more'>
        <a className={`bottom-left-button ${black} ${more}`} >More</a>
      </Link>
      <Link to='/about'>
        <a className={`bottom-right-button ${black} ${about}`} >About</a>
      </Link>
    </div>
  );
};

export default Nav;
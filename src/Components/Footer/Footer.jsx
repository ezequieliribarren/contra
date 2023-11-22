import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Footer = ({ background, color, colora, logo }) => {
  const footerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(
    (event) => {
      if (isScrolling || !footerRef.current) {
        return;
      }

      setIsScrolling(true);

      const delta = Math.sign(event.deltaY);

      if (delta < 0) {
        // Scrolling hacia arriba
        const newScrollTop = Math.max(0, window.scrollY - window.innerHeight);
        scroll.scrollTo(newScrollTop, {
          duration: 700,
          smooth: 'easeInOutQuart',
        });
      }

      setIsScrolling(false);
    },
    [isScrolling]
  );

  useEffect(() => {
    if (footerRef.current) {
      footerRef.current.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (footerRef.current) {
        footerRef.current.removeEventListener('wheel', handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <footer ref={footerRef} className={background} id='contact'>
      <div className="container-fluid">
        <div className='footer-circle'>
          <div className={`a0 ${color}`}>
            <a href=""><img className='img-fluid' src={logo} alt="Logo" /></a>
          </div>
          <div className={`a1 ${color}`}>
            <a className={colora} href="mailto:contra.architecture@gmail.com">contra.architecture@gmail.com</a>
          </div>
          <div className={`a2 ${color}`}>
            <a className={colora} href="tel:+34697286914">+34 697 286 914</a>
          </div>

          <div className={`a4 ${color}`}>
            <div className='div-maps'>MAPS⭷</div>
            <a className={colora} href="">
              <div>C/ Aldapa, 2 Local 4, Esquina,<br /> C. de Matilde Hernández,<br /> 28025, Madrid</div>
            </a>
          </div>
          <div className={`a3 ${color}`}>
            <a className={`red ${colora}`} href="">Instagram </a>
            <a href="" className='span-footer'><img src="images/insta.png" alt="Instagram" /></a>
            <a className={`red ${colora}`} href="">Linkedin</a>
            <a className='span-footer' href=""><img src="images/linkedin.png" alt="Linkedin" /></a>
            <a className={`red ${colora}`} href="">Spotify</a>
            <a className='span-footer' href="Spotify"><img src="images/spotify.png" alt="" /></a>
          </div>
        </div>
      </div>
      <div className='footer-img-none'>
        <img className='img-fluid' src="images/footer2.png" alt="Logo" />
      </div>
      <ScrollLink
        to={`#favorites`}
        smooth={true}
        duration={1500}
        offset={-50}
        className="scroll-link"
      ></ScrollLink>
    </footer>
  );
};

export default Footer;

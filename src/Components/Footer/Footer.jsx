<<<<<<< HEAD
import React from 'react';
const Footer = ({ background, color, colora, logo }) => {
  return (
    <footer className={background} id='contact'>

      <div className="container-fluid">
        <div className='footer-circle'>
          <div className={`a0 ${color}`}>
            <a href=""><img className='img-fluid' src={logo} alt="" /></a>
          </div>
          <div className={`a1 ${color}`}>
            <a className={colora} href="mailto:contra.architecture@gmail.com">contra.architecture@gmail.com</a>
          </div>
          <div className={`a2 ${color}`}>
            <a className={colora} href="tel:+34697286914">+34 697 286 914</a>
          </div>

          <div className={`a4 ${color}`}>  <div className='div-maps'>MAPS⭷</div>
            <a className={colora} href="">
              <div>C/ Aldapa, 2 Local 4, Esquina,<br /> C. de Matilde Hernández,<br /> 28025, Madrid</div></a>
          </div>    <div className={`a3 ${color}`}>
            <a className={`red ${colora}`} href="">Instagram </a><a href="" className='span-footer'><img src="images/insta.png" alt="" /></a> <a className={`red ${colora}`} href="">Linkedin</a><a className='span-footer' href=""><img src="images/linkedin.png" alt="" /></a ><a className={`red ${colora}`} href="">Spotify</a><a className='span-footer' href=""><img src="images/spotify.png" alt="" /></a>
          </div>
      
        </div>
      </div>
    <div className='footer-img-none'>
            <img className='img-fluid' src="images/footer2.png" alt="" />
          </div>
=======
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useSecondData } from '../../../Context/Context';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = ({ background, color, colora, logo, contact, none, padding }) => {
  const footerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const data = useSecondData();
  const scrollThreshold = 8; // Cantidad de píxeles para esperar antes de activar el scroll

  const handleScroll = useCallback(
    (event) => {
      if (isScrolling || !footerRef.current) {
        return;
      }

      setIsScrolling(true);

      const delta = Math.sign(event.deltaY);

      setScrollY((prevScrollY) => prevScrollY + delta);

      if (Math.abs(scrollY) >= scrollThreshold) {
        const direction = delta > 0 ? 1 : -1;

        if (direction === -1) {
          // Scrolling hacia arriba y más de 10px de scroll
          const newScrollTop = Math.max(0, window.scrollY - window.innerHeight);
          scroll.scrollTo(newScrollTop, {
            duration: 700,
            smooth: 'easeInOutQuart',
          });

          setScrollY(0);
        }
      }

      setIsScrolling(false);
    },
    [isScrolling, scrollY]
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
    <footer ref={footerRef} className={`${background} ${padding}`} id={contact}>
      <div className="container-fluid">
      <div className={`ver-proyectos-footer ${none}`}>
  <Link to='/work'>
    {useSecondData().slice(1).map((item, index) => (
      <a key={index} href="">
        <h3>{item.c[8]?.v}</h3>
      </a>
    ))}
  </Link>
</div>
        <div className='footer-circle'>
          <div className={`a0 ${color}`}>
            <a href=""><img className='img-fluid' src={logo} alt="Logo" /></a>
          </div>
          <div className={`a1 ${color}`}>
  <a className={colora} href={`mailto:${data[0]?.c[6]?.v}`}>{data[0]?.c[6]?.v}</a>
  <a className={`${colora} flecha-footer`} target='_blank' href={`mailto:${data[0]?.c[6]?.v}`}>
    <img src="images/flecha-orange.png" alt="" />
  </a>
</div>
<div className={`a2 ${color}`}>
  <a className={colora} href={`tel:+${data[0]?.c[7]?.v}`}>+{data[0]?.c[7]?.v}</a>
  <a className={`${colora} flecha-footer`} target='_blank' href={`tel:+${data[0]?.c[7]?.v}`}>
    <img src="images/flecha-orange.png" alt="" />
  </a>
</div>
          <div className={`a4 ${color}`}>
            <div className='div-maps'> <a className={colora} target='_blank' href="https://maps.app.goo.gl/VP2wyLtB8hHVkLH88">MAPS <img src="images/flecha-orange.png" alt="" /></a></div>
            <a className={colora} href="">
              <div> <a className={colora} target='_blank' href="https://maps.app.goo.gl/VP2wyLtB8hHVkLH88">C/ Aldapa, 2 Local 4, Esquina,<br /> C. de Matilde Hernández,<br /> 28025, Madrid</a></div>
            </a>
          </div>
          <div className={`a3 ${color} `}>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                {item.c[2]?.v && item.c[3]?.v && (
                  <div className='contenedor-a3'>
                    <div><a target='_blank' href={item.c[2]?.v}><h4 className={`redes-h4 ${colora}`}>{item.c[4]?.v}</h4></a></div>
                    <a target='_blank' href={item.c[2]?.v} className={`span-footer ${colora}`}>
                      <img src={item.c[3]?.v} alt={item.c[4]?.v} />
                    </a>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className='footer-img-none'>
        <img className='img-fluid' src="images/footer2.png" alt="Logo" />
      </div>
      <ScrollLink
        to={contact}
        smooth={true}
        duration={1200}
        offset={-100}
        className="scroll-link"
      ></ScrollLink>
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
    </footer>
  );
};

export default Footer;

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useSecondData } from '../../../Context/Context';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = ({ background, color, colora, logo, contact, none, padding }) => {
  const footerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const data = useSecondData();

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
    <footer ref={footerRef} className={`${background} ${padding}`} id={contact}>
      <div className="container-fluid">
        <div className={`ver-proyectos-footer ${none}`}>
          <Link to='/work'>
          <a href=""><h3>Ver Proyectos</h3> <h3>Ver Proyectos</h3> <h3>Ver Proyectos</h3></a>
          </Link>
          
        </div>
        <div className='footer-circle'>
          <div className={`a0 ${color}`}>
            <a href=""><img className='img-fluid' src={logo} alt="Logo" /></a>
          </div>
          <div className={`a1 ${color}`}>
            <a className={colora} href="mailto:contra.architecture@gmail.com">contra.architecture@gmail.com</a><a className={`${colora} flecha-footer`} target='_blank' href="mailto:contra.architecture@gmail.com"><img src="images/flecha-orange.png" alt="" /></a>
          </div>
          <div className={`a2 ${color}`}>
            <a className={colora} href="tel:+34697286914">+34 697 286 914</a><a className={`${colora} flecha-footer`}target='_blank' href="tel:+34697286914"><img src="images/flecha-orange.png" alt="" /></a>
          </div>
          <div className={`a4 ${color}`}>
            <div className='div-maps'> <a className={colora} target='_blank' href="https://maps.app.goo.gl/VP2wyLtB8hHVkLH88">MAPS <img src="images/flecha-orange.png" alt="" /></a></div>
            <a className={colora} href="">
              <div> <a className={colora} target='_blank' href="https://maps.app.goo.gl/VP2wyLtB8hHVkLH88">C/ Aldapa, 2 Local 4, Esquina,<br /> C. de Matilde Hernández,<br /> 28025, Madrid</a></div>
            </a>
          </div>
          <div className={`a3 ${color} `}>
            {data.slice(1).map((item, index) => (
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
        duration={1500}
        offset={-50}
        className="scroll-link"
      ></ScrollLink>
    </footer>
  );
};

export default Footer;

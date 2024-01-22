import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useSecondData } from '../../../Context/Context';
import { HashLink as Link } from 'react-router-hash-link';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer = ({ background, color, colora, logo, contact, none, padding }) => {
  const footerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const data = useSecondData();
  const scrollThreshold = 8; // Cantidad de píxeles para esperar antes de activar el scroll
  const phoneRef = useRef(null);
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


  const copyPhoneNumber = () => {
    if (phoneRef.current) {
      // Seleccionar el contenido del enlace
      phoneRef.current.select();
      // Copiar al portapapeles
      navigator.clipboard.writeText(phoneRef.current.value)
        .then(() => {
          console.log('Número de teléfono copiado al portapapeles');
          // Muestra el mensaje de alerta
          toast.success('Número de teléfono copiado al portapapeles', {
            position: toast.POSITION.TOP_CENTER,
          });
        })
        .catch((err) => {
          console.error('Error al copiar el número de teléfono al portapapeles: ', err);
        });
    }
  };


  return (
    <footer ref={footerRef} className={`${background} ${padding}`} id={contact}>
      <div className="container-fluid">
        <div className={`ver-proyectos-footer ${none}`}>
          <Link to='/work'>
            {useSecondData().map((item, index) => (
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
              <img className='img-flecha-footer' src="images/flecha-orange.png" alt="" />
            </a>
          </div>
          <div className={`a2 ${color}`}>
            <a className={`tel-mobile ${colora}`} href={`tel:+${data[0]?.c[7]?.v}`}>+{data[0]?.c[7]?.v}</a>
            <input
              type="text"
              ref={phoneRef}
              className={`tel-desktop ${colora}`}
              value={`+${data[0]?.c[7]?.v}`}
              readOnly
              onClick={copyPhoneNumber}
            />
              <img className='img-flecha-footer' src="images/flecha-orange.png" alt="" />
          </div>
          <div className={`a4 ${color}`}>
            <div className='div-maps'> <a className={colora} target='_blank' href="https://maps.app.goo.gl/VP2wyLtB8hHVkLH88">MAPS <img src="images/flecha-orange.png" alt="" /></a></div>
            <a className={colora} href="">
              <div className='text-adress'> <a className={colora} target='_blank' href="https://maps.app.goo.gl/VP2wyLtB8hHVkLH88">C/ Aldapa, 2 Local 4, Esquina,<br /> C. de Matilde Hernández,<br /> 28025, Madrid</a></div>
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
    </footer>
  );
};

export default Footer;
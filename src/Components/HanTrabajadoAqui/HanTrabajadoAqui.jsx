import React, { useRef, useEffect, useState } from 'react';

const HanTrabajadoAqui = () => {
  const listContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();

      if (isScrolling || !listContainerRef.current) {
        return;
      }

      const delta = Math.sign(event.deltaY);
      const scrollAmount = window.innerHeight;

      if (delta > 0) {
        const nextSection = listContainerRef.current.nextSibling;
        if (nextSection) {
          setIsScrolling(true);
          window.scrollTo({
            top: window.pageYOffset + scrollAmount,
            behavior: 'smooth',
          });

          setTimeout(() => {
            setIsScrolling(false);
          }, 1000);
        }
      } else if (delta < 0 && window.pageYOffset > 0) {
        setIsScrolling(true);
        window.scrollTo({
          top: window.pageYOffset - scrollAmount,
          behavior: 'smooth',
        });

        setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    };

    if (listContainerRef.current) {
      listContainerRef.current.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      if (listContainerRef.current) {
        listContainerRef.current.removeEventListener('wheel', handleScroll);
      }
    };
  }, [isScrolling]);

  return (
    <section id='han-trabajado-aqui' ref={listContainerRef}>
      <div className="container-fluid">    
        <h2>Han trabajado aquí</h2>
        <div className="row">
          <div className="col">
            <ul>
              <li>Andrea Carrera</li>
              <li>Despoina Chiali</li>
              <li>Paula Otero</li>
              <li>Ana Sáez-Benito</li>
              <li>Natalia Acosta</li>
              <li>Marcos Navarrete</li>
              <li>Ana Díaz</li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>Marina Valdés</li>
              <li>Sofía Benencio</li>
              <li>Anthuanet Falcón</li>
              <li>Alex López-León</li>
              <li>Claudio Oca</li>
              <li>Alba Sánchez</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HanTrabajadoAqui;

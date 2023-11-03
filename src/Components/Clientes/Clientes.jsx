import React, { useEffect, useRef, useState } from 'react';
import { useSecondData } from '../../../Context/Context';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Clientes = () => {
  const data = useSecondData();
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const clientsRef = useRef([]);

  useEffect(() => {
    AOS.init();
    clientsRef.current = clientsRef.current.slice(0, data.length); // Asegúrate de que la longitud del array de referencias coincida con la cantidad de clientes.
  }, [data.length]);

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);

    if (delta > 0 && currentClientIndex < data.length - 1) {
      setCurrentClientIndex((prevIndex) => prevIndex + 1);
    } else if (delta < 0 && currentClientIndex > 0) {
      setCurrentClientIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    const handleWheel = (event) => {
      handleScroll(event);
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentClientIndex]);

  return (
    <div className='clientes-container'>
      {data.map((row, index) => (
        <div className='cliente' key={index} data-aos="fade-up" ref={(el) => (clientsRef.current[index] = el)}>
          <div className='image-container'>
            <img src={row.c[1]?.v} alt="" />
            <h3>{row.c[0]?.v}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Clientes;

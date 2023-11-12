import React, { useEffect, useRef, useState } from 'react';
import { useSecondData } from '../../../Context/Context';
import 'aos/dist/aos.css';

const Clientes = () => {
  const data = useSecondData();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div
      className={`clientes-container section ${activeIndex !== null ? 'transparent-bg' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {data.map((row, index) => (
        <div
          className={`cliente ${index === activeIndex ? 'active' : ''}`}
          key={index}
        >
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

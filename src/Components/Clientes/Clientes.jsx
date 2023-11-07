import React, { useEffect, useRef } from 'react';
import { useSecondData } from '../../../Context/Context';
import 'aos/dist/aos.css';



const Clientes = () => {
  const data = useSecondData();

  return (
    <div className='clientes-container section'>
      {data.map((row, index) => (
        <div className='cliente' key={index}>
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

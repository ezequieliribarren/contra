import React, { useRef } from 'react';
import useScrollHandler from '../../js/useScrollHandler';
import { useFourData } from '../../../Context/Context';

const HanTrabajadoAqui = () => {
  const listContainerRef = useRef(null);
  const isScrolling = useScrollHandler(listContainerRef);
  const data = useFourData();

  return (
    <section id='han-trabajado-aqui' ref={listContainerRef}>
      <div className="container-fluid">
        <h2>Han trabajado aquí</h2>
        <div className="row">
          <div className="col">
            <ul>
              {data.slice(1).map((member, index) => (
                <li key={index}>{member.c[7]?.v}</li>
              ))}
            </ul>
          </div>
          <div className="col">
            <ul>
              {data.slice(1).map((member, index) => (
                <li key={index}>{member.c[8]?.v}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HanTrabajadoAqui;

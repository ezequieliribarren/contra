import React, { useRef } from 'react';
// import useScrollHandler from '../../js/useScrollHandler';

const HanTrabajadoAqui = () => {
  // const listContainerRef = useRef(null);
  // const isScrolling = useScrollHandler(listContainerRef);

  return (
    <section id='han-trabajado-aqui' >
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

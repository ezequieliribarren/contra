import React, { useRef, useEffect, useState } from 'react';
import Grafic from '../Grafic/Grafic';
import useScrollHandler from '../../js/useScrollHandler';
import { useFourData } from '../../../Context/Context';

const Equipo = () => {
  const equipoRef = useRef(null);
  const isScrolling = useScrollHandler(equipoRef);
  const fourData = useFourData();

  const equipoData = fourData.slice(1).map((miembro, index) => ({
    id: index + 1,
    nombre: miembro.c[3]?.v || '',
    subtitle: miembro.c[4]?.v || '',
    descripcion: miembro.c[5]?.v || '',
    imagen: miembro.c[7]?.v || '',
    grafic: 'images/about/equipo1.png',
    graficData: miembro.c[6]?.v,
  })).filter(miembro => miembro.nombre && miembro.subtitle && miembro.imagen);

  const [selectedMember, setSelectedMember] = useState(1);

  const handleMemberClick = (id) => {
    setSelectedMember(id);
  };

  return (
    <section id='equipo' ref={equipoRef}>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-lg-4'>
            <h2>Quienes somos</h2>
            <ul className='equipo'>
              {equipoData.map((miembro) => (
                <li
                  key={miembro.id}
                  onClick={() => handleMemberClick(miembro.id)}
                  className={selectedMember === miembro.id ? 'selected-member' : ''}
                >
                  <div className='equipo-select'>
                    <img className='equipo-person-img' src={miembro.imagen} alt='' />
                    <h3>{miembro.nombre}</h3>
                    <h4> <img src="images/about/flecha.png" alt="" />{miembro.subtitle}</h4>
                  </div>
                  {selectedMember === miembro.id && (
                    <div className='equipo-description'>
                      <p>{miembro.descripcion}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className='col-12 col-lg-8 equipo-grafic-container'>
          <Grafic graficData={equipoData[selectedMember - 1]?.graficData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipo;

// Equipo.js
import React, { useRef, useState, useEffect } from 'react';
import Grafic from '../Grafic/Grafic';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useFourData } from '../../../Context/Context';

const Equipo = () => {
  const equipoRef = useRef(null);
  const fourData = useFourData();
  const [selectedMembers, setSelectedMembers] = useState([]);

  const equipoData = fourData
    .slice(1)
    .map((miembro, index) => ({
      id: index + 1,
      nombre: miembro.c[3]?.v || '',
      subtitle: miembro.c[4]?.v || '',
      descripcion: miembro.c[5]?.v || '',
      imagen: miembro.c[6]?.v || '',
      grafic: 'images/about/equipo1.png',
      graficData: miembro.c[7]?.v,
    }))
    .filter((miembro) => miembro.nombre && miembro.subtitle && miembro.imagen);

  const [selectedMember, setSelectedMember] = useState(1);

  const handleMemberClick = (id) => {
    setSelectedMember(id);
    setSelectedMembers((prevMembers) => {
      if (prevMembers.includes(id)) {
        return prevMembers;
      } else {
        return [...prevMembers, id];
      }
    });
  };

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);

    if (delta < 0) {
      // Scrolling hacia arriba
      const prevSection = equipoRef.current.previousSibling;
      if (prevSection) {
        scroll.scrollTo(prevSection.offsetTop, {
          duration: 700,
          smooth: 'easeInOutQuart',
        });
      }
    } else {
      // Scrolling hacia abajo
      const nextSection = equipoRef.current.nextSibling;
      if (nextSection) {
        scroll.scrollTo(nextSection.offsetTop, {
          duration: 700,
          smooth: 'easeInOutQuart',
        });
      }
    }
  };

  useEffect(() => {
    if (equipoRef.current) {
      equipoRef.current.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (equipoRef.current) {
        equipoRef.current.removeEventListener('wheel', handleScroll);
      }
    };
  }, [handleScroll]);

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
                    <div>
                      <img className='equipo-person-img' src={miembro.imagen} alt='' />
                    </div>
                    <div className='equipo-subtitle'>
                      <h3>{miembro.nombre}</h3>
                      <h4>
                        {' '}
                        <img src='images/about/flecha.png' alt='' />
                        {miembro.subtitle}
                      </h4>
                    </div>
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
            <Grafic graficData={equipoData[selectedMember - 1]?.graficData} selectedMembers={selectedMembers} />
          </div>
        </div>
      </div>
      <ScrollLink
        to={`about-description`}
        smooth={true}
        duration={1500}
        offset={-50} // Ajusta este valor según sea necesario
        className='scroll-link'
      ></ScrollLink>
      <ScrollLink
        to={`han-trabajado-aqui`}
        smooth={true}
        duration={1500}
        offset={-50} // Ajusta este valor según sea necesario
        className='scroll-link'
      ></ScrollLink>
    </section>
  );
};

export default Equipo;

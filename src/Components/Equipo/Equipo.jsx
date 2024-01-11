import React, { useRef, useState, useEffect } from 'react';
import Grafic from '../Grafic/Grafic';
<<<<<<< HEAD
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

=======
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useFourData } from '../../../Context/Context';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Equipo = () => {
  const equipoRef = useRef(null);
  const fourData = useFourData();
  const [hoveredMember, setHoveredMember] = useState(null);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null); // Inicializar con null

  useEffect(() => {
    AOS.init();
  }, []);

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

  const handleMemberHover = (id) => {
    setHoveredMember(id);
    setSelectedMembers([id]);
    setSelectedMember(id);
  };

  const handleMemberLeave = () => {
    // No cambia hoveredMember a null si ya hay un miembro seleccionado
    if (!selectedMember) {
      setHoveredMember(null);
    }
  };

>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
  return (
    <section id='equipo' ref={equipoRef}>
      <div className='container-fluid'>
        <div className='row'>
<<<<<<< HEAD
          <div className='col-12 col-lg-4'>
            <h2>Quienes somos</h2>
=======
          <div className='col-12 col-xl-4'>
            <h2 data-aos="fade-up">Quienes somos</h2>
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
            <ul className='equipo'>
              {equipoData.map((miembro) => (
                <li
                  key={miembro.id}
<<<<<<< HEAD
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
=======
                  onMouseEnter={() => handleMemberHover(miembro.id)}
                  onMouseLeave={handleMemberLeave}
                  className={(selectedMembers.includes(miembro.id) || hoveredMember === miembro.id) ? 'selected-member' : ''}
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
                  {(hoveredMember === miembro.id || selectedMember === miembro.id) && (
                    <div className='equipo-description'>
                      <p>{miembro.descripcion}</p>
                    </div>
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
                  )}
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
          <div className='col-12 col-lg-8 equipo-grafic-container'>
          <Grafic graficData={equipoData[selectedMember - 1]?.graficData} />
          </div>
        </div>
      </div>
=======
          <div className='col-12 col-xl-8 equipo-grafic-container'>
            <Grafic
              data-aos="fade-up"
              graficData={hoveredMember ? equipoData[hoveredMember - 1]?.graficData : equipoData.map((miembro) => miembro.graficData)}
              selectedMembers={selectedMembers}
            />
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
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
    </section>
  );
};

export default Equipo;
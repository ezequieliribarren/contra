import React, { useRef, useEffect, useState } from 'react';
import Grafic from '../Grafic/Grafic';

const Equipo = () => {

  const equipoRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (isScrolling || !equipoRef.current) {
        return;
      }

      const delta = Math.sign(event.deltaY);
      const nextSection = delta > 0 ? equipoRef.current.nextSibling : equipoRef.current.previousSibling;

      if (nextSection) {
        setIsScrolling(true);
        window.scrollTo({
          top: nextSection.offsetTop,
          behavior: 'smooth',
        });

        setTimeout(() => {
          setIsScrolling(false);
        }, 500);
      }
    };

    if (equipoRef.current) {
      equipoRef.current.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (equipoRef.current) {
        equipoRef.current.removeEventListener('wheel', handleScroll);
      }
    };
  }, [isScrolling]);
    const equipoData = [
        {
            id: 1,
            nombre: 'Helena Gallego',
            subtitle: 'Directora Creativa',
            descripcion: 'Niko Barrena es arquitecto, docente e investigador. Socio en CONTRA, donde trabajo sobre las nuevas lógicas metropolitanas y prácticas emergentes transdisciplinares',
            imagen: 'images/about/person1.png',
            grafic: 'images/about/equipo1.png',
            graficData: [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60, 40, 30],
        },
        {
            id: 2,
            nombre: 'Niko Barrena',
            subtitle: 'Director Ejecutivo',
            descripcion: 'Niko Barrena es arquitecto, docente e investigador. Socio en CONTRA, donde trabajo sobre las nuevas lógicas metropolitanas y prácticas emergentes transdisciplinares',
            imagen: 'images/about/person1.png',
            grafic: 'images/about/equipo1.png',
            graficData: [0, 20, 20, 20, 20, 20, 20, -20, 25, 30, 12, 60, 40, 30],
        },
        {
            id: 3,
            nombre: 'Niko Barrena',
            subtitle: 'Director Ejecutivo',
            descripcion: 'Niko Barrena es arquitecto, docente e investigador. Socio en CONTRA, donde trabajo sobre las nuevas lógicas metropolitanas y prácticas emergentes transdisciplinares',
            imagen: 'images/about/person1.png',
            grafic: 'images/about/equipo1.png',
            graficData: [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60, 40, 30],
        },
        {
            id: 4,
            nombre: 'Niko Barrena',
            subtitle: 'Director Ejecutivo',
            descripcion: 'Niko Barrena es arquitecto, docente e investigador. Socio en CONTRA, donde trabajo sobre las nuevas lógicas metropolitanas y prácticas emergentes transdisciplinares',
            imagen: 'images/about/person1.png',
            grafic: 'images/about/equipo1.png',
            graficData: [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60, 40, 30],
        },
        {
            id: 5,
            nombre: 'Niko Barrena',
            subtitle: 'Director Ejecutivo',
            descripcion: 'Niko Barrena es arquitecto, docente e investigador. Socio en CONTRA, donde trabajo sobre las nuevas lógicas metropolitanas y prácticas emergentes transdisciplinares',
            imagen: 'images/about/person1.png',
            grafic: 'images/about/equipo1.png',
            graficData: [0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60, 40, 30],
        },

    ];

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
                    <div>
                      <img className='equipo-person-img' src={miembro.imagen} alt='' />
                      <h3>{miembro.nombre}</h3>
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
              <Grafic graficData={equipoData[selectedMember - 1].graficData} />
            </div>
          </div>
        </div>
      </section>
    );
};

export default Equipo;

import React, { useState, useEffect } from 'react';
import { useData } from '../../../Context/Context';
import { HashLink as Link } from 'react-router-hash-link';

const Projects = () => {
  const allData = useData();
  const [individualFilter, setIndividualFilter] = useState(null);
  const [generalFilter, setGeneralFilter] = useState(null);
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);
  // const [scrollPosition, setScrollPosition] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filteredAndSortedProjects = () => {
    let filteredProjects = allData;
  
    // Filtrar proyectos por categoría
    if (individualFilter) {
      const matchingProjects = allData.filter((row) => row.c[1]?.v.toLowerCase() === individualFilter);
      const otherProjects = allData.filter((row) => row.c[1]?.v.toLowerCase() !== individualFilter);
      filteredProjects = matchingProjects.concat(otherProjects);
    }
  
    // Filtrar proyectos por término de búsqueda en cualquier columna
    if (searchTerm) {
      filteredProjects = filteredProjects.filter((row) =>
        Object.values(row.c).some(
          (cell) =>
            cell?.v &&
            cell.v.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  
    // Ordenar el array combinado
    filteredProjects.sort((a, b) => a.c[2]?.v.localeCompare(b.c[2]?.v));
  
    return filteredProjects;
  };

  const handleFilterClick = (value) => {
    if (value === 'x') {
      // Limpiar todos los filtros
      setIndividualFilter(null);
      setGeneralFilter(null);
    } else {
      // Establecer el filtro individual
      setIndividualFilter(value);

      // Establecer el filtro general (opcional, según tus necesidades)
      setGeneralFilter(value);
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredRowIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredRowIndex(null);
  };

  return (
    <section id='projects'>
      <div className='blur'></div>
      <div className='row-12 hiden'></div>
      <div className='container-fluid table-projects'>
        {filteredAndSortedProjects().map((row, index) => (
          <div
            className={`row ${row.c[1]?.v.toLowerCase() === individualFilter ? 'filtered-row' : ''} ${hoveredRowIndex === index ? 'hovered-row' : ''
              }`}
            key={index}
            onMouseEnter={() => handleMouseEnter(index, `url(${row.c[17]?.v})`)}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundImage: hoveredRowIndex === index ? `url(${row.c[17]?.v})` : null,
              backgroundSize: hoveredRowIndex === index ? 'cover' : null,
              backgroundRepeat: hoveredRowIndex === index ? 'no-repeat' : null,
              backgroundPosition: hoveredRowIndex === index ? 'center center' : null,
            }}
          >
            <div className='col-2 title-project'>
              {/* Enlace solo para el título */}
              <Link to={`/project/${row.c[9]?.v}`}>
                <h3>{row.c[0]?.v}</h3>
              </Link>
            </div>
            <div className='col-2 category-project'>
              {/* Enlace solo para la categoría */}
              <Link to={`/project/${row.c[9]?.v}`}>
                <h4>{row.c[2]?.v} / {row.c[3]?.v}</h4>
              </Link>
            </div>
            <div className='col-2'>
              <Link to={`/project/${row.c[9]?.v}`}>
                <h4>{row.c[4]?.v}</h4>
              </Link>
            </div>
            <div className='col-2'>
              <Link to={`/project/${row.c[9]?.v}`}>
                <h4>{row.c[5]?.v}</h4>
              </Link>
            </div>
            <div className='col-2'>
              <Link to={`/project/${row.c[9]?.v}`}>
                <h4>{row.c[6]?.v}</h4>
              </Link>
            </div>
            <div className='col-2'>
              {/* Elemento .dossier-project fuera del enlace */}
              <a className='dossier-project' download={row.c[0]?.v} href={row.c[7]?.v}><h4>dossier ⭷</h4></a>
            </div>
          </div>
        ))}
      </div>
      <div className='container-filter'>
        <ul className='filter-projects'>
          <li>
          <input
  type="text"
  placeholder="Buscar..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
          </li>
       
          <li
            className={`filter-item ${generalFilter === 'lifelong' ? 'selected' : ''}`}
            onClick={() => handleFilterClick('lifelong')}
          >
            lifelong
          </li>
          <li
            className={`filter-item ${generalFilter === 'temporary' ? 'selected' : ''}`}
            onClick={() => handleFilterClick('temporary')}
          >
            temporary
          </li>
          <li
            className={`filter-item ${generalFilter === 'comunication' ? 'selected' : ''}`}
            onClick={() => handleFilterClick('comunication')}
          >
            comunication
          </li>  
           <li
            className={`filter-item ${generalFilter === 'x' ? 'selected' : ''}`}
            onClick={() => handleFilterClick('x')}
          >
            (x)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;

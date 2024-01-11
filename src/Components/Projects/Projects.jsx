import React, { useState, useEffect } from 'react';
import { useData, useGifs } from '../../../Context/Context';
import { HashLink as Link } from 'react-router-hash-link';

const Projects = () => {
  const allData = useData();
  const [individualFilter, setIndividualFilter] = useState(null);
  const [generalFilter, setGeneralFilter] = useState(null);
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(true);
<<<<<<< HEAD
  
=======
  const [isSearchActive, setIsSearchActive] = useState(false); // Nuevo estado
  const preloadedGifs = useGifs(); // Usa el hook useGifs para obtener los GIFs del contexto

>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

<<<<<<< HEAD
    // Puedes ajustar el valor 100 según sea necesario
    const threshold = documentHeight - windowHeight - 100;

    if (scrollPosition > threshold) {
      // Si el usuario ha llegado al final de la sección, oculta los elementos
=======
    const threshold = documentHeight - windowHeight - 100;

    if (scrollPosition > threshold) {
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
      setIsFilterVisible(false);
    } else {
      setIsFilterVisible(true);
    }
  };

<<<<<<< HEAD

=======
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

<<<<<<< HEAD

  const filteredAndSortedProjects = () => {
    let filteredProjects = allData;
  
    // Filtrar proyectos por categoría
=======
  const filteredAndSortedProjects = () => {
    let filteredProjects = allData;

>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
    if (individualFilter) {
      const matchingProjects = allData.filter((row) => row.c[1]?.v.toLowerCase() === individualFilter);
      const otherProjects = allData.filter((row) => row.c[1]?.v.toLowerCase() !== individualFilter);
      filteredProjects = matchingProjects.concat(otherProjects);
    }
<<<<<<< HEAD
  
    // Filtrar proyectos por término de búsqueda en cualquier columna
=======

>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
    if (searchTerm) {
      filteredProjects = filteredProjects.filter((row) =>
        Object.values(row.c).some(
          (cell) =>
            cell?.v &&
            cell.v.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
<<<<<<< HEAD
  
    // Ordenar el array combinado
    filteredProjects.sort((a, b) => a.c[2]?.v.localeCompare(b.c[2]?.v));
  
=======

    filteredProjects.sort((a, b) => {
      const isMatchA = a.c[1]?.v.toLowerCase() === individualFilter;
      const isMatchB = b.c[1]?.v.toLowerCase() === individualFilter;

      if (isMatchA && !isMatchB) {
        return -1;
      } else if (!isMatchA && isMatchB) {
        return 1;
      }

      return b.c[9]?.v - a.c[9]?.v;
    });

>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
    return filteredProjects;
  };

  const handleFilterClick = (value) => {
    if (value === 'x') {
<<<<<<< HEAD
      // Limpiar todos los filtros
      setIndividualFilter(null);
      setGeneralFilter(null);
    } else {
      // Establecer el filtro individual
      setIndividualFilter(value);

      // Establecer el filtro general (opcional, según tus necesidades)
=======
      setIndividualFilter(null);
      setGeneralFilter(null);
    } else {
      setIndividualFilter(value);

>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
      setGeneralFilter(value);
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredRowIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredRowIndex(null);
  };

<<<<<<< HEAD
  return (
    <section id='projects'>
    <div className={`blur ${isFilterVisible ? '' : 'hidden'}`}></div>
    <div className={`row-12 hiden ${isFilterVisible ? '' : 'hidden'}`}></div>
    <div className={`container-fluid table-projects ${isFilterVisible ? '' : 'hidden'}`}>
      {filteredAndSortedProjects().map((row, index) => (
=======
  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <section id='projects'>
      <div className={`blur ${isFilterVisible ? '' : 'hidden'}`}></div>
      <div className={`row-12 hiden ${isFilterVisible ? '' : 'hidden'}`}></div>
      <div className={`container-fluid table-projects ${isFilterVisible ? '' : 'hidden'}`}>
        {filteredAndSortedProjects().map((row, index) => (
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
          <div
            className={`row ${row.c[1]?.v.toLowerCase() === individualFilter ? 'filtered-row' : ''} ${hoveredRowIndex === index ? 'hovered-row' : ''
              }`}
            key={index}
<<<<<<< HEAD
            onMouseEnter={() => handleMouseEnter(index, `url(${row.c[17]?.v})`)}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundImage: hoveredRowIndex === index ? `url(${row.c[17]?.v})` : null,
=======
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundImage: hoveredRowIndex === index ? `url(${preloadedGifs[index]})` : null,
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
              backgroundSize: hoveredRowIndex === index ? 'cover' : null,
              backgroundRepeat: hoveredRowIndex === index ? 'no-repeat' : null,
              backgroundPosition: hoveredRowIndex === index ? 'center center' : null,
            }}
          >
<<<<<<< HEAD
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
=======
            <div className='col-2 title-project height'>
              <Link to={`/project/${row.c[9]?.v}?from=favorites&initialSlide=0`}>
                <h3>{row.c[0]?.v}</h3>
              </Link>
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
            </div>
            <div className='col-2 category-project height'>
              <Link to={`/project/${row.c[9]?.v}?from=favorites&initialSlide=0`}>
                <h4>{row.c[2]?.v} / {row.c[3]?.v}</h4>
              </Link>
            </div>
            <div className='col-2 height'>
              <Link to={`/project/${row.c[9]?.v}?from=favorites&initialSlide=0`}>
                <h4>{row.c[4]?.v}</h4>
              </Link>
            </div>
            <div className='col-2 height'>
              <Link to={`/project/${row.c[9]?.v}?from=favorites&initialSlide=0`}>
                <h4>{row.c[5]?.v}</h4>
              </Link>
            </div>
            <div className='col-2'>
              <Link to={`/project/${row.c[9]?.v}?from=favorites&initialSlide=0`}>
                <h4>{row.c[6]?.v}</h4>
              </Link>
            </div>
            <div className='col-2'>
              <a className='dossier-project' download={row.c[0]?.v} href={row.c[7]?.v}><h4>dossier ⭷</h4></a>
            </div>
        
          </div>
        ))}
      </div>
      <div className={`container-filter ${isFilterVisible ? '' : 'hidden'}`}>
        <ul className='filter-projects'>
          <li>
<<<<<<< HEAD
          <input
  type="text"
  placeholder="Buscar..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
          </li>
       
=======
            {isSearchActive ? (
              <input   className={`input-busqueda ${isSearchActive ? 'activo' : ''}`}
              placeholder='Search...'
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            ) : (
              <img src="images/lupa.png" alt="Búsqueda" onClick={toggleSearch} />
            )}
          </li>

>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
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
<<<<<<< HEAD
            className={`filter-item ${generalFilter === 'comunication' ? 'selected' : ''}`}
            onClick={() => handleFilterClick('comunication')}
=======
            className={`filter-item ${generalFilter === 'digital' ? 'selected' : ''}`}
            onClick={() => handleFilterClick('digital')}
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
          >
            comunication
          </li>  
           <li
            className={`filter-item ${generalFilter === 'x' ? 'selected' : ''}`}
            onClick={() => handleFilterClick('x')}
          >
            (x)
          </li>
          <li
            className={`filter-item ${generalFilter === 'x' ? 'selected' : ''}`}
            onClick={() => handleFilterClick('x')}
          >
            <img src="images/x.png" alt="Limpiar Filtro" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;

import React, { useState, useEffect } from 'react';
import { useData } from '../../../Context/Context';
import { HashLink as Link } from 'react-router-hash-link';

const Projects = () => {
  const allData = useData();
  const [individualFilter, setIndividualFilter] = useState(null);
  const [generalFilter, setGeneralFilter] = useState(null);
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [isSearchActive, setIsSearchActive] = useState(false); // Nuevo estado

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    const threshold = documentHeight - windowHeight - 100;

    if (scrollPosition > threshold) {
      setIsFilterVisible(false);
    } else {
      setIsFilterVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filteredAndSortedProjects = () => {
    let filteredProjects = allData;

    if (individualFilter) {
      const matchingProjects = allData.filter((row) => row.c[1]?.v.toLowerCase() === individualFilter);
      const otherProjects = allData.filter((row) => row.c[1]?.v.toLowerCase() !== individualFilter);
      filteredProjects = matchingProjects.concat(otherProjects);
    }

    if (searchTerm) {
      filteredProjects = filteredProjects.filter((row) =>
        Object.values(row.c).some(
          (cell) =>
            cell?.v &&
            cell.v.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

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

    return filteredProjects;
  };

  const handleFilterClick = (value) => {
    if (value === 'x') {
      setIndividualFilter(null);
      setGeneralFilter(null);
    } else {
      setIndividualFilter(value);

      setGeneralFilter(value);
    }
  };

  const handleMouseEnter = (index) => {
    setHoveredRowIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredRowIndex(null);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <section id='projects'>
      <div className={`blur ${isFilterVisible ? '' : 'hidden'}`}></div>
      <div className={`row-12 hiden ${isFilterVisible ? '' : 'hidden'}`}></div>
      <div className={`container-fluid table-projects ${isFilterVisible ? '' : 'hidden'}`}>
        {filteredAndSortedProjects().map((row, index) => (
          <div
            className={`row ${row.c[1]?.v.toLowerCase() === individualFilter ? 'filtered-row' : ''} ${hoveredRowIndex === index ? 'hovered-row' : ''
              }`}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundImage: hoveredRowIndex === index ? `url(${row.c[22]?.v})` : null,
              backgroundSize: hoveredRowIndex === index ? 'cover' : null,
              backgroundRepeat: hoveredRowIndex === index ? 'no-repeat' : null,
              backgroundPosition: hoveredRowIndex === index ? 'center center' : null,
            }}
          >
            <div className='col-2 title-project height'>
              <Link to={`/project/${row.c[9]?.v}?from=favorites&initialSlide=0`}>
                <h3>{row.c[0]?.v}</h3>
              </Link>
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
            className={`filter-item ${generalFilter === 'digital' ? 'selected' : ''}`}
            onClick={() => handleFilterClick('digital')}
          >
            comunication
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

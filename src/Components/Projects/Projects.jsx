import React, { useState, useEffect } from 'react';
import { useData } from '../../../Context/Context';
import { HashLink as Link } from 'react-router-hash-link';

const Projects = () => {
  const allData = useData();
  const [filter, setFilter] = useState(null);
  const [projectsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allData.slice(indexOfFirstProject, indexOfLastProject);
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);

  const handleFilterClick = (value) => {
    setFilter(value);
  };

  const handleLoadMoreClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleLoadPreviousClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleMouseEnter = (index, background) => {
    setHoveredRowIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredRowIndex(null);
  };

  const totalPages = Math.ceil(allData.length / projectsPerPage);

  return (
    <section id='projects'>
      <div className='container-fluid table-projects'>
        {currentProjects.map((row, index) => (
          <div
            className={`row ${row.c[1]?.v.toLowerCase() === filter ? 'filtered-row' : ''}`}
            key={index}
            onMouseEnter={() => handleMouseEnter(index, `url(${row.c[15]?.v})`)}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundImage: hoveredRowIndex === index ? `url(${row.c[15]?.v})` : null,
              backgroundSize: hoveredRowIndex === index ? 'cover' : null,
              backgroundRepeat: hoveredRowIndex === index ? 'no-repeat' : null,
              backgroundPosition: hoveredRowIndex === index ? 'center center' : null,
            }}
          >
            <div className='col-2 title-project'><h3>{row.c[0]?.v}</h3></div>
            <div className='col-2'><h4>{row.c[1]?.v}</h4></div>
            <div className='col-2'><h4>{row.c[2]?.v}</h4></div>
            <div className='col-2'><h4>{row.c[3]?.v}</h4></div>
            <div className='col-2'><h4>{row.c[4]?.v}</h4></div>
            <div className='col-2 '>
              <Link className='dossier-project' to={`/project/${row.c[7]?.v}`}><h4>dossier ⭷</h4></Link>
            </div>
          </div>
        ))}
      </div>
      <div>
        <ul className='filter-projects'>
          <li
            className={`filter-item ${filter === 'housing' ? 'selected' : ''}`}
            onClick={() => handleFilterClick('housing')}
          >
            housing
          </li>
          <li
            className={`filter-item ${filter === 'office' ? 'selected' : ''}`}
            onClick={() => handleFilterClick('office')}
          >
            office
          </li>
          <li
            className={`filter-item ${filter === 'playground' ? 'selected' : ''}`}
            onClick={() => handleFilterClick('playground')}
          >
            playground
          </li>
          <li
            className={`filter-item ${filter === 'events' ? 'selected' : ''}`}
            onClick={() => handleFilterClick('events')}
          >
            events
          </li>
          <li
            className={`filter-item ${filter === 'web' ? 'selected' : ''}`}
            onClick={() => handleFilterClick('web')}
          >
            comunication
          </li>
        </ul>
      </div>
      <div className="pagination-buttons-container">
        {currentPage > 1 && (
          <button className="pagination-button" onClick={handleLoadPreviousClick}>
            {currentPage - 1}
          </button>
        )}
        <button className="pagination-button" disabled>
          {currentPage}
        </button>
        {currentPage < totalPages && (
          <button className="pagination-button" onClick={handleLoadMoreClick}>
            {currentPage + 1}
          </button>
        )}
        
      </div>
    </section>
  );
}

export default Projects;

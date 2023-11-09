import React, { useState, useEffect } from 'react';
import { useData } from '../../../Context/Context';
import { HashLink as Link } from 'react-router-hash-link';

const Projects = () => {
  const allData = useData();
  const [filter, setFilter] = useState(null);
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showProjects, setShowProjects] = useState(false);


  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const containerHeight = document.getElementById('projects').clientHeight;
    const scrollThreshold = containerHeight * 0.8;
    setShowProjects(scrollPosition > scrollThreshold);
  }, [scrollPosition]);

  const handleFilterClick = (value) => {
    setFilter(value);
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
        {allData.map((row, index) => (
          <div
            className={`row ${row.c[1]?.v.toLowerCase() === filter ? 'filtered-row' : ''} ${
              hoveredRowIndex === index ? 'hovered-row' : ''
            }`}
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
      <div className='container-filter'>
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
      {/* <div className="pagination-buttons-container">
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
        
      </div> */}
    </section>
  );
}

export default Projects;


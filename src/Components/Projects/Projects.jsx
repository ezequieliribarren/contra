import React, { useState } from 'react';
import { useData } from '../../../Context/Context';
import { HashLink as Link } from 'react-router-hash-link';


const Projects = () => {
    const data = useData();
    const [filter, setFilter] = useState(null);

  return (
<section id='projects'>

            <div className='container-fluid table-projects'>
                    {data.map((row, index) => (
                        <div className={`row ${row.c[1]?.v.toLowerCase() === filter ? 'filtered-row' : ''}`} key={index}>
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
           
          </div> 
          <div>
              <ul className='filter-projects'>
              <li onClick={() => setFilter('housing')}>housing</li>
              <li onClick={() => setFilter('office')}>office</li>
              <li onClick={() => setFilter('playground')}>playground</li>
              <li onClick={() => setFilter('events')}>events</li>
              <li onClick={() => setFilter('web')}>communication</li>
          </ul>
          </div>
        
        </section>
  )
}

export default Projects
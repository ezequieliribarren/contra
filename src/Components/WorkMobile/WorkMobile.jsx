// WorkMobile.js
import { useState } from 'react';
import { useData } from '../../../Context/Context';
import { HashLink as Link } from 'react-router-hash-link';
import Nav3 from '../Nav3/Nav3';

const WorkMobile = ({ showProjectDetails }) => {
  const data = useData() ?? [];
  const [isWhatOpen, setIsWhatOpen] = useState(false);

  return (
    <section id='workMobile'>
      <Nav3 isWhatOpen={isWhatOpen} setIsWhatOpen={setIsWhatOpen}  burguer='images/burguer-white.png'  />
      {data.map((row, index) => {
        const imageUrls = [
          row.c[10]?.v,
          row.c[11]?.v,
          row.c[12]?.v,
        ];
        const id = row.c[9]?.v;
        const title = row.c[0]?.v;
        const subcategory = row.c[3]?.v;
        const date = row.c[5]?.v;

        return (
          <div key={id} className='image-container'>
            {imageUrls.map((url, i) => (
              <div key={i} className="image-div">
                {url && (url.endsWith('.mp4') ? (
                  <video autoPlay loop muted playsInline>
                    <source src={url} type="video/mp4" />
                    Tu navegador no soporta el tag de video.
                  </video>
                ) : (
                  <img src={url} alt={`Image ${i}`} />
                ))}
              </div>
            ))}
            <Link to={`/project/${row.c[9]?.v}`} className="project-info">
            <p>{subcategory}</p>
                <h2>{title}</h2>
              <p>{date}</p>
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default WorkMobile;

import { useState, useEffect } from 'react';
import { useData } from '../../../Context/Context';
import { HashLink as Link } from 'react-router-hash-link';
import Nav3 from '../Nav3/Nav3';
import Footer from '../Footer/Footer';
import { GridLoader } from 'react-spinners';

const WorkMobile = ({ showProjectDetails }) => {
  const data = useData() ?? [];
  const [isWhatOpen, setIsWhatOpen] = useState(false);
  const [loadingImages, setLoadingImages] = useState(Array(data.length).fill(true));

  useEffect(() => {
    setLoadingImages(Array(data.length).fill(true));
  }, [data]);

  const handleImageLoad = (index) => {
    setLoadingImages((prevLoadingImages) => {
      const updatedLoadingImages = [...prevLoadingImages];
      updatedLoadingImages[index] = false;
      return updatedLoadingImages;
    });
  };

  return (
    <section id='workMobile'>
      <Nav3 isWhatOpen={isWhatOpen} setIsWhatOpen={setIsWhatOpen} burguer='images/burguer-white.png' to='#contact-work' />
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
                {url ? (
                  url.endsWith('.mp4') ? (
                    <video autoPlay loop muted playsInline onLoadedData={() => handleImageLoad(index)}>
                      <source src={url} type="video/mp4" />
                      Tu navegador no soporta el tag de video.
                    </video>
                  ) : (
                    <img
                      src={url}
                      alt={`Image ${i}`}
                      onLoad={() => handleImageLoad(index)}
                      onError={(e) => {
                        e.target.style.display = 'none'; // Oculta la imagen que falla
                      }}
                    />
                  )
                ) : (
                  loadingImages[index] && <GridLoader type="TailSpin" color="#E3570D" height={30} width={30} />
                )}
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
      <Footer background='background-work' color='background-work' colora='black' logo='images/logo-footer-work.png' contact='contact-work' />
    </section>
  );
};

export default WorkMobile;

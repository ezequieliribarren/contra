import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { useParams } from 'react-router-dom';
import { useData } from '../../../Context/Context';
import Abstract from '../Abstract/Abstract';
import Nav2 from '../Nav2/Nav2';
import What from '../What/What';
import { ArrowLeft, ArrowRight } from '../Arrows/Arrows';
import Cursor from '../Cursor/Cursor';

const ItemDetailContainer = ({ onAbstractClick, onWhatClick }) => {
  const { id } = useParams();
  const data = useData();
  const [project, setProject] = useState(null);
  const itemDetailRef = useRef(null);
  const sliderRef = useRef(null);
  const [isWhatOpen, setIsWhatOpen] = useState(false);
  const [openAbstract, setOpenAbstract] = useState(false);

  const handleWhatClick = () => {
    if (onWhatClick) {
      onWhatClick();
    }
    setIsWhatOpen(true);
  };

  const handleAbstractClick = () => {
    if (onAbstractClick) {
      onAbstractClick();
    }
    setOpenAbstract(true);
  };

  const handleWhatClose = () => {
    setIsWhatOpen(false);
  };

  const handleAbstractClose = () => {
    setOpenAbstract(false);
  };

  useEffect(() => {
    const selectedProject = data.find((row) => row.c[9]?.v.toString() === id.toString());
    setProject(selectedProject);
  }, [id, data]);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  // Filtrar las celdas vacías en imageUrls
  const imageUrls = [
    project.c[10]?.v,
    project.c[11]?.v,
    project.c[12]?.v,
    project.c[13]?.v,
    project.c[14]?.v,
    project.c[15]?.v,
    project.c[16]?.v,
    project.c[17]?.v,
    project.c[18]?.v,
    project.c[19]?.v,
    project.c[20]?.v,
    project.c[21]?.v,
  ].filter(url => url);

  const abstractContent = {
    p1: project.c[23]?.v,
    p2: project.c[24]?.v,
    p3: project.c[25]?.v,
    title: project.c[0]?.v,
    id: project.c[9]?.v,
    dossier: project.c[7]?.v,
    zip: project.c[26]?.v,
    video: project.c[27]?.v
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    swipeToSlide: false,
    slidesToScroll: 1,
    arrows: true,
    swipe: false,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,

    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className='item-detail-container' ref={itemDetailRef}>
      <Nav2
        onAbstractClick={handleAbstractClick}
        onWhatClick={handleWhatClick}
        isWhatOpen={isWhatOpen}
        onClose={handleWhatClose}
      />
      {imageUrls.length > 0 && (
        <>
        <Cursor/>
          <Slider ref={sliderRef} id={id} {...settings}>
            {imageUrls.map((media, index) => (
              <div key={index} className='project-img-container'>
                {typeof media === 'string' ? (
                  media.endsWith('.mp4') ? (
                    <div className="video-container">
                      <video autoPlay loop muted playsInline>
                        <source src={media} type="video/mp4" />
                        Tu navegador no soporta el tag de video.
                      </video>
                    </div>
                  ) : (
                    <img src={media} alt={`Slide ${index}`} />
                  )
                ) : (
                  <div className="abstract-container">
                    <p>{media}</p>
                  </div>
                )}
              </div>
            ))}
          </Slider>
          <div className='project-img-container'>
            <What open={isWhatOpen} onClose={handleWhatClose} work='/work' />
            <Abstract
              open={openAbstract}
              onClose={handleAbstractClose}
              {...abstractContent}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { useParams } from 'react-router-dom';
import { useData } from '../../../Context/Context';
import Abstract from '../Abstract/Abstract';
import Nav2 from '../Nav2/Nav2';
import What from '../What/What';
import { ArrowLeft, ArrowRight } from '../Arrows/Arrows';

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

  useEffect(() => {
    if (sliderRef.current) {
      const lastIndex = imageUrls.length - 1;
      sliderRef.current.slickGoTo(lastIndex);
    }
  }, [project]);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  const imageUrls = [
    project.c[10].v,
    project.c[11].v,
    project.c[12].v,
    project.c[13].v,
    project.c[14].v,
    project.c[15].v,
    project.c[16].v,
  ];

  const abstractContent = {
    p1: project.c[18]?.v,
    p2: project.c[19]?.v,
    p3: project.c[20]?.v,
    title: project.c[0]?.v,
    id: project.c[9]?.v,
    dossier: project.c[7]?.v,
    zip: project.c[21]?.v,
    video: project.c[22]?.v
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  return (
    <div className='item-detail-container' ref={itemDetailRef}>
      <Nav2
        onAbstractClick={handleAbstractClick}
        onWhatClick={handleWhatClick}
        isWhatOpen={isWhatOpen}
        onClose={handleWhatClose}
      />
      <Slider ref={sliderRef} id={id} {...settings}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className='project-img-container'>
            <img src={imageUrl} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>  <div className='project-img-container'>
          <What open={isWhatOpen} onClose={handleWhatClose} />
          <Abstract
            open={openAbstract}
            onClose={handleAbstractClose}
            {...abstractContent}
          />
        </div>
    </div>
  );
};

export default ItemDetailContainer;

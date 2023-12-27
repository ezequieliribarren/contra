import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { useParams } from 'react-router-dom';
import { useData } from '../../../Context/Context';
import Abstract from '../Abstract/Abstract';
import Nav2 from '../Nav2/Nav2';
import What from '../What/What';
import { ArrowLeft, ArrowRight } from '../Arrows/Arrows';
import Footer from '../Footer/Footer';
import { GridLoader } from 'react-spinners';
import Nav from '../Nav/Nav';
import AbstractSlider from '../Abstract-Slider/AbstractSlider';
import { useLocation } from 'react-router-dom';

const ItemDetailContainer = ({ onAbstractClick, onWhatClick }) => {
  const { id } = useParams();
  const data = useData();
  const [project, setProject] = useState(null);
  const itemDetailRef = useRef(null);
  const sliderRef = useRef(null);
  const [isWhatOpen, setIsWhatOpen] = useState(false);
  const [openAbstract, setOpenAbstract] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const from = queryParams.get('from');
  const initialSlide = parseInt(queryParams.get('initialSlide'), 10) || 0;  
  const maxVisibleDots = 3;
  const [isLastSlide, setIsLastSlide] = useState(false);


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
    setLoading(false);
  
    // Scroll al tope de la pantalla en dispositivos móviles
    if (window.innerWidth <= 700) {
      window.scrollTo(0, 0);
    }
    
  }, [id, data]);
  useEffect(() => {
    // Scroll a la posición correcta del slider
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(initialSlide);
    }
  }, [initialSlide]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <GridLoader type="Puff" color="#E3570D" height={100} width={100} />
      </div>
    );
  }

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  const abstractContent = {
    p1: project.c[23]?.v,
    p2: project.c[24]?.v,
    p3: project.c[25]?.v,
    title: project.c[0]?.v,
    id: project.c[9]?.v,
    dossier: project.c[7]?.v,
    zip: project.c[26]?.v,
    video: project.c[27]?.v,
  };

  const mediaContent = [
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
    <AbstractSlider {...abstractContent} />
  ];

  const filteredMediaContent = mediaContent.filter(item => item);

  const renderMedia = () => {
    return filteredMediaContent.map((media, index) => (
      <div key={index} className='project-img-container'>
        {typeof media === 'string' ? (
          media.endsWith('.mp4') ? (
            <div className="video-container">
              <video autoPlay loop muted playsInline preload>
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
    ));
  };

  const settings = {
    dots: false,
    infinite: initialSlide,
    speed: 600,
    slidesToShow: 3,
    swipeToSlide: false,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
    initialSlide: initialSlide,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          infinite: initialSlide,
          initialSlide: initialSlide,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          arrows: false,
          infinite: initialSlide,
          initialSlide: initialSlide,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        {dots.slice(0, maxVisibleDots)} {/* Muestra solo los primeros maxVisibleDots dots */}
      </div>
    ),
  };

  return (
    <div className='item-detail-container' ref={itemDetailRef}>
      <Nav about='none' mitad='mitad blend' nav='top-left-button blend' work='none' more='none'/>
      <Nav2
        onAbstractClick={handleAbstractClick}
        onWhatClick={handleWhatClick}
        isWhatOpen={isWhatOpen}
        onClose={handleWhatClose}
      />
      <Slider ref={sliderRef} id={id} {...settings} className='slider-project-item'>
        {renderMedia()}
      </Slider>
      <div className='project-img-container'>
        <What open={isWhatOpen} onClose={handleWhatClose} work='/work' to="#contact-item"/>
        <Abstract
          open={openAbstract}
          onClose={handleAbstractClose}
          {...abstractContent}
        />
      </div>
      <Footer background='background-home' color='background-home' logo='images/logo-footer.png' contact="contact-item"/>
    </div>
  );
  }

export default ItemDetailContainer;
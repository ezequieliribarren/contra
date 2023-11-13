import React, { useContext, useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { HashLink as Link } from 'react-router-hash-link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useParams } from 'react-router-dom';
import { useData } from '../../../Context/Context';
import Abstract from '../Abstract/Abstract';
import Nav2 from '../Nav2/Nav2'
import What from '../What/What';
import { ArrowLeft, ArrowRight } from '../Arrows/Arrows';

const ItemDetailContainer = ({ onAbstractClick, onWhatClick }) => {
    const { id } = useParams();
    const data = useData();
    const [project, setProject] = useState(null);
    const itemDetailRef = useRef(null);
    const sliderRef = useRef(null);

    const [open, setOpen] = useState(false);

   

    useEffect(() => {
        const selectedProject = data.find((row) => row.c[9]?.v.toString() === id.toString());
        setProject(selectedProject);
    }, [id, data]);

    useEffect(() => {
        if (sliderRef.current) {
            const lastIndex = imageUrls.length - 1;
            sliderRef.current.slickGoTo(lastIndex);
        }
    }, [project]); // Asegúrate de que este useEffect se ejecute cada vez que project cambie

    if (!project) {
        return <div>Proyecto no encontrado</div>;
    }

    const handleGoToLastSlide = () => {
        if (sliderRef.current) {
            const lastIndex = imageUrls.length - 1;
            sliderRef.current.slickGoTo(lastIndex);
        }
    };

    const handleWhatClick = () => {
        console.log('handleWhatClick called');
        if (onWhatClick) {
          onWhatClick();
        }
        setOpen(true);
      };

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
        dossier: project.c[7]?.v
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
    };

    return (
        <div className='item-detail-container' ref={itemDetailRef}>
        <Nav2 onAbstractClick={handleGoToLastSlide} onWhatClick={handleWhatClick} />
        <Slider ref={sliderRef} id={id} {...settings}>
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className='project-img-container'>
              <img src={imageUrl} alt={`Slide ${index}`} />
            </div>
          ))}
          <div className='project-img-container'>
            <Abstract {...abstractContent} />
            {open && <What open={open} onClose={() => setOpen(false)} />}
          </div>
        </Slider>
      </div>
    );
};

export default ItemDetailContainer;

import React, { useContext, useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import { HashLink as Link } from 'react-router-hash-link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useParams } from 'react-router-dom';
import { useData } from '../../../Context/Context';
import Nav2 from '../Nav2/Nav2';
import Abstract from '../Abstract/Abstract'; // Asegúrate de importar el componente Abstract correctamente

const ItemDetailContainer = () => {
    const { id } = useParams();
    const data = useData();
    const [project, setProject] = useState(null);
    const itemDetailRef = useRef(null);

    useEffect(() => {
        const selectedProject = data.find((row) => row.c[7]?.v.toString() === id.toString());
        setProject(selectedProject);
    }, [id, data]);

    if (!project) {
        return <div>Proyecto no encontrado</div>;
    }

    const imageUrls = [
        project.c[8].v,
        project.c[9].v,
        project.c[10].v,
        project.c[11].v,
        project.c[12].v,
        project.c[13].v,
        project.c[14].v,
    ];

    const abstractContent = {
        p1: project.c[16]?.v,
        p2: project.c[17]?.v,
        p3: project.c[18]?.v,
        title: project.c[0]?.v,
        id: project.c[7]?.v,
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className='item-detail-container' ref={itemDetailRef}>
            <Nav2 />
            <Slider id={id} {...settings}>
                {imageUrls.map((imageUrl, index) => (
                    <div key={index} className='project-img-container'>
                        <img src={imageUrl} alt={`Slide ${index}`} />
                    </div>
                ))}
                <div className='project-img-container'>
                    <Abstract {...abstractContent} />
                </div>
            </Slider>
        </div>
    );
};

export default ItemDetailContainer;

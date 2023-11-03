import React, { useState } from 'react';
import Slider from 'react-slick';
import { useThirdData } from '../../../Context/Context';

const MoreSwitch = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const thirdData = useThirdData();


  // const categories = ['All', 'Articles', 'Workshops', 'Culture', 'Own product'];
  const filteredData = thirdData.filter(item => selectedCategory === 'All' || item.c[1]?.v === selectedCategory);


  // // Datos para los elementos en el slider inferior
  // const contentData = {
  //   All: [
  //     { title: 'Title 1', description: 'Description 1' },
  //     { title: 'Title 2', description: 'Description 2' },
  //     { title: 'Title 3', description: 'Description 3' },
  //     // Agrega más elementos según sea necesario
  //   ],
  //   Articles: [
  //     // Datos para la categoría Articles
  //   ],
  //   Workshops: [
  //     // Datos para la categoría Workshops
  //   ],
  //   Culture: [
  //     // Datos para la categoría Culture
  //   ],
  //   'Own product': [
  //     // Datos para la categoría Own product
  //   ],
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id='more-switch'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6">
            <ul>
              {categories.map((category) => (
             <li
             key={category}
             className={selectedCategory === category ? 'selected-category' : ''}
             onClick={() => setSelectedCategory(category)}
           >
             {category}
           </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-lg-6">
            <div>
              {contentData[selectedCategory][0] && (
                <>
                  <h2>{contentData[selectedCategory][0].title}</h2>
                  <p>{contentData[selectedCategory][0].description}</p>
                </>
              )}
            </div>
            <Slider className="slider-bottom" {...settings}>
              {contentData[selectedCategory].slice(1).map((item, index) => (
                <div key={index}>
                  <a className="slider-item">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreSwitch;

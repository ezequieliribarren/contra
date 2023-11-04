import React, { useState } from 'react';
import Slider from 'react-slick';
import { useThirdData } from '../../../Context/Context';
import { HashLink as Link } from 'react-router-hash-link';
import { ArrowLeft, ArrowRight } from '../Arrows/Arrows';

const MoreSwitch = () => {
  const thirdData = useThirdData();
  console.log(thirdData);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredData = thirdData.filter(item => selectedCategory === 'All' || item.c[1]?.v === selectedCategory);
  // const firstItem = filteredData[0]; // Obtén el primer elemento de la lista filtrada
  // const remainingItems = filteredData.slice(1); // Obtén los elementos restantes de la lista filtrada
  const categories = ['All', 'article', 'workshop', 'culture', 'product'];


  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ArrowLeft />, // Usar componente personalizado para la flecha izquierda
    nextArrow: <ArrowRight />, // Usar componente personalizado para la flecha derecha
  };

  return (
    <section id='more-switch'>
      <div className="container-fluid">
        <div className="row more-select">
          <div className="col-12 col-lg-4 more-buttons">

            <p className='p1'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sequi incidunt unde illum, temporibus reiciendis alias vitae dolorem
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sequi incidunt unde illum, temporibus reiciendis alias vitae dolorem cupiditate rem, repellendus consectetur delectus maxime similique quae quam autem. Eos, libero?
            </p>

            <ul>
              {categories.map((category, index) => (
                <Link smooth to={`/more/#slider`}>
                  <li
                    key={index}
                    className={`filter-item ${selectedCategory === category ? 'selected' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <span className='more-span'>⭷</span> {category === 'All' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </li>
                </Link>

              ))}
            </ul>
          </div>
          <div className="col-12 col-lg-8 more-first">
            {/* {firstItem && ( // Verifica si hay un primer elemento
              <div  className="content-item">
                {firstItem.c[1]?.v === 'article' && (
                  <div className="article-content">
                    <h3>{firstItem.c[0]?.v}</h3>
                    <img src={firstItem.c[3]?.v} alt="" />
                  </div>
                )}
                {firstItem.c[1]?.v === 'workshop' && (
                  <div id='workshop' className="workshop-content">
                    <h3>{firstItem.c[0]?.v}</h3>
                    <img src={firstItem.c[3]?.v} alt="" />
                  </div>
                )}
                {firstItem.c[1]?.v === 'culture' && (
                  <div id='culture' className="culture-content">
                    <h3>{firstItem.c[0]?.v}</h3>
                    <img src={firstItem.c[3]?.v} alt="" />
                  </div>
                )}
                {firstItem.c[1]?.v === 'product' && (
                  <div id='product' className="product-content">
                    <h3>{firstItem.c[0]?.v}</h3>
                    <img src={firstItem.c[3]?.v} alt="" />
                  </div>
                )}
              </div>
            )} */}

            <img src="images/more/1.png" alt="" />
          </div>
        </div>
        <div id='slider' className="row more-slider">
          <Slider className="slider-bottom" {...sliderSettings}>
            {thirdData.map((item, index) => (
              (selectedCategory === 'All' || item.c[1]?.v === selectedCategory) && (
                <div key={index} className="slider-item">
                  <a className="slider-item-content">
                    <img src={item.c[3]?.v} alt="" /> 
                    <div className="more-hover-content">
                      <h3 className='more-h3'>{item.c[0]?.v}</h3>
                      <p className='more-p'>{item.c[4]?.v}</p>
                    </div>
                  </a>
                </div>
              )
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MoreSwitch;

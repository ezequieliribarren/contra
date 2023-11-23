import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useThirdData } from '../../../Context/Context';
import { HashLink as Link } from 'react-router-hash-link';
import { ArrowLeft, ArrowRight } from '../Arrows/Arrows';

const MoreSwitch = () => {
  const thirdData = useThirdData();
  const [selectedCategories, setSelectedCategories] = useState(['All']);
  const [filteredData, setFilteredData] = useState(thirdData);
  const [isSliderActive, setIsSliderActive] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const handleCategoryClick = (category) => {
    let filteredItems;

    if (category === 'All') {
      setSelectedCategories(['All']);
      // Filtrar solo aquellos elementos que tienen contenido relevante
      filteredItems = thirdData.slice(1).filter((item) => item.c[1]?.v);
    } else {
      filteredItems = thirdData.slice(1).filter((item) => item.c[1]?.v === category);
      setSelectedCategories([category]);
    }

    setFilteredData(filteredItems);

    // Activar el slider solo después de la primera renderización
    if (!isFirstRender) {
      setIsSliderActive(true);
    }
  };

  useEffect(() => {
    // Después de la primera renderización, establecer isFirstRender a false
    setIsFirstRender(false);

    // Activar el slider solo si la categoría seleccionada no es 'All'
    setIsSliderActive(selectedCategories[0] !== 'All');
  }, [selectedCategories]);

  useEffect(() => {
    // Llamar a handleCategoryClick con la categoría 'All' al cargar la página
    handleCategoryClick('All');
  }, []); // El array vacío asegura que se ejecute solo en la carga inicial

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section id='more-switch'>
      <div className="container-fluid">
        <div className="row more-select ">
          <div className="col-12 col-lg-4 more-buttons">
            {thirdData.slice(1).map((p, index) => (
              <div className='more-p-container' key={index}>
                {p.c[5]?.v && (
                  <p className='p1'>
                    {p.c[5]?.v}
                  </p>
                )}
                {p.c[6]?.v && (
                  <p>
                    {p.c[6]?.v}
                  </p>
                )}
              </div>
            ))}
            <ul>
              {thirdData.slice(1).map((p, index) => (
                <Link smooth to={`/more/#slider`} key={index}>
                  <li
                    key={index}
                    className={`filter-item ${selectedCategories.includes(p.c[7]?.v) ? 'selected' : ''
                      }`}
                    onClick={() => handleCategoryClick(p.c[7]?.v ?? 'All')}
                  >
                    <span className='more-span'>⭷</span> {p.c[7]?.v === 'All' ? 'All' : (p.c[7]?.v ?? '').charAt(0).toUpperCase() + (p.c[7]?.v ?? '').slice(1)}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className={`col-12 col-lg-8 more-first ${isSliderActive ? 'slider-active' : ''}`}>
            <img src="images/more/1.png" alt="" />
          </div>
        </div>
        <div id='slider' className={`row more-slider ${isSliderActive ? 'slider-active' : ''}`}>
          <Slider className="slider-bottom" {...sliderSettings}>
            {(selectedCategories[0] === 'All' ? thirdData.slice(1) : filteredData).map((item, index) => (
              <div key={index} className="slider-item">
                <a className="slider-item-content">
                  <img src={item.c[3]?.v} alt="" />
                  <div className="more-hover-content">
                    <h3 className='more-h3'>{item.c[0]?.v}</h3>
                    <p className='more-p'>{item.c[4]?.v}</p>
                  </div>
                </a>
              </div>
            ))}
          </Slider>

        </div>
      </div>
    </section>
  );
};

export default MoreSwitch;

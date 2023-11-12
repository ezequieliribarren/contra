import React, { useState } from 'react';
import Slider from 'react-slick';
import { useThirdData } from '../../../Context/Context';
import { HashLink as Link } from 'react-router-hash-link';
import { ArrowLeft, ArrowRight } from '../Arrows/Arrows';

const MoreSwitch = () => {
  const thirdData = useThirdData();
  const [selectedCategories, setSelectedCategories] = useState(['All']);
  const [filteredData, setFilteredData] = useState(thirdData);

  const handleCategoryClick = (category) => {
    if (category === 'All') {
      setSelectedCategories(['All']);
      setFilteredData(thirdData);
    } else {
      const filteredItems = thirdData.slice(1).filter((item) => item.c[1]?.v === category);
      setSelectedCategories([category]);
      setFilteredData(filteredItems);
    }
  };


  const sliderSettings = {
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
    <section id='more-switch'>
      <div className="container-fluid">
        <div className="row more-select section">
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
                <Link to={`/more/#slider`} key={index}>
                  <li
                    key={index}
                    className={`filter-item ${
                      selectedCategories.includes(p.c[7]?.v) ? 'selected' : ''
                    }`}
                    onClick={() => handleCategoryClick(p.c[7]?.v ?? 'All')}
                  >
                    <span className='more-span'>⭷</span> {p.c[7]?.v === 'All' ? 'All' : (p.c[7]?.v ?? '').charAt(0).toUpperCase() + (p.c[7]?.v ?? '').slice(1)}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="col-12 col-lg-8 more-first">
            <img src="images/more/1.png" alt="" />
          </div>
        </div>
        <div id='slider' className="row more-slider section">
          <Slider className="slider-bottom" {...sliderSettings}>
            {filteredData.slice(1).map((item, index) => (
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
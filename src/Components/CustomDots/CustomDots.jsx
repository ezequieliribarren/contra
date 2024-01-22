import React from 'react';
import PropTypes from 'prop-types';

const CustomDots = ({ slides, activeIndex }) => {
  return (
    <div className="custom-dots-container">
      {slides && slides.map((slide, index) => (
        <div
          key={index}
          className={`custom-dot ${index === activeIndex ? 'active' : ''}`}
        />
      ))}
    </div>
  );
};

CustomDots.propTypes = {
  slides: PropTypes.array,
  activeIndex: PropTypes.number.isRequired,
};

export default CustomDots;
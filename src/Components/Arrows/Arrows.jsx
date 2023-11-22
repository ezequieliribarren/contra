import React from 'react';

const ArrowLeft = ({ onClick }) => {
  return (
    <div className="arrow-left" onClick={onClick}>
     <img src="images/arrowleft.png" alt="Arrow" />
    </div>
  );
};

const ArrowRight = ({ onClick }) => {
  return (
    <div className="arrow-right" onClick={onClick}>
     <img src="images/arrowright.png" alt="Arrow" />
    </div>
  );
};

export { ArrowLeft, ArrowRight };
import React, { useState } from 'react';
import What from '../What/What';

const Nav3 = ({ isWhatOpen, setIsWhatOpen, burguer, to}) => {
  const handleWhatClick = () => {
    setIsWhatOpen(true);
  };

  return (
    <>
      <a className="project-top-right-button nav3" onClick={handleWhatClick}>
        <img src={burguer} alt="" />
      </a>
      <What open={isWhatOpen} onClose={() => setIsWhatOpen(false)} work='/workMobile' to={to}/>
    </>
  );
};

export default Nav3;
// Nav3.jsx
import React, { useState } from 'react';
import What from '../What/What';

const Nav3 = ({ isWhatOpen, setIsWhatOpen }) => {
  const handleWhatClick = () => {
    setIsWhatOpen(true);
  };

  return (
    <>
      <a className="project-top-right-button nav3" onClick={handleWhatClick}>
        <img src="images/burguer.png" alt="" />
      </a>
      <What open={isWhatOpen} onClose={() => setIsWhatOpen(false)} />
    </>
  );
};

export default Nav3;

import React, { useState } from 'react';
import What from '../What/What';
import Abstract from '../Abstract/Abstract'; // Importa el componente Abstract

const Nav2 = ({ onAbstractClick, onWhatClick }) => {
  const [openAbstract, setOpenAbstract] = useState(false);
  const [openWhat, setOpenWhat] = useState(false);
  const [abstractButtonClicked, setAbstractButtonClicked] = useState(false);

  const handleClose = () => {
    setOpenAbstract(false);
    setOpenWhat(false);
  };

  const handleAbstractClick = () => {
    if (onAbstractClick) {
      onAbstractClick();
    }
    setAbstractButtonClicked(true);
    setOpenAbstract(true); // Cambia el estado de openAbstract
    setOpenWhat(false);
  };

  const handleWhatClick = () => {
    if (onWhatClick) {
      onWhatClick();
    }
    setOpenWhat(true);
    setOpenAbstract(false);
  };

  return (
    <>
      <a className={`project-bottom-right-button`} onClick={handleAbstractClick}>
        Abstract
      </a>
      <a className="project-top-right-button" onClick={handleWhatClick}>
        What
      </a>
      {(openAbstract || openWhat) && (
        <>
          <What onClose={handleClose} />
        </>
      )}
    </>
  );
};

export default Nav2;

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
<<<<<<< HEAD
=======
    setOpenAbstract(true); // Cambia el estado de openAbstract
    setOpenWhat(false);
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
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
<<<<<<< HEAD
      <a className={`project-bottom-right-button ${abstractButtonClicked ? 'opacity-zero' : ''}`} onClick={handleAbstractClick}>
=======
      <a className={`project-bottom-right-button`} onClick={handleAbstractClick}>
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
        Abstract
      </a>
      <a className="project-top-right-button" onClick={handleWhatClick}>
        What
      </a>
<<<<<<< HEAD
      {(openAbstract || openWhat) && <What onClose={handleClose} />}
=======
      {(openAbstract || openWhat) && (
        <>
          <What onClose={handleClose} work= '/work' />
        </>
      )}
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
    </>
  );
};

export default Nav2;
<<<<<<< HEAD
// Nav3.jsx
import React, { useState } from 'react';
import What from '../What/What';

const Nav3 = ({ isWhatOpen, setIsWhatOpen }) => {
=======
import React, { useState } from 'react';
import What from '../What/What';

const Nav3 = ({ isWhatOpen, setIsWhatOpen, burguer, to}) => {
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
  const handleWhatClick = () => {
    setIsWhatOpen(true);
  };

  return (
    <>
      <a className="project-top-right-button nav3" onClick={handleWhatClick}>
<<<<<<< HEAD
        <img src="images/burguer.png" alt="" />
      </a>
      <What open={isWhatOpen} onClose={() => setIsWhatOpen(false)} />
=======
        <img src={burguer} alt="" />
      </a>
      <What open={isWhatOpen} onClose={() => setIsWhatOpen(false)} work='/workMobile' to={to}/>
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
    </>
  );
};

<<<<<<< HEAD
export default Nav3;
=======
export default Nav3;
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23

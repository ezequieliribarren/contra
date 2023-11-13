import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { HashLink as Link } from 'react-router-hash-link';

const What = ({ open, onClose }) => {
  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '49.5%',
    transform: 'translate(-50%, -50%)',
    width: 520,
    height: '100vh',
    bgcolor: '#0F0F0F',
    border: '2px solid #000',
    boxShadow: 24,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-entered"
      >
        <Box sx={modalStyle} className='what-box'>
          <ul className='what-menu'>
            <Link to='/about'>
              <li><a><span className='what-span'>⭷</span>About</a></li>
            </Link>
            <Link to='/work'>
              <li><a><span className='what-span'>⭷</span>Work</a></li>
            </Link>
            <Link to='/more'>
              <li><a><span className='what-span'>⭷</span>More</a></li>
            </Link>
            <Link to='/contact'>
              <li><a><span className='what-span'>⭷</span>Contact</a></li>
            </Link>
          </ul>
          <button className='what-close-button' onClick={onClose}>( x )</button>
          <div className='what-redes'>
            <a href=""><img src="images/insta.png" alt="" /></a>
            <a href=""><img src="images/linkedin.png" alt="" /></a>
            <a href=""><img src="images/spotify.png" alt="" /></a>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default What;

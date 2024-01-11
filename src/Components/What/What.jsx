import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { HashLink as Link } from 'react-router-hash-link';
import { useSecondData } from '../../../Context/Context';

const What = ({ open, onClose, work, to }) => {
  const data = useSecondData();

<<<<<<< HEAD
const What = ({ open, onClose }) => {
=======
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
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

<<<<<<< HEAD
=======
  if (!data) {
    return null;
  }

  // Nueva función para cerrar el modal y navegar a la sección "Contact"
  const handleCloseAndNavigate = () => {
    onClose(); // Cierra el modal
  };

>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal-entered"
      >
        <Box sx={modalStyle} className='what-box'>
<<<<<<< HEAD
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
                        <Link smooth to='/#contact'>
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
=======
          <ul className='what-menu'>
            <Link to='/about' onClick={onClose}>
              <li><a><span className='what-span'>⭷</span>About</a></li>
            </Link>
            <Link to={work} onClick={onClose}>
              <li><a><span className='what-span'>⭷</span>Work</a></li>
            </Link>
            <Link to='/more' onClick={onClose}>
              <li><a><span className='what-span'>⭷</span>More</a></li>
            </Link>
            <Link smooth to={to} onClick={handleCloseAndNavigate}>
              <li><a><span className='what-span'>⭷</span>Contact</a></li>
            </Link>
          </ul>
          <div className='what-redes'>
            {data.map((item, index) => {
              if (item.c[2]?.v && item.c[3]?.v) {
                return (
                  <a target='_blank' key={index} href={item.c[2]?.v}>
                    <img className='img-redes' src={item.c[3]?.v} alt="" />
                  </a>
                );
              }
              return null;
            })}
          </div>
          <button className='what-close-button' onClick={onClose}>( x )</button>
        </Box>
      </Modal>
    </>
  );
};
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23

export default What;
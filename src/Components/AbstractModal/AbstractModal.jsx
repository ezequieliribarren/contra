import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { HashLink as Link } from 'react-router-hash-link';

const AbstractModal = ({ isOpen, onClose, p1, p2, p3, title, id, abstract, img, none, ver, dossier }) => {
  const linkRef = useRef(null);

  const copyToClipboard = () => {
    if (linkRef.current) {
      linkRef.current.select();
      navigator.clipboard.writeText(linkRef.current.value)
        .then(() => {
          console.log('Enlace copiado al portapapeles');
        })
        .catch((err) => {
          console.error('Error al copiar al portapapeles: ', err);
        });
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="modal-entered"
    >
      <Box sx={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 520,
        height: '100vh',
        bgcolor: '#0F0F0F',
        border: '2px solid #000',
        boxShadow: 24,
        overflowY: 'scroll', // Para permitir desplazamiento vertical si el contenido es más largo
      }} className='what-box'>
        {/* Contenido del modal */}
        <h2 className='abstract-h2'>{title}</h2>
        <div>
          {ver}
        </div>
        <p className='abstract-p'>
          {p1}
        </p>
        <p className='abstract-p'>
          {p2}
        </p>
        <p className='abstract-p'>
          {p3}
        </p>
        <div className={`abstract-menu ${none}`}>
          <div className='abstract-item'>
            <a download={title} className='abstract-a1' href={dossier}><img src="images/abstract/descargar.svg" alt="" /></a>
            <h4>Descargar<br />proyecto</h4>
          </div>
          <div className='abstract-item'>
            <a className='abstract-a2' href=""><img src="images/abstract/share.svg" alt="" /></a>
            <h4>Nota<br />de Prensa</h4>
          </div>
          <div className='abstract-item'>
            <input ref={linkRef} type="text" readOnly value={window.location.href} style={{ display: 'none' }} />
            <a className='abstract-a3' onClick={copyToClipboard}><img src="images/abstract/compartir.svg" alt="" /></a>
            <h4>Compartir<br />proyecto</h4>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default AbstractModal;

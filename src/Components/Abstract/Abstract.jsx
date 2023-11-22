import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Abstract = ({ p1, p2, p3, title, id, abstract, img, none, ver, dossier, open, onClose, zip, video }) => {
  const linkRef = useRef(null);

  const modalStyle = {
    position: 'fixed',
    top: 0,
    right: open ? 0 : '-520px', // Ajusta según el ancho del modal
    width: 520,
    height: '100vh',
    bgcolor: '#0F0F0F',
    border: '2px solid #000',
    boxShadow: 24,
    transition: 'right 0.4s ease-in-out',
  };
  const copyToClipboard = () => {
    if (linkRef.current) {
      // Seleccionar el contenido del enlace
      linkRef.current.select();
      // Copiar al portapapeles
      navigator.clipboard.writeText(linkRef.current.value)
        .then(() => {
          console.log('Enlace copiado al portapapeles');
          // Muestra el mensaje de alerta
          toast.success('Proyecto copiado en portapapeles', {
            position: toast.POSITION.TOP_CENTER,
          });
        })
        .catch((err) => {
          console.error('Error al copiar al portapapeles: ', err);
        });
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="modal-entered"
    >
      <Box sx={modalStyle} className='what-box'>
        <div id={id} className={`abstract ${abstract}`} style={{ backgroundImage: `url(${img})` }}>
          <div className='abstract-sombra'>
            <h2 className='abstract-h2'>{title}</h2>
            <div>
              {ver}
            </div>
          </div>
          <div>
            <p className='abstract-p'>
              {p1}
            </p>
            <p className='abstract-p'>
              {p2}
            </p>
            <p className='abstract-p'>
              {p3}
            </p>
          </div>
          <div className={`abstract-menu ${none}`}>
            <div className='abstract-item'>
              <a download={title} className='abstract-a1' href={dossier}><img src="images/abstract/descargar.svg" alt="Descargar" /></a>
              <h4>Descargar<br />proyecto</h4>
            </div>
            <div className='abstract-item'>
              <a download={title} className='abstract-a2' href={zip}> <img src="images/abstract/share.svg" alt="Nota de prensa" />     </a>
              <h4>Nota<br />de Prensa</h4>
            </div>
            <div className='abstract-item'>
              <a  className='abstract-a4' href={video}> <img src="images/abstract/share.svg" alt="Ver video" />     </a>
              <h4>Ver<br />video</h4>
            </div>
            <div className='abstract-item'>
              <input ref={linkRef} type="text" readOnly value={window.location.href} style={{ display: 'none' }} />
              <a className='abstract-a3' onClick={copyToClipboard}><img src="images/abstract/compartir.svg" alt="Compartir" /></a>
              <h4>Compartir<br />proyecto</h4>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default Abstract;






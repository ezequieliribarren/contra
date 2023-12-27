import React, { useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AbstractSlider = ({ p1, p2, p3, title, id, abstract, img, none, ver, dossier, zip, video }) => {
  const linkRef = useRef(null);

  const copyToClipboard = () => {
    if (linkRef.current) {
      linkRef.current.select();
      navigator.clipboard.writeText(linkRef.current.value)
        .then(() => {
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
      <div className='abstract-slider'>
        <div id={id} className={`abstract ${abstract}`} style={{ backgroundImage: `url(${img})` }}>
        <div className="shadow-overlay-abstract"></div>
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
              <a target='_blank' download={title} className='abstract-a1' href={dossier}><img src="images/abstract/descargar.svg" alt="Descargar" /></a>
              <h4>Descargar<br />proyecto</h4>
            </div>
            <div className='abstract-item'>
              <a target='_blank' download={title} className='abstract-a2' href={zip}> <img src="images/abstract/share.svg" alt="Nota de prensa" /> </a>
              <h4>Nota<br />de Prensa</h4>
            </div>
            {video && ( // Condición para renderizar solo si video no está vacío
              <div className='abstract-item'>
                <a target='_blank' className='abstract-a4' href={video}> <img src="images/video.png" alt="Ver video" /> </a>
                <h4>Ver<br />video</h4>
              </div>
            )}
            <div className='abstract-item'>
              <input ref={linkRef} type="text" readOnly value={window.location.href} style={{ display: 'none' }} />
              <a target='_blank' className='abstract-a3' onClick={copyToClipboard}><img src="images/abstract/compartir.svg" alt="Compartir" /></a>
              <h4>Compartir<br />proyecto</h4>
            </div>
          </div>
        </div>
      </div>
  );
}


export default AbstractSlider;






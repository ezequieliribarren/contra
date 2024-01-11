import React, { useRef } from 'react';

const Abstract = ({ p1, p2, p3, title, id, abstract, img, none, ver, dossier }) => {
  const linkRef = useRef(null);

  const copyToClipboard = () => {
    if (linkRef.current) {
      // Seleccionar el contenido del enlace
      linkRef.current.select();
      // Copiar al portapapeles
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
          <a download={title} className='abstract-a1' href={dossier}><img src="images/abstract/descargar.svg" alt="" /></a>
          <h4>Descargar<br />proyecto</h4>
        </div>
        <div className='abstract-item'>
          <a className='abstract-a2' href=""> <img src="images/abstract/share.svg" alt="" />     </a>
          <h4>Nota<br />de Prensa</h4>
        </div>
        <div className='abstract-item'>
          <input ref={linkRef} type="text" readOnly value={window.location.href} style={{ display: 'none' }} />
          <a className='abstract-a3' onClick={copyToClipboard}><img src="images/abstract/compartir.svg" alt="" /></a>
          <h4>Compartir<br />proyecto</h4>
        </div>
      </div>
    </div>
  );
}

export default Abstract;

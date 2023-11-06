import React from 'react';
const Footer = ({ background, color }) => {
  return (
    <footer className={background}>

      <div className="container-fluid">
        <img className='img-fluid' src="images/footer.png" alt="" />
        <div className="links">
          <div className={`a1 ${color}`}>
            <a href="">contra.architecture@gmail.com</a>
          </div>
          <div className={`a2 ${color}`}>
            <a href="">+34 697 286 914</a>
          </div>
          <div className={`a3 ${color}`}>
            <a href="">Instagram</a>
          </div>
          <div className={`a4 ${color}`}>
            <a href="">Linkedin</a>
          </div>
          <div className={`a5 ${color}`}>
            <a href="">Spotify</a>
          </div>
          <div className={`a6 ${color}`}>
            <a href="">MAPS
              C/ Aldapa, 2 Local 4, Esquina,<br /> C. de Matilde Hernández,<br /> 28025, Madrid</a>
          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer
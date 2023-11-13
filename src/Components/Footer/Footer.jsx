import React from 'react';
const Footer = ({ background, color, colora, logo }) => {
  return (
    <footer className={background} id='contact'>

      <div className="container-fluid">
        <div className='footer-circle'>
          <div className={`a0 ${color}`}>
            <a href=""><img src={logo} alt="" /></a>
          </div>
          <div className={`a1 ${color}`}>
            <a className={colora} href="mailto:contra.architecture@gmail.com">contra.architecture@gmail.com</a>
          </div>
          <div className={`a2 ${color}`}>
            <a className={colora} href="tel:+34697286914">+34 697 286 914</a>
          </div>
          <div className={`a3 ${color}`}>
            <a className={colora} href="">Instagram <span><img src="images/insta.png" alt="" /></span></a> <a className={colora} href="">Linkedin<span><img src="images/linkedin.png" alt="" /></span></a><a className={colora} href="">Spotify<span><img src="images/spotify.png" alt="" /></span></a>
          </div>
          <div className={`a4 ${color}`}>  <div className='div-maps'>MAPS⭷</div>
            <a className={colora} href="">
              <div>C/ Aldapa, 2 Local 4, Esquina,<br /> C. de Matilde Hernández,<br /> 28025, Madrid</div></a>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
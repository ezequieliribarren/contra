import React from 'react';
const Footer = ({ background, color, colora, logo }) => {
  return (
    <footer className={background} id='contact'>

      <div className="container-fluid">
        <div className='footer-circle'>
          <div className={`a0 ${color}`}>
            <a href=""><img className='img-fluid' src={logo} alt="" /></a>
          </div>
          <div className={`a1 ${color}`}>
            <a className={colora} href="mailto:contra.architecture@gmail.com">contra.architecture@gmail.com</a>
          </div>
          <div className={`a2 ${color}`}>
            <a className={colora} href="tel:+34697286914">+34 697 286 914</a>
          </div>

          <div className={`a4 ${color}`}>  <div className='div-maps'>MAPS⭷</div>
            <a className={colora} href="">
              <div>C/ Aldapa, 2 Local 4, Esquina,<br /> C. de Matilde Hernández,<br /> 28025, Madrid</div></a>
          </div>    <div className={`a3 ${color}`}>
            <a className={`red ${colora}`} href="">Instagram </a><a href="" className='span-footer'><img src="images/insta.png" alt="" /></a> <a className={`red ${colora}`} href="">Linkedin</a><a className='span-footer' href=""><img src="images/linkedin.png" alt="" /></a ><a className={`red ${colora}`} href="">Spotify</a><a className='span-footer' href=""><img src="images/spotify.png" alt="" /></a>
          </div>
      
        </div>
      </div>
    <div className='footer-img-none'>
            <img className='img-fluid' src="images/footer2.png" alt="" />
          </div>
    </footer>
  )
}

export default Footer
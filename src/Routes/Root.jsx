// Root.js
import React, { useState, useEffect } from 'react';
import Favorites from '../Components/Favorites/Favorites';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import Nav3 from '../Components/Nav3/Nav3';
import WorkMobile from '../Components/WorkMobile/WorkMobile';
import CallActionWork from '../Components/CallActionWork/CallActionWork';
import FavoritesMobile from '../Components/FavoritesMobile/FavoritesMobile';
import Preloader from '../Components/Preloader/Preloader';
import Slider from '../Components/Slider/Slider';
import SliderMobile from '../Components/SliderMobile/SliderMobile';
import { GifsProvider } from '../../Context/Context';

const Root = () => {
  const [isWhatOpen, setIsWhatOpen] = useState(false);
  // const [preloaderVisible, setPreloaderVisible] = useState(true);

  // // Función para ocultar el preloader después de 3 segundos
  // const hidePreloader = () => {
  //   setPreloaderVisible(false);
  //   window.scrollTo(0, 0);
  // };

  // useEffect(() => {
  //   // Ocultar el preloader después de 3 segundos
  //   const hidePreloaderTimeout = setTimeout(hidePreloader, 3000);

  //   // Limpieza del temporizador al desmontar el componente
  //   return () => {
  //     clearTimeout(hidePreloaderTimeout);
  //   };
  // }, []);

  return (
    <>   <Preloader />
      <GifsProvider />
   
      <Nav
        mitad="mitad"
        nav="top-left-button"
        img="images/logo-white.png"
        work="fixed"
        about="fixed"
        more="fixed"
        customClass={'hidden'}
        blend='blend'
      />
      <Nav3 isWhatOpen={isWhatOpen} setIsWhatOpen={setIsWhatOpen} burguer='images/burguer-white.png' to='#contact' />
      <div className="desktop-only">
        <Slider />
        <Favorites />
      </div>
      <div className="mobile-only">
        <SliderMobile />
        <FavoritesMobile />
        <CallActionWork />
        <WorkMobile />
      </div>
      <Footer background='background-home' color='background-home' logo='images/logo-footer.png' contact='contact' />
    </>
  );
};

export default Root;

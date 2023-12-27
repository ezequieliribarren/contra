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

const Root = () => {
  const [isWhatOpen, setIsWhatOpen] = useState(false);
  const [preloaderVisible, setPreloaderVisible] = useState(true);

  useEffect(() => {
    // Scroll al principio de la página después de 100 ms
    const scrollToTop = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    // Ocultar el preloader después de 150 ms
    const hidePreloader = setTimeout(() => {
      setPreloaderVisible(false);
    }, 3000);

    // Limpieza de los temporizadores al desmontar el componente
    return () => {
      clearTimeout(scrollToTop);
      clearTimeout(hidePreloader);
    };
  }, []);

  return (
    <>
      <Preloader visible={preloaderVisible} onLoaded={() => window.scrollTo(0, 0)} />
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

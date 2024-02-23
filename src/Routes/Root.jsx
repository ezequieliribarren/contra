import React, { useState, useEffect } from 'react';
import Favorites from '../Components/Favorites/Favorites';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import Nav3 from '../Components/Nav3/Nav3';
import WorkMobile from '../Components/WorkMobile/WorkMobile';
import CallActionWork from '../Components/CallActionWork/CallActionWork';
import FavoritesMobile from '../Components/FavoritesMobile/FavoritesMobile';
import Slider from '../Components/Slider/Slider';
import SliderMobile from '../Components/SliderMobile/SliderMobile';
import { GifsProvider } from '../../Context/Context';

const Root = () => {
  const [isWhatOpen, setIsWhatOpen] = useState(false);

  return (
    <>

      <GifsProvider />

      <Nav
        nav="top-left-button"
        work="fixed"
        about="fixed"
        more="fixed"
        customClass={'hidden'}
      />
      <Nav3 isWhatOpen={isWhatOpen} nav="top-left-button" mitad='mitad' fixed='fixed' img='images/logo-white.png' setIsWhatOpen={setIsWhatOpen} burguer='images/burguer-white.png' to='#contact' />
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
      <Footer background='background-home' color='background-home' colora='white' logo='images/logo-footer.png' contact='contact' />


    </>
  );
};

export default Root;
import { useState, useEffect } from 'react';
import Favorites from '../Components/Favorites/Favorites';
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer';
import Nav3 from '../Components/Nav3/Nav3';
import Slider from '../Components/Slider/Slider';
import WorkMobile from '../Components/WorkMobile/WorkMobile';
import CallActionWork from '../Components/CallActionWork/CallActionWork';
import SliderMobile from '../Components/SliderMobile/SliderMobile';
import Cursor from '../Components/Cursor/Cursor';
import FavoritesMobile from '../Components/FavoritesMobile/FavoritesMobile';
import PreLoader from '../Components/Preloader/Preloader';

const Root = () => {
  const [isWhatOpen, setIsWhatOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
    <PreLoader/>
      <Cursor />
      <Nav mitad='mitad' nav='top-left-button' img='images/logo-white.png' work='fixed' about='fixed' more='fixed' customClass={'hidden'} />
      <Nav3 isWhatOpen={isWhatOpen} setIsWhatOpen={setIsWhatOpen} burguer='images/burguer-white.png' to='#contact'/>
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
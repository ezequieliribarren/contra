import { useState, useEffect } from 'react';
import Favorites from '../Components/Favorites/Favorites';
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer';
import Nav3 from '../Components/Nav3/Nav3';
import Slider from '../Components/Slider/Slider';
import WorkMobile from '../Components/WorkMobile/WorkMobile';
import CallActionWork from '../Components/CallActionWork/CallActionWork';
import SliderMobile from '../Components/SliderMobile/SliderMobile';
import FavoritesMobile from '../Components/FavoritesMobile/FavoritesMobile';
import PreLoader from '../Components/Preloader/Preloader';
import { motion } from 'framer-motion';

const Root = () => {
  const [isWhatOpen, setIsWhatOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  const [cursorPosition, setCursorPosition] = useState('middle');

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <PreLoader />
      <Nav
        mitad="mitad"
        nav="top-left-button"
        img="images/logo-white.png"
        work="fixed"
        about="fixed"
        more="fixed"
        customClass={'hidden'}
        blend='blend'
        cursorPosition={cursorPosition}
        setCursorPosition={setCursorPosition}
      />
      <Nav3 isWhatOpen={isWhatOpen} setIsWhatOpen={setIsWhatOpen} burguer='images/burguer-white.png' to='#contact' />
      <div className="desktop-only">
        <Slider />
        <Favorites cursorPosition={cursorPosition} setCursorPosition={setCursorPosition} />
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

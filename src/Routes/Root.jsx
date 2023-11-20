import { useState, useEffect } from 'react';
import Favorites from '../Components/Favorites/Favorites';
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer';
import Nav3 from '../Components/Nav3/Nav3';
import Slider from '../Components/Slider/Slider';

const Root = () => {
  const [isWhatOpen, setIsWhatOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav mitad='mitad' nav='top-left-button' img='images/logo-white.png' work='fixed' about='fixed' more='fixed'  />
      <Nav3 isWhatOpen={isWhatOpen} setIsWhatOpen={setIsWhatOpen} />
      <Slider />
      <Favorites />
      <Footer background='background-home' color='background-home' logo='images/logo-footer.png' />
    </>
  );
};

export default Root;
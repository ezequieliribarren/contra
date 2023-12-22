import { useState, useEffect, lazy, Suspense } from 'react';
import Favorites from '../Components/Favorites/Favorites';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import Nav3 from '../Components/Nav3/Nav3';
import WorkMobile from '../Components/WorkMobile/WorkMobile';
import CallActionWork from '../Components/CallActionWork/CallActionWork';
import FavoritesMobile from '../Components/FavoritesMobile/FavoritesMobile';
import Preloader from '../Components/Preloader/Preloader';

// Lazy load Slider component
const Slider = lazy(() => import('../Components/Slider/Slider'));
const SliderMobile = lazy(() => import('../Components/SliderMobile/SliderMobile'));

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
      <Suspense fallback={<Preloader />}>
        <Slider />
      </Suspense>
        <Favorites cursorPosition={cursorPosition} setCursorPosition={setCursorPosition} />
      </div>
      <div className="mobile-only">
        <Suspense fallback={<Preloader />}>
        <SliderMobile />
        </Suspense>
        <FavoritesMobile />
        <CallActionWork />
        <WorkMobile />
      </div>
      <Footer background='background-home' color='background-home' logo='images/logo-footer.png' contact='contact' />
    </>
  );
};

export default Root;

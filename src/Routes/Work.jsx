import { useState, useEffect } from 'react';
import Projects from '../Components/Projects/Projects';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import Nav3 from '../Components/Nav3/Nav3';
import WorkMobile from '../Components/WorkMobile/WorkMobile';


const Work = () => {
  const [isWhatOpen, setIsWhatOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <main className='work'>
      <Nav nav='nav-black' mitad='mitad-black' img='images/logo-black.png' work='orange fixed' more='black fixed' about='black fixed' />
      <Nav3 isWhatOpen={isWhatOpen} setIsWhatOpen={setIsWhatOpen} burguer='images/burguer-white.png' to='#contact-work' />
      <div className="desktop-only-work">
        <Projects />
      </div>
      <div className="mobile-only-work">
        <WorkMobile />
      </div>
      <Footer background='background-work' color='background-work' colora='black' logo='images/logo-footer-work.png' contact='contact-work' none='none' padding='padding-top' />
    </main>
  );
};

export default Work;
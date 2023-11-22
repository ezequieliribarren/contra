import { useState, useEffect } from 'react';
import Projects from '../Components/Projects/Projects';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import Nav3 from '../Components/Nav3/Nav3';


const Work = () => {
  const [isWhatOpen, setIsWhatOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='work'>
      <Nav nav='nav-black' mitad='mitad-black' img='images/logo-black.png' work='orange fixed' more='black fixed' about='black fixed' />
      <Nav3 isWhatOpen={isWhatOpen} setIsWhatOpen={setIsWhatOpen} />
      <Projects />
      <Footer background='background-work' color='background-work' colora='black' logo='images/logo-footer-work.png'/>
    </main>
  );
};

export default Work;
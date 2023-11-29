import { useState, useEffect } from 'react';
import Nav from '../Components/Nav/Nav'
import MoreSwitch from '../Components/MoreSwitch/MoreSwitch'
import Footer from '../Components/Footer/Footer'
import Nav3 from '../Components/Nav3/Nav3';
import Cursor from '../Components/Cursor/Cursor';

const More = () => {
  const [isWhatOpen, setIsWhatOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>        
    <Nav3 isWhatOpen={isWhatOpen} setIsWhatOpen={setIsWhatOpen}  burguer='images/burguer.png' to='#contact-more' />
      <main>
        <Cursor/>
        <Nav mitad='mitad-black' nav='nav-black' more='orange' work='fixed' about='fixed'/>
        <MoreSwitch/>
      </main>
      <Footer background='blue' color='blue' logo='images/logo-footer.png' contact='contact-more'  />
    </>
  )
}

export default More
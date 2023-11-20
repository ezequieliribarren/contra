import { useState, useEffect } from 'react';
import Nav from '../Components/Nav/Nav'
import MoreSwitch from '../Components/MoreSwitch/MoreSwitch'
import Footer from '../Components/Footer/Footer'
import Nav3 from '../Components/Nav3/Nav3';

const More = () => {
  const [isWhatOpen, setIsWhatOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <Nav mitad='mitad-black' nav='nav-black' more='orange' work='fixed' about='fixed'/>
        <Nav3 isWhatOpen={isWhatOpen} setIsWhatOpen={setIsWhatOpen} />
        <MoreSwitch/>
      </main>
      <Footer background='blue' color='blue' logo='images/logo-footer.png' />
    </>
  )
}

export default More
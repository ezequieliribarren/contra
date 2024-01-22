import { useState, useEffect } from 'react';
import Nav from '../Components/Nav/Nav'
import MoreSwitch from '../Components/MoreSwitch/MoreSwitch'
import Footer from '../Components/Footer/Footer'
import Nav3 from '../Components/Nav3/Nav3';


const More = () => {
  const [isWhatOpen, setIsWhatOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
  
  return (
    <>        
    <Nav3 isWhatOpen={isWhatOpen} setIsWhatOpen={setIsWhatOpen}  burguer='images/burguer.png' to='#contact-more' />
      <main>
        <Nav mitad='mitad' nav='top-left-button' more='orange blend-none' work='fixed' about='fixed'/>
        <MoreSwitch/>
      </main>
      <Footer background='blue' color='blue' colora='white' logo='images/logo-footer.png' contact='contact-more' none='none' padding='padding-top'/>
    </>
  )
}

export default More
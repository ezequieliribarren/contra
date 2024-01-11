<<<<<<< HEAD
import { useState } from 'react';
=======
import { useState, useEffect } from 'react';
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
import Nav from '../Components/Nav/Nav'
import MoreSwitch from '../Components/MoreSwitch/MoreSwitch'
import Footer from '../Components/Footer/Footer'
import Nav3 from '../Components/Nav3/Nav3';
<<<<<<< HEAD
=======
import Cursor from '../Components/Cursor/Cursor';
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23

const More = () => {
  const [isWhatOpen, setIsWhatOpen] = useState(false);

<<<<<<< HEAD
=======
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
  
  return (
    <>        
    <Nav3 isWhatOpen={isWhatOpen} setIsWhatOpen={setIsWhatOpen}  burguer='images/burguer.png' to='#contact-more' />
      <main>
        <Nav mitad='mitad-black' nav='nav-black' more='orange' work='fixed' about='fixed'/>
        <Nav3 isWhatOpen={isWhatOpen} setIsWhatOpen={setIsWhatOpen} />
        <MoreSwitch/>
      </main>
<<<<<<< HEAD
      <Footer background='blue' color='blue' logo='images/logo-footer.png' />
=======
      <Footer background='blue' color='blue' logo='images/logo-footer.png' contact='contact-more' none='none' padding='padding-top'/>
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
    </>
  )
}

export default More
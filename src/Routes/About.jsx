<<<<<<< HEAD
import { useState } from 'react';
=======
import { useState, useEffect } from 'react';
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
import AboutDescription from '../Components/AboutDescription/AboutDescription'
import Nav from '../Components/Nav/Nav'
import Equipo from '../Components/Equipo/Equipo'
import HanTrabajadoAqui from '../Components/HanTrabajadoAqui/HanTrabajadoAqui'
import Marcas from '../Components/Marcas/Marcas'
import Footer from '../Components/Footer/Footer'
import Nav3 from '../Components/Nav3/Nav3';

const About = () => {
  const [isWhatOpen, setIsWhatOpen] = useState(false);
<<<<<<< HEAD
  return (
    <main className='about'>
      <Nav about='orange' mitad='mitad-black' nav='nav-black' work='black fixed' more='black fixed' />
      <Nav3 isWhatOpen={isWhatOpen} setIsWhatOpen={setIsWhatOpen} />
=======

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <main className='about'>
      <Nav about='orange fixed' mitad='mitad-black' nav='nav-black' work='black fixed' more='black fixed' />
      <Nav3 isWhatOpen={isWhatOpen} setIsWhatOpen={setIsWhatOpen}  burguer='images/burguer.png' to='#contact-about' />
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
      <AboutDescription />
      <Equipo  />
      <HanTrabajadoAqui />
      <Marcas/>
<<<<<<< HEAD
      <Footer background='background-about' color='background-about' logo='images/logo-footer.png'/>
=======
      <Footer background='background-about' color='background-about' logo='images/logo-footer.png' contact='contact-about' none='none' padding='padding-top'/>
>>>>>>> d4a0c314d5728a87b15df62211e8ca3de37b5f23
    </main>
  )
}

export default About
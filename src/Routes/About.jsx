import { useState, useEffect } from 'react';
import AboutDescription from '../Components/AboutDescription/AboutDescription'
import Nav from '../Components/Nav/Nav'
import Equipo from '../Components/Equipo/Equipo'
import HanTrabajadoAqui from '../Components/HanTrabajadoAqui/HanTrabajadoAqui'
import Marcas from '../Components/Marcas/Marcas'
import Footer from '../Components/Footer/Footer'
import Nav3 from '../Components/Nav3/Nav3';

const About = () => {
  const [isWhatOpen, setIsWhatOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <main className='about'>
      <Nav about='orange' mitad='mitad-black' nav='nav-black' work='black fixed' more='black fixed' />
      <Nav3 isWhatOpen={isWhatOpen} setIsWhatOpen={setIsWhatOpen}  burguer='images/burguer.png' to='#contact-about' />
      <AboutDescription />
      <Equipo  />
      <HanTrabajadoAqui />
      <Marcas/>
      <Footer background='background-about' color='background-about' logo='images/logo-footer.png' contact='contact-about' none='none' padding='padding-top'/>
    </main>
  )
}

export default About
import React from 'react'
import AboutDescription from '../Components/AboutDescription/AboutDescription'
import Nav from '../Components/Nav/Nav'
import Equipo from '../Components/Equipo/Equipo'
import HanTrabajadoAqui from '../Components/HanTrabajadoAqui/HanTrabajadoAqui'
import Marcas from '../Components/Marcas/Marcas'
// import Clientes from '../Components/Clientes/Clientes'

const About = () => {
  return (
    <main className='about'>
      <Nav about='orange' mitad='mitad-black' nav='nav-black' work='black fixed' more='black fixed' />
      <AboutDescription />
      <Equipo  />
      <HanTrabajadoAqui />
      {/* <Clientes/> */}
      <Marcas/>
    </main>
  )
}

export default About
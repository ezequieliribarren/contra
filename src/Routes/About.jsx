import React from 'react'
import AboutDescription from '../Components/AboutDescription/AboutDescription'
import Nav from '../Components/Nav/Nav'
import Equipo from '../Components/Equipo/Equipo'
import HanTrabajadoAqui from '../Components/HanTrabajadoAqui/HanTrabajadoAqui'
import Clientes from '../Components/Clientes/Clientes'

const About = () => {
  return (
    <main className='about container-scroll'>
      <Nav about='orange' mitad='mitad-black' nav='nav-black' work='black' more='black' />
      <AboutDescription className='section'/>
      <Equipo className='section' />
      <HanTrabajadoAqui className='section' />
      <Clientes/>
    </main>
  )
}

export default About
import React from 'react'
import AboutDescription from '../Components/AboutDescription/AboutDescription'
import Nav from '../Components/Nav/Nav'
import Equipo from '../Components/Equipo/Equipo'

const About = () => {
  return (
    <main className='about'>
              <Nav black='black' img='images/logo-black.png' about='orange' />
        <AboutDescription/>
        <Equipo/>
    </main>
  )
}

export default About
// import React, { useState, useEffect } from 'react';
import Projects from '../Components/Projects/Projects';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';



const Work = () => {


  return (
    <main className='work'>
      <Nav nav='nav-black' img='images/logo-black.png' work='orange fixed' more='black fixed' about='black fixed' />
      <Projects />
      <Footer background='background-work' color='background-work' colora='black' logo='images/logo-footer-work.png'/>
    </main>
  );
};

export default Work;
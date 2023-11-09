// import React, { useState, useEffect } from 'react';
import Projects from '../Components/Projects/Projects';
import Nav from '../Components/Nav/Nav';



const Work = () => {


  return (
    <main className='work'>
      <Nav nav='nav-black' img='images/logo-black.png' work='orange fixed' more='black fixed' about='black fixed' />
      <Projects />
    </main>
  );
};

export default Work;
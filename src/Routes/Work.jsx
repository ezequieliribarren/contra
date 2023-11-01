// import React, { useState, useEffect } from 'react';
import Projects from '../Components/Projects/Projects';
import Nav from '../Components/Nav/Nav';



const Work = () => {


  return (
    <main className='work'>
      <Nav black='black' img='images/logo-black.png' work='orange' />
      <Projects />
    </main>
  );
};

export default Work;
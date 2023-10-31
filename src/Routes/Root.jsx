import React from 'react';
import Favorites from '../Components/Favorites/Favorites';
import Slider from '../Components/Slider/Slider';
import Nav from '../Components/Nav/Nav'


const Root = () => {


  return (
    <>
  <Nav img='images/logo.png'/>
    <Slider/>
   <Favorites/>
    </>
  );
};

export default Root;

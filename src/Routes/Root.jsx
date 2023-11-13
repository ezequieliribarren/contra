import React from 'react';
import Favorites from '../Components/Favorites/Favorites';
import Slider from '../Components/Slider/Slider';
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer';


const Root = () => {


  return (
    <>
  <Nav mitad='mitad' nav='top-left-button' img='images/logo.png' />
    <Slider />
   <Favorites/>
   <Footer background='background-home' color='background-home' logo='images/logo-footer'/>
    </>
  );
};

export default Root;

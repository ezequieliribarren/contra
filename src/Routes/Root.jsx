import React from 'react';
import Favorites from '../Components/Favorites/Favorites';
import Slider from '../Components/Slider/Slider';
import Nav from '../Components/Nav/Nav'

// import Footer from '../Components/Footer/Footer';


const Root = () => {


  return (
    <>
  <Nav img='images/logo.png'/>
    <Slider/>
   <Favorites/>
   {/* <Footer/> */}
    </>
  );
};

export default Root;

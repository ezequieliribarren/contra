import React from 'react'
import Nav from '../Components/Nav/Nav'
import MoreSwitch from '../Components/MoreSwitch/MoreSwitch'
import Footer from '../Components/Footer/Footer'

const More = () => {


  
  return (
    <>
      <main>
        <Nav mitad='mitad-black' nav='nav-black' more='orange' work='fixed' about='fixed'/>
        <MoreSwitch/>
      </main>
      <Footer background='blue' color='blue' />
    </>
  )
}

export default More
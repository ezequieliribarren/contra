import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Nav = ({black, img, work, more, about}) => {



  return (
    <>
 <Link to='/'><h1 className="top-left-button"><img src={img} alt="" /></h1></Link>
      <Link to='/work'>
      <a className={`top-right-button ${black} ${work}`} >Work</a>
      </Link>
      <Link to='/more'>
      <a className={`bottom-left-button ${black} ${more}`} >More</a>
      </Link>
      <Link to='/about'>
      <a className={`bottom-right-button ${black} ${about}`} >About</a>
      </Link>
    </>
  )
}

export default Nav
import React from 'react'
import Nav from './Nav';
import Logo from '../assets/images/logo.jpg'

const Header = () => {
  return (
    <header>
        <div className='header-container'>
            <img src={Logo} alt="logo" className='logo'/>
            <Nav />
        </div>
    </header>

  )
}

export default Header
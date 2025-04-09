import React from 'react'
import Logo from "../assets/images/small-logo.png";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div>
          <a href="/">
            <img src={Logo} alt="" className='footer-logo'/>
          </a>
        </div>
        <div className='footer-navigation'>
          <h4>Navigation</h4>
          <ul className='footer-navigation-list'>
            <li><a href="/">Home</a></li>
            <li><a href="#specials">Specials</a></li>
            <li><a href="/reservation">Reservations</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        <div className='footer-contact'>
          <h4>Contact</h4>
          <ul className='footer-contact-list'>
            <li>123 Via degli Agrumi</li>
            <li>+39 02 1234 5678</li>
            <li>reservations@littlelemon.com</li>
          </ul>
        </div>

        <div className='footer-socials'>
          <h4>Socials</h4>
          <ul className='footer-socials-list'>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Linkedin</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
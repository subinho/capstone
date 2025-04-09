import React from 'react'

const Nav = () => {
  return (
    <nav className='nav'>
        <ul className='nav-list'>
            <li><a href="/">Home</a></li>
            <li><a href="#specials">Specials</a></li>
            <li><a href="/reservation">Reservations</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </nav>
  )
}

export default Nav
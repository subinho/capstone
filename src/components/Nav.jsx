import React from "react"
import { HashLink } from "react-router-hash-link";

const Nav = ({ isOpen, toggleClose }) => {
  return (
    <nav className={`nav ${isOpen ? "nav-mobile" : ""}`}>
        <ul className="nav-list">
            <li><HashLink smooth to="/" onClick={toggleClose}>Home</HashLink></li>
            <li><HashLink smooth to="/#specials" onClick={toggleClose}>Specials</HashLink></li>
            <li><HashLink smooth to="/reservation" onClick={toggleClose}>Reservations</HashLink></li>
            <li><HashLink smooth to="/#about" onClick={toggleClose}>About</HashLink></li>
        </ul>
    </nav>
  )
}

export default Nav
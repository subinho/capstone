import React from "react"
import Nav from "./Nav";
import Logo from "../assets/images/logo.jpg"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <div className="header-container">
          <Link to="/">
            <img src={Logo} alt="logo" className="logo"/>
          </Link>
            <Nav />
        </div>
    </header>

  )
}

export default Header
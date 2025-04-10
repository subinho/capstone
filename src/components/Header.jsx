import React, { useState} from "react"
import Nav from "./Nav";
import { LogoImg } from "../assets/images"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  }

  return (
    <header>
        <div className="header-container">
          <Link to="/">
            <img src={LogoImg} alt="logo" className="logo"/>
          </Link>
          <button type="button" className="menu-toggle" onClick={handleMenu}>{!toggleMenu ? <FontAwesomeIcon icon={faBars} size="2x" /> : <FontAwesomeIcon icon={faXmark} size="2x" />}</button>
            <Nav isOpen={toggleMenu} toggleClose={handleMenu}/>
        </div>
    </header>

  )
}

export default Header
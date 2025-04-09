import React from 'react'
import { Link } from "react-router-dom";
import HeroImg from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-container'>
            <div className='hero-left'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Savor fresh, vibrant flavors in every bite—where simple ingredients shine</p>
                <Link to="/reservation" aria-label="On click">Reserve table</Link>
            </div>
            <div className='hero-right'>
                <img src={HeroImg} alt="A server serving a food" />
            </div>
        </div>
    </div>
  )
}

export default Hero
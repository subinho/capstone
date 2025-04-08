import React from 'react'
import { Link } from "react-router-dom";
import SaladImg from "../assets/images/greek-salad.jpg";

const Specials = () => {
  return (
    <section className='specials-container'>
        <h2 className='specials-title'>Specials</h2>
        <div className='specials-dish'>
            <div className='specials-item'>
                <img src={SaladImg} alt="A greek salad" />
                <div className='specials-info'>
                    <h3>Greek Salad</h3>
                    <span>12.99$</span>
                    <p>A refreshing mix of tomatoes, cucumbers, bell peppers, red onions, Kalamata olives, and creamy feta, tossed in olive oil, oregano, and lemon juice. Served with warm pita bread.</p>
                    <Link to="#">Order delivery</Link>
                </div>
            </div>

            <div className='specials-item'>
                <img src={SaladImg} alt="A greek salad" />
                <div className='specials-info'>
                    <h3>Greek Salad</h3>
                    <span>12.99$</span>
                    <p>A refreshing mix of tomatoes, cucumbers, bell peppers, red onions, Kalamata olives, and creamy feta, tossed in olive oil, oregano, and lemon juice. Served with warm pita bread.</p>
                    <Link to="#">Order delivery</Link>
                </div>
            </div>

            <div className='specials-item'>
                <img src={SaladImg} alt="A greek salad" />
                <div className='specials-info'>
                    <h3>Greek Salad</h3>
                    <span>12.99$</span>
                    <p>A refreshing mix of tomatoes, cucumbers, bell peppers, red onions, Kalamata olives, and creamy feta, tossed in olive oil, oregano, and lemon juice. Served with warm pita bread.</p>
                    <Link to="#">Order delivery</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Specials
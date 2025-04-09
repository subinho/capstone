import React from 'react'
import { Link } from "react-router-dom";
import SaladImg from "../assets/images/greek-salad.jpg";

const Specials = (props) => {
  return (
    <section className='specials-container' id="specials">
        <h2 className='specials-title'>Specials</h2>
        <div className='specials-dish'>
                {props.menu.map(item => (
                    <div className='specials-item' key={item.id}>
                        <img src={item.img} alt={item.alt} />
                        <div className='specials-info'>
                            <div className="specials-top">
                                <h3>{item.title}</h3>
                                <span>${item.price}</span>
                            </div>
                            <p>{item.description}</p>
                            <Link to="#">Order delivery</Link>
                        </div>
                    </div>
                ))}

        </div>
    </section>
  )
}

export default Specials
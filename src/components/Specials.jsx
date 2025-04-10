import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBicycle } from "@fortawesome/free-solid-svg-icons";

const Specials = (props) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(!showPopup)

        setTimeout(() => {
            setShowPopup(false);
        }, 2000)
    }
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
                            <button type="button" onClick={handleClick}>Order delivery <FontAwesomeIcon icon={faBicycle} size="md"/></button>
                            {showPopup && (
                                <div className="specials-popup">
                                    Order placed!
                                </div>
                            )}
                        </div>
                    </div>
                ))}

        </div>
    </section>
  )
}

export default Specials
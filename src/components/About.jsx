import React from 'react';
import { RestaurantInsideImg, RestaurantOutsideImg } from "../assets/images";

const About = () => {
  return (
    <section className='about-container' id="about">
        <div className="about">

            <div className='about-info'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>
                At Little Lemon, we celebrate Italy’s culinary soul through dishes crafted with passion and fresh, local ingredients. Savor golden bruschetta topped with sun-ripened tomatoes, al dente penne pasta in rich herb-infused sauces, and crisp Greek salads dotted with briny olives and creamy feta—a Mediterranean twist on our Italian roots. Every bite tells a story of tradition and shared joy.
                <br />
                <br />
                From handmade pastas to wood-fired classics, our trattoria is a gathering place where meals bridge cultures and generations. Whether you’re sharing bruschetta drizzled with olive oil or refreshing your palate with zesty salads, each dish invites you to linger and connect. Benvenuti—welcome to our table, where Italy meets the Mediterranean in every bite.
                </p>
            </div>

            <div className='about-images'>
                <img src={RestaurantInsideImg} alt="" />
                <img src={RestaurantOutsideImg} alt="" />
            </div>
        </div>
    </section>
  )
}

export default About
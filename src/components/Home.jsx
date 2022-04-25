import React from 'react'
import HeroImage from '../images/hero_img.png'
import { menuItem } from '../data'
import { Link } from "react-router-dom"

// components
import About from './About'
import Products from './Products'
import Contacts from "./contact"


const Home = () => {
  return (
    <div className="container">
      <section className="section_home">
        <div className="section_home_wrapper">
          <div className="content">
            <h1>SpiceyBite</h1>
            <p className="brand_desc">Your favorite burger bite is here</p>

            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nesciunt minus fuga doloribus ut natus quo repellendus mollitia
              minima! Esse illo illum expedita alias sint quibusdam natus
              assumenda dolor repudiandae.
            </p>
            <div className="btn_wrapper">
              <button className="btn btn_order">
                <Link to='/products'>Order</Link>
              </button>
              <button className="btn btn_contact">
                <Link to='contact'>Contact</Link>
              </button>
            </div>
          </div>

          <div className="hero_image">
            <img src={HeroImage} alt="burger" />
          </div>
        </div>
        
      </section>
      <About /> 
       <div className="menu_items_wrapper">
        <h1>Our Menu Items</h1>
        <p>Have a Scrumptious Meal 😋</p>
        <div className="product_section">
          {menuItem.map((items, index) => {
            return <Products key={index} {...items} />
          })}
        </div>
      </div>
      <Contacts />
    </div>
  )
}

export default Home;

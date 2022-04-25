import React from 'react'
import { menuItem } from '../data'

// components
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Products from './Products'
import Contacts from './contact'
import Footer from './footer'

// React router dom component
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import "../css/App.css"
// import "../css/all.min.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path='/' ></Route> */}
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />} />
          <Route
            path="products"
            element={
              <div className="menu_items_wrapper">
                <h1>Our Menu Items</h1>
                <p>Have a Scrumptious Meal 😋</p>
                <div className="product_section">
                  {menuItem.map((items, index) => {
                    return <Products key={index} {...items} />
                  })}
                </div>
              </div>
            }
          />
          <Route path="contact" element={<Contacts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

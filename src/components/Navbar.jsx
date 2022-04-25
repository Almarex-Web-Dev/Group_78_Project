import React from 'react'
import { Link } from 'react-router-dom'
// import { useEffect } from 'react'

const Navbar = () => {

  // useEffect(() => {
  //   const btnBars = document.querySelector('.btn_bars')
  //   const btnTimes = document.querySelector('.btn_bars')
  //   const menuIcon = document.querySelector('.menu_icons')

  //   const navLinksContainer = document.querySelector('.nav_links_wrapper')
  //   const LinksContainer = document.querySelector('.links_wrapper')

  //   function navbarToggle() {
  //     const navLinksContainerHeight = navLinksContainer.getBoundingClientRect()
  //       .height
  //     const LinksContainerHeight = LinksContainer.getBoundingClientRect().height

  //     if (navLinksContainerHeight === 0) {
  //       navLinksContainer.style.height = `${LinksContainerHeight}px`
  //       btnBars.style.display = 'none'
  //       btnTimes.style.display = 'block'
  //     } else if (navLinksContainerHeight === LinksContainerHeight) {
  //       navLinksContainerHeight.style.height = 0
  //       btnTimes.style.display = 'none'
  //       btnBars.style.display = 'block'
  //     }
  //   }
  //   menuIcon.addEventListener('click', navbarToggle())

  //   return () => {
  //     menuIcon.removeEventListener('click', navbarToggle)
  //   }
  // }, [])

  return (
    <>
      <header>
        <div className="navbar_wrapper">
          <div className="top_nav">
            <h1 className="logo">
              Spicey<span>Bite</span>
            </h1>
            <div className="menu_icons">
              <span className="toggle_btn btn_bars">
                <i className="fas fa-bars"></i>
              </span>
              <span className="toggle_btn btn_times">
                <i className="fas fa-times"></i>
              </span>
            </div>
          </div>
          <nav className="nav_links_wrapper">
            <div className="nav_links">
              <ul className="links_container">
                <li>
                  <Link to="/" className="links">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="links">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="links">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="links">
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar

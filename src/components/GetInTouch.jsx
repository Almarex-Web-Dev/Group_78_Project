import React from 'react'

const GetInTouch = () => {
  return (
    <div className="get_in_touch">
      <h1>Get In Touch</h1>
      <div className="social_icons_wrapper">
        <div className="icons">
          <span>
            <i className="fas fa-envelope"></i>
          </span>
          <p>group_78@gmail.com</p>
        </div>
        <div className="icons">
          <span>
            <i className="fas fa-phone"></i>
          </span>
          <p>+23490909090, +234 880 088 808</p>
        </div>
        <div className="icons">
          <span>
            <svg style={{width: "15px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 
              85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 
              128 192C128 227.3 156.7 256 192 256z" />
            </svg>
          </span>
          <p>Texas, No 457, USA</p>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch

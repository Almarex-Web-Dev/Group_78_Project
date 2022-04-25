import React from 'react'
import GetInTouch from './GetInTouch'

const Contact = () => {
  return (
    <section className="section_contact">
    
      <div className="contact_header">
        <h1>Our Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          maiores, id veniam soluta explicabo autem natus cum nostrum voluptates
          laboriosam.
        </p>
      </div>
      <div className="form_wrapper">
        <div class="contact-form-wrapper">
          <form action="/" method="post" data-aos="fade-in">
            <input type="text" name="yourName" placeholder="name" />
            <input
              type="email"
              name="yourEmail"
              placeholder="email"
              id="email"
            />
            <br />
            <textarea
              name="yourMessage"
              placeholder="Send A Message"
            ></textarea>
            <br />
            <input type="submit" value="Send A Message" />
          </form>
          <GetInTouch />
        </div>
      </div>
    </section>
  )
}

export default Contact

/* <form action="">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='group_78@gmail.com'/>
          <textarea name="text" id="inptText" placeholder='Your Message'></textarea>
          <button type='submit' value="">Send A Message</button>
        </form> */

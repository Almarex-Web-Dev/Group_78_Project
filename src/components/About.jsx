import React from 'react'
import chef from "../images/chef.jpg";

const About = () => {
  return (
    <section className='section_about'>
      <h1>About SpiceyBite</h1>
      <span>How we come into existence</span>
        <div className="about_content">

          <div className="chef_img">
            <img src={chef} alt="The Chef" />
            <p>The co-Founder</p>
            <p>SH React Group_78</p>
          </div>

          <div className="about_description">
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Sapiente fuga quasi, modi mollitia culpa optio repudiandae 
                magnam hic illum commodi.

                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Sapiente libero distinctio nostrum, exercitationem sint 
                aut neque doloremque maiores accusantium unde?
            </p>
             <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Sapiente libero distinctio nostrum, exercitationem sint 
                aut neque doloremque maiores accusantium unde?
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Sapiente fuga quasi, modi mollitia culpa optio repudiandae 
                magnam hic illum commodi.

                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Sapiente libero distinctio nostrum, exercitationem sint 
                aut neque doloremque maiores accusantium unde?
            </p>
          </div>
        </div>
    </section>
  )
}

export default About
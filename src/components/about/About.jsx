import React from 'react'
//Below I imported the CSS file with all the styles for this part of the website.
import about from './about.css'
//Below I imported all the react-icons I need for this section of the website.
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'
//Below I imported the image I needed for this part of my website.
import ME from '../../assets/me-about.jpg'

const About = () => {
  //This is for rendering the about section of my site.
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      {/* Below I made multiple div boxes so that I can style my image nicely and easier with setting specific styles to classnames in CSS */}
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            {/* Below is the first acheivement card in the about cards section */}
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1.5 Years Working</small>
            </article>
            {/* Below is the second acheivement card in the about cards section */}
            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </article>
            {/* Below is the third acheivement card in the about cards section */}
            <article className="about__card">
              <VscFolderActive className="about__icon"/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          {/* The code below is a random generated Lorem text */}
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure veniam consequuntur beatae veritatis nobis magnam rerum ex quaerat ratione quas officia iusto nesciunt, debitis consequatur aliquid. Dolores, molestiae vero. Magni.
          </p>
          {/* This anchor tags just takes you to the contact section of the website */}
          <a href="#contact" className="btn">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
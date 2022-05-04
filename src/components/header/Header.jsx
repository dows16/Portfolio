import React from 'react';
//Below I imported the CSS file with all the styles for this part of the website.
import header from './header.css';
//Below I imported the CTA.js file and HeaderSocials.js file that has components I need for this part of the website.
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
//Below I imported the image I needed for this part of my website.
import ME from '../../assets/me.png';

const Header = () => {
  //This is for rendering the header section of my site.
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dowson Cheung</h1>
        <h5 className="text-light">3D Modeler/Front-End Web Developer</h5>
        <CTA />
        <HeaderSocials />
        {/* A seperated div for the image */}
        <div className="me">
          <img src={ME} alt="A photo that's totally me" />
        </div>
        {/* Anchor tag that goes to the contact section of the page when clicked */}
        <a href="#contact" className="scroll__down">Contact Me</a>
      </div>
    </header>
  )
}

export default Header;
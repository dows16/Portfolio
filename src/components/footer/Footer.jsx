import React from 'react';
//Below I imported the CSS file with all the styles for this part of the website.
import footer from './footer.css';
//Below I imported all the react-icons I need for this section of the website.
import {FaFacebookF} from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {IoLogoTwitter} from 'react-icons/io';

const Footer = () => {
  //This is for rendering the footer section of my site.
  return (
    <footer>
      <a href="#" className="footer__logo">DOWS.INC</a>
      {/* This code is just a list of anchor tags that lead to different sections of the website once you click them. */}
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      {/* This code is more anchor tags that bring you to the websites Facebook, Instagram, and Twitter. */}
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><BsInstagram /></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
      </div>
      {/* This code is the part where I put my copyright stuff and my fake company brand name for more decorative features. */}
      <div className="footer__copyright">
        <small>&copy; DOWS.INC All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;
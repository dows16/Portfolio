import React from 'react';
//Below I imported the Resume PDF file I needed for this part of my website.
import CV from'../../assets/CV.pdf';

const CTA = () => {
  //This is for rendering the CTA section of my site.
  return (
    <div className="cta">
      {/* The first link is to download my Resume PDF file once clicked, the second one just brings you down to the contact section of the website */}
      <a href={CV} download className="btn">Download CV</a>
      <a href="#contact" className="btn">Let's Talk</a>
    </div>
  )
}

export default CTA;
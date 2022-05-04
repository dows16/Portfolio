import React from 'react';
//Below I imported the CSS file with all the styles for this part of the website.
import experience from './experience.css';
//Below I imported all the react-icons I need for this section of the website.
import {RiCheckboxCircleFill} from 'react-icons/ri';

const Experience = () => {
  //This is for rendering the experience section of my site.
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      {/* This code is for the checklist of my skills for Blender 3D Modeling */}
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>3D Modeling (Blender)</h3>
          <div className="experience__content">
            <article className="experience__details">
              <RiCheckboxCircleFill className="experience__details-icons"/>
              <div>
                <h4>Vehicles</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCheckboxCircleFill className="experience__details-icons"/>
              <div>
                <h4>Aeroplanes</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCheckboxCircleFill className="experience__details-icons"/>
              <div>          
                <h4>Architecture</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCheckboxCircleFill className="experience__details-icons"/>
              <div>
                <h4>Boats</h4>
                <small className="text-light">Intermediate</small>
              </div>  
            </article>
            <article className="experience__details">
              <RiCheckboxCircleFill className="experience__details-icons"/>
              <div>
                <h4>Assets</h4>
                <small className="text-light">Intermediate</small>
              </div>  
            </article>
            <article className="experience__details">
              <RiCheckboxCircleFill className="experience__details-icons"/>
              <div>
                <h4>Accessories</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* ============== END OF 3D MODELING ============== */}
        {/* This code is for the checklist of my skills for front-end website development */}
        <div className="experience__backend">
          <h3>Frontend Web Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <RiCheckboxCircleFill className="experience__details-icons"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCheckboxCircleFill className="experience__details-icons"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCheckboxCircleFill className="experience__details-icons"/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCheckboxCircleFill className="experience__details-icons"/>
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <RiCheckboxCircleFill className="experience__details-icons"/>
              <div>
                <h4>ReactJSX</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;
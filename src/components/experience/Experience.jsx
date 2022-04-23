import React from 'react'
import experience from './experience.css'
import {RiCheckboxCircleFill} from 'react-icons/ri'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>3D Modeling (Blender)</h3>
          <div className="experience__content">
            <article className="experience__details">
              <RiCheckboxCircleFill />
              <h4>Vehicles</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <RiCheckboxCircleFill />
              <h4>Aeroplanes</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <RiCheckboxCircleFill />
              <h4>Architecture</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <RiCheckboxCircleFill />
              <h4>Boats</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <RiCheckboxCircleFill />
              <h4>Assets</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <RiCheckboxCircleFill />
              <h4>Accessories</h4>
              <small className="text-light">Beginner</small>
            </article>
          </div>
        </div>
        {/* ============== END OF FRONTEND ============== */}
        <div className="experience__backend">
          <h3>Frontend Web Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <RiCheckboxCircleFill />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <RiCheckboxCircleFill />
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <RiCheckboxCircleFill />
              <h4>Javascript</h4>
              <small className="text-light">Beginner</small>
            </article>
            <article className="experience__details">
              <RiCheckboxCircleFill />
              <h4>ReactJS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <RiCheckboxCircleFill />
              <h4>ReactJSX</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
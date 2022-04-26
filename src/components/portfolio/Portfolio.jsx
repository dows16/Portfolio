import React from 'react'
import portfolio from './portfolio.css'
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
        <img src={IMG1} alt="portfolio 1 image" />
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">

          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/dows16/web" className="btn" target="_blank">GitHub</a>
            <a href="https://web.dows16.repl.co" className="btn" target="_blank">Live Demo</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">

          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/dows16/web" className="btn" target="_blank">GitHub</a>
            <a href="https://web.dows16.repl.co" className="btn" target="_blank">Live Demo</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">

          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/dows16/web" className="btn" target="_blank">GitHub</a>
            <a href="https://web.dows16.repl.co" className="btn" target="_blank">Live Demo</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">

          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/dows16/web" className="btn" target="_blank">GitHub</a>
            <a href="https://web.dows16.repl.co" className="btn" target="_blank">Live Demo</a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">

          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/dows16/web" className="btn" target="_blank">GitHub</a>
            <a href="https://web.dows16.repl.co" className="btn" target="_blank">Live Demo</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">

          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/dows16/web" className="btn" target="_blank">GitHub</a>
            <a href="https://web.dows16.repl.co" className="btn" target="_blank">Live Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
import React from 'react';
//Below I imported the CSS file with all the styles for this part of the website.
import portfolio from './portfolio.css';
//Below I imported the images I needed for this part of my website.
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const Portfolio = () => {
  //This is for rendering the portfolio section of my site.
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {/* Code below is for the first box in the grid of my portfolio work */}
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            {/* Below is the first image for the portfolio grid */}
            <img src={IMG1} alt="portfolio image 1" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__items-cta">
              {/* Below are links to my code and a live repl demo of the product embedded into a anchor tag that looks like a button that opens the link into a new tab */}
              <a href="https://github.com/dows16/web" className="btn" target="_blank">GitHub</a>
              <a href="https://web.dows16.repl.co" className="btn" target="_blank">Live Demo</a>
            </div>
        </article>
        {/* Code below is for the second box in the grid of my portfolio work */}
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            {/* Below is the second image for the portfolio grid */}
            <img src={IMG2} alt="portfolio image 2" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__items-cta">
              {/* Below are links to my code and a live repl demo of the product embedded into a anchor tag that looks like a button that opens the link into a new tab */}
              <a href="https://github.com/dows16/web" className="btn" target="_blank">GitHub</a>
              <a href="https://web.dows16.repl.co" className="btn" target="_blank">Live Demo</a>
            </div>
        </article>
        {/* Code below is for the third box in the grid of my portfolio work */}
        <article className="portfolio__items">
          <div className="portfolio__items-image">
            {/* Below is the third image for the portfolio grid */}
            <img src={IMG3} alt="portfolio image 3" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__items-cta">
              {/* Below are links to my code and a live repl demo of the product embedded into a anchor tag that looks like a button that opens the link into a new tab */}
              <a href="https://github.com/dows16/web" className="btn" target="_blank">GitHub</a>
              <a href="https://web.dows16.repl.co" className="btn" target="_blank">Live Demo</a>
            </div>
        </article>
        <article className="portfolio__items">
          {/* Code below is for the fourth box in the grid of my portfolio work */}
          <div className="portfolio__items-image">
            {/* Below is the fourth image for the portfolio grid */}
            <img src={IMG4} alt="portfolio image 4" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__items-cta">
              {/* Below are links to my code and a live repl demo of the product embedded into a anchor tag that looks like a button that opens the link into a new tab */}
              <a href="https://github.com/dows16/web" className="btn" target="_blank">GitHub</a>
              <a href="https://web.dows16.repl.co" className="btn" target="_blank">Live Demo</a>
            </div>
        </article>
        <article className="portfolio__items">
          {/* Code below is for the fifth box in the grid of my portfolio work */}
          <div className="portfolio__items-image">
            {/* Below is the fifth image for the portfolio grid */}
            <img src={IMG5} alt="portfolio image 5" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__items-cta">
              {/* Below are links to my code and a live repl demo of the product embedded into a anchor tag that looks like a button that opens the link into a new tab */}
              <a href="https://github.com/dows16/web" className="btn" target="_blank">GitHub</a>
              <a href="https://web.dows16.repl.co" className="btn" target="_blank">Live Demo</a>
            </div>
        </article>
        <article className="portfolio__items">
          {/* Code below is for the sixth box in the grid of my portfolio work */}
          <div className="portfolio__items-image">
            {/* Below is the sixth image for the portfolio grid */}
            <img src={IMG6} alt="portfolio image 6" />
          </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__items-cta">
              {/* Below are links to my code and a live repl demo of the product embedded into a anchor tag that looks like a button that opens the link into a new tab */}
              <a href="https://github.com/dows16/web" className="btn" target="_blank">GitHub</a>
              <a href="https://web.dows16.repl.co" className="btn" target="_blank">Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;
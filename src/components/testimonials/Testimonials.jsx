import React from 'react';
//Below I imported the CSS file with all the styles for this part of the website.
import testimonials from './testimonials.css';
//Below I imported the images I need for this section of the website.
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
    //This is for rendering the testimonials section of my site.
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      {/* Below is the code for the swipe function for mobile users enabling the content to swipe side to side */}
      <Swiper className="container testimonials__container"
            //Found these modules and the code for it from SwiperJS
            modules={[Pagination]}
            //Set the space between the dots.
            spaceBetween={40}
            //Set so you can only view one slide per swipe.
            slidesPerView={1}
            //Enabled clicking so you can click the dots to swipe slides if prefered.
            pagination={{ clickable: true }}
      >
        {/* First Slide of client's review */}
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Photo of First Client" />
          </div>
          <h5 className="client__name">Tina Snow</h5>
          <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempora repellat inventore, natus amet et obcaecati molestias nisi ea unde doloremque, possimus vel! Sint explicabo, non aspernatur aliquid veniam dolore.
            </small>
        </SwiperSlide>
        {/* Second Slide of client's review */}
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Photo of Second Client" />
          </div>
          <h5 className="client__name">Shatta Wale</h5>
          <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempora repellat inventore, natus amet et obcaecati molestias nisi ea unde doloremque, possimus vel! Sint explicabo, non aspernatur aliquid veniam dolore.
            </small>
        </SwiperSlide>
        {/* Third Slide of client's review */}
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Photo of Third Client" />
          </div>
          <h5 className="client__name">Kwame Despite</h5>
          <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempora repellat inventore, natus amet et obcaecati molestias nisi ea unde doloremque, possimus vel! Sint explicabo, non aspernatur aliquid veniam dolore.
            </small>
        </SwiperSlide>
        {/* Fourth Slide of client's review */}
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Photo of Forth Client" />
          </div>
          <h5 className="client__name">Nana Ama McBrown</h5>
          <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempora repellat inventore, natus amet et obcaecati molestias nisi ea unde doloremque, possimus vel! Sint explicabo, non aspernatur aliquid veniam dolore.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials;
import React from 'react'
import contact from './contact.css'
import {MdMailOutline} from "react-icons/md"
import {FaDiscord} from "react-icons/fa"
import {RiMessengerLine} from "react-icons/ri"

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMailOutline />
            <h4>Email</h4>
            <h5>dowson2022@gmail.com</h5>
            <a href="mailto:dowson2022@gmail.com">Send an email</a>
          </article>
          <article className="contact__option">
            <FaDiscord />
            <h4>Discord</h4>
            <h5>dows#7844</h5>
            <a href="discord.com/app">Send a friend request</a>
          </article>
          {/* The link to messenger doesn't work since I don't have messenger so the one below is an example*/}
          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>dowsoncheung26</h5>
            <a href="https://m.me/dowsoncheung26">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact
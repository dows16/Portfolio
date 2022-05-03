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
          {/* The link opens up your mail app/a new email tab (gmail on your browser) and creates a draft email having it set so the receiving email is 'dowson2022@gmail.com' */}
          <article className="contact__option">
            <MdMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dowson2022@gmail.com</h5>
            <a href="mailto:dowson2022@gmail.com" target="_blank">Send an email</a>
          </article>
          {/* The link brings you to the discord website */}
          <article className="contact__option">
            <FaDiscord className="contact__option-icon" />
            <h4>Discord</h4>
            <h5>dows#7844</h5>
            <a href="https://www.discord.com/app" target="_blank">Send a friend request</a>
          </article>
          {/* The link to messenger doesn't work since I don't have messenger but it does bring you to the messenger website*/}
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>dowsoncheung26</h5>
            <a href="https://m.me/dowsoncheung26" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        {/* Below I madea a form option creating a direct email message, I also made it so input is required and there won't be any empty inputs*/}
        <form action="">
          <input type="text" name="name" placeholder="Enter your full name" required />
          <input type="email" name="email" placeholder="Enter your email address" required />
          {/* textarea is a frequently used form control, which is used to get multi-line input from a user. It's different from a normal text input, which allows only single-line input.*/}
          <textarea name="message" rows="7" placeholder="Enter your message" required />
          <button type="submit" className="btn">Submit Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
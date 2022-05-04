import React from 'react';
//Below I imported all the react-icons I need for this section of the website.
import {BsInstagram} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {SiDiscord} from 'react-icons/si';

const HeaderSocials = () => {
  //This is for rendering the header socials section of my site.
  return (
    <div className="header__socials">
      {/* Below are links to my Instagram profile, my GitHub profile, and the discord website embedded into a anchor tag which is displayed as a react-icon that looks like a button that opens the link into a new tab */}
        <a href="https://www.instagram.com/docheung_216/" target="_blank"><BsInstagram /></a>
        <a href="https://github.com/dows16" target="_blank"><FaGithub /></a>
        <a href="https://discord.com" target="_blank"><SiDiscord /></a>
    </div>
  )
}

export default HeaderSocials;
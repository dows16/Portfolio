import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiDiscord} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.instagram.com/docheung_216/" target="_blank"><BsInstagram /></a>
        <a href="https://github.com/dows16" target="_blank"><FaGithub /></a>
        <a href="https://discord.com" target="_blank"><SiDiscord /></a>
    </div>
  )
}

export default HeaderSocials
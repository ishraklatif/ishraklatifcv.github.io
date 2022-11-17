import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com/in/ishrak-latif-a79235212" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ishraklatif" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials
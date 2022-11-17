import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {GiCrossedSwords} from 'react-icons/gi'
import {SiJirasoftware} from 'react-icons/si'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">

            <img src={ME} alt="About Img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className = 'about__icon'/>
              <h5>Experience</h5>
              <small>5+ years working</small>
            </article>
            <article className='about__card'>
              <GiCrossedSwords className = 'about__icon'/>
              <h5>Army</h5>
              <small>Artillery</small>
            </article>
            <article className='about__card'>
              <SiJirasoftware className = 'about__icon'/>
              <h5>Software Development</h5>
              <small>1+ years working</small>
            </article>
          </div>
          <p>I am a retired Lieutenant of the Bangladesh Army, which commenced in March 2021. I finished my LPR in July 2021 for my service. I studied military science as well as computer science and engineering and collaborated on a military project - “AI Surveillance Tower”. I completed my bachelors in CSE and finished my thesis on “An Automated Eyeball Controlled Wheel Chair”.</p> 

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
      </section>
  )
}

export default About
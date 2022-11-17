import React from 'react'
import './Services.css'
import{BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cognitive Evaluation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Neilson Heuristic Evaluation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information Architecture analysis</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Feature Analysis</p>
            </li>
          </ul>
        </article>

      {/* END OF UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Front-end React.js</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Back-end Django</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database Postgres</p>
            </li>
          </ul>
        </article>

      {/* Web Dev */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
          <li>
              <BiCheck className='service__list-icon'/>
              <p>Search Engine Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Research</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Consistency</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Target Audience</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Brand Analysis</p>
            </li>
          </ul>
        </article>

      {/* END Content creation */}
      
      </div>
    </section>
  )
}

export default Services
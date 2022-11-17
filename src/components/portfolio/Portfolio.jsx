import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/img1.jpg'
import IMG2 from '../../assets/img2.jpg'



const data = [
  {
    id:1,
    image: IMG1,
    title: 'Automated Eyeball Controlled Wheelchair',
  },
  {
    id:2,
    image: IMG2,
    title: 'AI Surveillance Tower',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title}) => {
            return(
            <article key = {id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
          </article>
          
          )
          })
        }
      </div>
      </section>
  )
}

export default Portfolio
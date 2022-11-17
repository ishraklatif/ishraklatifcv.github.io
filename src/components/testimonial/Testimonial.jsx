import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, Ally } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Dr. Mohammad Waleed',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus beatae aperiam eaque corrupti, fugit voluptates natus. Itaque nostrum vitae error ex repellendus molestias repudiandae, mollitia quod minima voluptatibus eligendi magni!'
  },
  {
    avatar: AVTR2,
    name: 'Brigadier General Iffat Ara',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus beatae aperiam eaque corrupti, fugit voluptates natus. Itaque nostrum vitae error ex repellendus molestias repudiandae, mollitia quod minima voluptatibus eligendi magni!'
  },
  {
    avatar: AVTR3,
    name: 'Barister Ryan Hamid',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus beatae aperiam eaque corrupti, fugit voluptates natus. Itaque nostrum vitae error ex repellendus molestias repudiandae, mollitia quod minima voluptatibus eligendi magni!'
  },
  {
    avatar: AVTR4,
    name: 'Advocate Aneeka Waleed',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus beatae aperiam eaque corrupti, fugit voluptates natus. Itaque nostrum vitae error ex repellendus molestias repudiandae, mollitia quod minima voluptatibus eligendi magni!'
  }
]
const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination, Navigation]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                
          <div className="client__avatar">
            <img src={avatar} />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className='client__review'> {review}</small>
        </SwiperSlide>
              
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial
import React from 'react'

import { Title } from '../../../ui/Title/Title';
import { TestimonialsSlider } from './TestimonialsSlider/TestimonialsSlider';

import testimonials from './Testimonials.module.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';

export const Testimonials = () => {
  return (
    <section id="testimonials" className={testimonials.testimonials}>
      <div className="container">
        <div className="">
          <Title titleName="Что говорят мои клиенты"></Title>
        </div>
        <TestimonialsSlider />
      </div>
    </section>
  )
}

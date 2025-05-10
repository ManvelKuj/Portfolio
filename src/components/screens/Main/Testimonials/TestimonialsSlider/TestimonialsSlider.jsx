import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

import Client1 from '../../../../../assets/images/client-1.webp';
import Client2 from '../../../../../assets/images/client-2.webp';

import testimonials from './TestimonialsSlider.module.scss';


export const TestimonialsSlider = () => {

  return (
    <div className={testimonials.sliderWrapper}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, EffectFade]}
        allowTouchMove={false}>
        <SwiperSlide>
          <div className={testimonials.reviews}>
            <div className={testimonials.review}>
              <blockquote className={testimonials.content}>
                <p className={testimonials.text}>
                  Работать с Манвелом было одно удовольствие. Он точно понял,
                  чего я хочу, и создал отличный сайт для моей компании.
                </p>
                <div className={testimonials.name}>Андрей Попов</div>
              </blockquote>
              <img src={Client1} className={testimonials.image} alt="Фото Андрея Попова" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={testimonials.reviews}>
            <div className={testimonials.review}>
              <blockquote className={testimonials.content}>
                <p className={testimonials.text}>
                  Я очень довольна результатом, сделал все по ТЗ. Будем и дальше сотрудничать.
                </p>
                <div className={testimonials.name}>Алиса Осипова</div>
              </blockquote>
              <img src={Client2} className={testimonials.image} alt="Фото Алисы Осиповой" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

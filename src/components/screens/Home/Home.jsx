import React from 'react'
import { Link } from 'react-scroll';

import home from './Home.module.scss';

export const Home = () => {

  return (
    <section id="home" className={home.home}>
      <div className={home.overlay}></div>
      <div className={home.intro}>
        <div className={home.start}>Привет, меня зовут Манвел Куджоян и я</div>
        <h1>Front end разработчик</h1>
        <div className={home.start}>Я занимаюсь разработкой сайтов с 2020 года.</div>
      </div>
      <Link to="services" className={home.scrollDown} smooth={true} duration={500}>
        <span>
          <svg width="15" height="8" viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.96967 0.46967C1.26256 0.176777 1.73744 0.176777 2.03033 0.46967L7.5 5.93934L12.9697 0.46967C13.2626 0.176777 13.7374 0.176777 14.0303 0.46967C14.3232 0.762563 14.3232 1.23744 14.0303 1.53033L8.03033 7.53033C7.73744 7.82322 7.26256 7.82322 6.96967 7.53033L0.96967 1.53033C0.676777 1.23744 0.676777 0.762563 0.96967 0.46967Z" fill="#1C1B1E" />
          </svg>
        </span>
      </Link>
    </section>
  )
}

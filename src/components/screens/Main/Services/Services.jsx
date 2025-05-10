import React from 'react'

import { GoStack } from "react-icons/go";
import { FaWordpress } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { MdMiscellaneousServices } from "react-icons/md";


import { Title } from '../../../ui/Title/Title';

import services from './Services.module.scss';

export const Services = () => {
  return (
    <section id="services" className={services.services}>
      <div className="container">
        <Title titleName="Что я делаю"></Title>
        <div className={services.inner}>
          <div className={services.column}>
            <div className={services.item}>
              <div className={services.icon}>
                <GoStack />
              </div>
              <div className={services.text}>
                <h3 className={services.title}>Основной стек</h3>
                <div className={services.desc}>
                  Javascript(Jquery), React(redux), Typescript
                </div>
              </div>
            </div>
          </div>
          <div className={services.column}>
            <div className={services.item}>
              <div className={services.icon}>
                <FaWordpress />
              </div>
              <div className={services.text}>
                <h3 className={services.title}>Посадка на wordpress</h3>
                <div className={services.desc}>
                  Установка и перенос сайтов на Wordpress(ACF, Carbon Fields, Woocommerce, Elementor)
                </div>
              </div>
            </div>
          </div>
          <div className={services.column}>
            <div className={services.item}>
              <div className={services.icon}>
                <FiMonitor />
              </div>
              <div className={services.text}>
                <h3 className={services.title}>Верстка</h3>
                <div className={services.desc}>
                  Верстка сайтов на HTML5 & CSS3, по методологии БЭМ
                </div>
              </div>
            </div>
          </div>
          <div className={services.column}>
            <div className={services.item}>
              <div className={services.icon}>
                <MdMiscellaneousServices />
              </div>
              <div className={services.text}>
                <h3 className={services.title}>Другое</h3>
                <div className={services.desc}>
                  Библиотека Bootstrap, препроцессор Sass(Scss), сборщик Gulp
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

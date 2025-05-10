import React, { useEffect, useState } from 'react'
import portfolio from './Portfolio.module.scss';
import { Title } from '../../../ui/Title/Title';
import { WorksService } from '../../../../services/works.service';


export const Portfolio = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    const axiosData = async () => {
      const data = await WorksService.getAll();
      setWorks(data)

      return data;
    }
    axiosData();
  }, [])
  return (
    <section id="portfolio" className={portfolio.portfolio}>
      <div className="container">
        <Title titleName="Мои работы"></Title>
        <div className={portfolio.works}>
          {works.map(work => (
            <div key={work.id} className={portfolio.item}>
              <a href={work.url} target="_blank">
                <div className={portfolio.content}>
                  <figure>
                    <img src={work.img} alt="storiescafe" />
                    <figcaption className={portfolio.info}>
                      <h2><span>Stories</span> cafe</h2>
                      <p>Верстка + натяжка на Wordpress(ACF)</p>
                    </figcaption>
                  </figure>
                </div>
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

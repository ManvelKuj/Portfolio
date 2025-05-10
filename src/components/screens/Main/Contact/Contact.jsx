import React from 'react';
import contact from './Contact.module.scss';

export const Contact = () => {
  return (
    <section className={contact.contact}>
      <div className="container">
        <div className={contact.content}>
          <h2 className={contact.title}>
            ВЫ ГОТОВЫ НАЧАТЬ?
          </h2>
          <div className={contact.desc}>
            Я доступен для freelance проектов.
          </div>
        </div>
        <div className={contact.button}>
          <a href="https://t.me/undefenid" target="_blank" className={contact.link}>Связаться со мной</a>
        </div>
      </div>
    </section>
  )
}

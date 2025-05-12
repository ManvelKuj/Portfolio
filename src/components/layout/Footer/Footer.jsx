import React from 'react';

import { FaTelegram } from "react-icons/fa";
import { GoMail } from "react-icons/go";


import footer from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={footer.footer}>
      <div className="container">
        <div className={footer.inner}>
          <div className={footer.socials}>
            <a href='https://t.me/undefenid' target='_blank'><FaTelegram /></a>
            <a href='mailto:frontendkujoyan@yandex.ru'><GoMail /></a>
          </div>
        </div>
        <div className={footer.copyright}>© 2025 Манвел Куджоян | Изображения:{" "}<a href="https://unsplash.com/" target='_blank'>Unsplash</a></div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { Link } from 'react-scroll';

import header from './Header.module.scss';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={header.header}>
      <div className="container">
        <div className={header.inner}>
          <div className={header.logo}>
            <a href="#">Манвел Куджоян</a>
          </div>

          <button className={`${header.burger} ${menuOpen ? header.activeBurger : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`${header.menu} ${menuOpen ? header.activeMenu : ''}`} id="custom-collapse">
            <ul className={header.list}>
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass={header.active}
                  onClick={closeMenu}
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass={header.active}
                  onClick={closeMenu}
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass={header.active}
                  onClick={closeMenu}
                >
                  Работы
                </Link>
              </li>
              <li>
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass={header.active}
                  offset={-100}
                  onClick={closeMenu}
                >
                  Отзывы
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

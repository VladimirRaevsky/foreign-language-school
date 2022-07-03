import React from 'react'
import { Link, useLocation, useMatch } from 'react-router-dom'

import s from './Header.module.scss'

import headetLogo from '../../assets/images/headerLogo.svg'
import mess from '../../assets/images/Vector.svg'

import ButtonFeedback from '../UI/btnFeedback/ButtonFeedback'

const Header: React.FC = () => {
  console.log()

  return (
    <header className={s.header}>
      <div className={s.header__logo}>
        <img src={headetLogo} alt="" />
      </div>
      <div className="header__socials-link">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <nav className="nav header__nav">
        <ul className={s.nav__list}>
          <li className={s.nav__item}>
            <Link to="/" className={s.nav__link}>
              Главная
            </Link>
          </li>
          <li className={s.nav__item}>
            <Link to="/" className={s.nav__link}>
              О нас
            </Link>
          </li>
          <li className={s.nav__item}>
            <Link to="/" className={s.nav__link}>
              Услуги
            </Link>
          </li>
          <li className={s.nav__item}>
            <Link to="/" className={s.nav__link}>
              Университеты
            </Link>
          </li>
          <li className={s.nav__item}>
            <Link to="/" className={s.nav__link}>
              Студенты
            </Link>
          </li>
          <li className={s.nav__item}>
            <Link to="/" className={s.nav__link}>
              Новости
            </Link>
          </li>
          <li className={s.nav__item}>
            <Link to="/" className={s.nav__link}>
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__language">
        <button className="header-btn header-btn-ru">РУС</button>
        <button className="header-btn header-btn uk">UZ</button>
      </div>
      {/** COMPONENT btnFeedback **/}

      <div className={s.header__button}>
        <ButtonFeedback
          images={mess}
          style={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 0px 25px rgba(82, 191, 255, 0.15)',
            paddingRight: '20px',
          }}
        >
          Оставить заявку
        </ButtonFeedback>
      </div>
    </header>
  )
}

export default Header

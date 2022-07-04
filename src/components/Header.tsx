import React, { useContext, useState } from 'react'
import { Link, useLocation, useMatch } from 'react-router-dom'

import i18n from '../i18n'
import { useTranslation, Trans } from 'react-i18next'

import ButtonFeedback from './UI/btnFeedback/ButtonFeedback'
import SocialIconSvg from './SocialIconSvg'

import headetLogo from '../assets/images/header/headerLogo.svg'
import mess from '../assets/images/header/mess.svg'

const Header: React.FC = () => {
  //sets the activity button
  const [activeBtn, setActiveBtn] = useState(
    i18n.language === 'ru' ? true : false,
  )

  const { t } = useTranslation()
  //changed language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setActiveBtn(lng === 'ru' ? true : false)
  }
  console.log(i18n.language, activeBtn)

  return (
    <header className="header">
      <div className="header__logo">
        <img src={headetLogo} alt="Logo image" />
      </div>
      <div className="header__socials-link">
        {/** COMPONENT SocialIconSvg **/}
        <SocialIconSvg id={'inst'} />
        {/** COMPONENT SocialIconSvg **/}
        <SocialIconSvg id={'fb'} />
        {/** COMPONENT SocialIconSvg **/}
        <SocialIconSvg id={'youtube'} />
      </div>
      <nav className="nav header__nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              {t('nav_link.home')}
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              {t('nav_link.about')}
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              {t('nav_link.services')}
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              {t('nav_link.universities')}
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              {t('nav_link.students')}
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              {t('nav_link.news')}
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              {t('nav_link.contacts')}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__language">
        <button
          onClick={() => changeLanguage('ru')}
          className={`header-btn header-btn-ru ${activeBtn ? 'active' : ''}`}
        >
          РУС
        </button>
        <button
          onClick={() => changeLanguage('uk')}
          className={`header-btn header-btn-uk ${activeBtn ? '' : 'active'}`}
        >
          UKR
        </button>
      </div>
      {/** COMPONENT btnFeedback **/}

      <div className="header__button">
        <ButtonFeedback
          images={mess}
          style={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 0px 25px rgba(82, 191, 255, 0.15)',
            paddingRight: '20px',
          }}
        >
          {t('submit_your_application')}
        </ButtonFeedback>
      </div>
    </header>
  )
}

export default Header

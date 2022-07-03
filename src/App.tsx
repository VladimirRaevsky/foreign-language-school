import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { useTranslation, Trans, initReactI18next } from 'react-i18next'

import HomePage from './pages/homePage/HomePage'

import './scss/app.scss'

const App: React.FC = () => {
  const { t, i18n } = useTranslation()

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App

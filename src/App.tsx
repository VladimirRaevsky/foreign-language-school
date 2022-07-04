import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Language } from './context/index'

import HomePage from './pages/homePage/HomePage'

import './scss/app.scss'

const App: React.FC = () => {
  return (
    // <Suspense fallback={'gdfshgh'}>
      
    // </Suspense>
    <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
  )
}
{
  /* <Language.Provider value={i18n.language }>

</Language.Provider> */
}
export default App

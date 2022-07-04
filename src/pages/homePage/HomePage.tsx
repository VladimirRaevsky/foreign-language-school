import React from 'react'

import Header from '../../components/Header'

function HomePage() {
  return (
    <section className="section-header">
      <div className="wrapper">
        <div className="inner-container header__container">
          {/* COMPONENT Header */}
          <Header />
        </div>
      </div>
    </section>
  )
}

export default HomePage

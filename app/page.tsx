import React from 'react'
import Header from './Header'
import OurServices from './OurServices'
import Testimonials from './Testimonials'

const HomePage = () => {
  return (
    <>
        <Header />

        {/* <!-- Gap between header and our services --> */}
        <div className="gap"></div>

        <OurServices />

        <Testimonials />
    </>
  )
}

export default HomePage
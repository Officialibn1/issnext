import React from 'react'
import Header from './Header'
import OurServices from './OurServices'
import Testimonials from './Testimonials'
import ContactUs from './ContactUs'
import Footer from './Footer'

const HomePage = () => {
  return (
    <>
        <Header />

        {/* <!-- Gap between header and our services --> */}
        <div className="gap"></div>

        <OurServices />

        <Testimonials />

        <ContactUs />

        <Footer />
    </>
  )
}

export default HomePage
import React from 'react'
import Header from './Header'
import OurServices from './OurServices'
import Testimonials from './Testimonials'
import ContactUs from './ContactUs'
// import Chatbot from './Chatbot'

const HomePage = () => {
  return (
    <>
        <Header />

        {/* <!-- Gap between header and our services --> */}
        <div className="gap"></div>

        <OurServices />

        <Testimonials />

        <ContactUs />

        {/* <Chatbot /> */}

    </>
  )
}

export default HomePage
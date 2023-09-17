import React from 'react'
import Header from './Header'
import OurServices from './OurServices'

const HomePage = () => {
  return (
    <>
        <Header />

        {/* <!-- Gap between header and our services --> */}
        <div className="gap"></div>

        <OurServices />
    </>
  )
}

export default HomePage
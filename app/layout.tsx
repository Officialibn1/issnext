import React from 'react'
import '../styles/Globals.scss';
import { Montserrat } from "next/font/google";
import NavBar from './NavBar';

const monteserrat = Montserrat({subsets: ['vietnamese']});

const HomeLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <html lang='en'>
      <body style={monteserrat.style}>
          <NavBar />
          {children}
      </body>
    </html>
  )
}

export default HomeLayout
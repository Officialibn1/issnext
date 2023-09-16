import React from 'react'
import '../styles/Globals.scss';
import { Montserrat } from "next/font/google";
import NavBar from './NavBar';

const monteserrat = Montserrat({subsets: ['vietnamese']});

const HomeLayout = ({ children }: { children: React.ReactNode}) => {
  return (
    <div style={monteserrat.style}>
        <NavBar />
        {children}
    </div>
  )
}

export default HomeLayout
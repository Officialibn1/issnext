import '../styles/globals.scss'
import React from 'react';
import { Montserrat } from "next/font/google";
import Header from './Header';

const monserrat = Montserrat({subsets: ['latin']})

const HomeLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <html className={monserrat.className}>
        <body>
            {/* Layout Header */}
            <Header />
            {children}
        </body>
    </html>
  )
}

export default HomeLayout
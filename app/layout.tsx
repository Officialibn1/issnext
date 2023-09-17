import '../styles/Globals.scss';
import NavBar from './Navbar';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({subsets: ['vietnamese']});

export const metadata = {
  title: 'ISS (Internet Service Studio)',
  description: 'Designed by Ibn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={montserrat.style}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

import '../styles/Globals.scss';
import NavBar from './Navbar';
import { Roboto } from "next/font/google";

const roboto = Roboto({weight: ['100', '300', '400'], subsets: ['vietnamese']});

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
      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}

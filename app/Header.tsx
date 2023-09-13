import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header style={{height: '80px', background: 'grey', padding: '20px'}}>
        <Link href='/' style={{fontSize: '25px', border: '2px solid #000', padding: '5px', margin: '0 20px'}}>
            Home
        </Link>
        <Link href='/todos' style={{fontSize: '25px', border: '2px solid #000', padding: '5px', margin: '0 20px'}}>
            Todos
        </Link>
        <Link href='/search' style={{fontSize: '25px', border: '2px solid #000', padding: '5px', margin: '0 20px'}}>
            search
        </Link>
    </header>
  )
}

export default Header
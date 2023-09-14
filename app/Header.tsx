import Link from 'next/link'
import React from 'react'
import HeaderStyle from '../styles/Header.module.scss';

const Header = () => {
  return (
    <header className={HeaderStyle.header}>
        <h1>
            Next JS by Ibn
        </h1>

        <ul>
            <li><Link href={`/`}>Home</Link></li>
            <li><Link href={`/todos`}>Todos</Link></li>
            <li><Link href={`/notes`}>Notes</Link></li>
        </ul>
    </header>
  )
}

export default Header
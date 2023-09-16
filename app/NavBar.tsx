import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.scss';

const Header = () => {
  return (
    <nav className={styles.navBar}>
       <h1>Ibns Next</h1> 

       <ul>
        <li><Link href={`/`}>Home</Link></li>
        <li><Link href={`/todos`}>Todos</Link></li>
        <li><Link href={`/notes`}>Notes</Link></li>
       </ul>
    </nav>
  )
}

export default Header
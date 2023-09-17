import React from 'react'
import { getNotes } from './page'
import Link from 'next/link'
import { Note } from '@/typings'

const Sidenav = async () => {
    const notes: Note[] = await getNotes()
    
  return (
    <nav className="sideNav">
        <ul>
            {notes.map(note => (
                <li key={note.id}><Link href={`/notes/${note.id}`}>Note: {note.id}</Link></li>
            ))}
        </ul>
    </nav>
  )
}

export default Sidenav
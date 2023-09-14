import React from 'react'
import TodosNavStyles from '../../styles/TodosNav.module.scss'
import { Note, getNotes } from './page'
import Link from 'next/link'

const NotesNav = async () => {
    const notesLink: Note[] = await getNotes()

    const cutNotesLink = notesLink.splice(0, 30);

  return (
    <nav className={TodosNavStyles.todosNav}>
        {cutNotesLink.map(noteLink => (
            <Link href={`/notes/${noteLink.id}`} key={noteLink.id}>
                <p>
                    Note: {noteLink.id}
                </p>
            </Link>
        ))}
    </nav>
  )
}

export default NotesNav
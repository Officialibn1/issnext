import { Note } from '@/typings'
import React from 'react'

export const getNotes = async () => {
    const notes: Note[] = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
        res => res.json()
    )

    const slicedNotes = notes.slice(0, 40)

    return slicedNotes
}

const NotesPage = async () => {
  return (
    <div style={{padding: '2rem', fontWeight: '400'}}>
        <h1>Notes Homepage</h1>
    </div>
  )
}

export default NotesPage
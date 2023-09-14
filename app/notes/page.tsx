import React from 'react'

export type Note = {
  userId: number,
  id: number,
  title: string,
  body: string
}

export const getNotes = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const notes: Note[] = await res.json()

  return notes
}

const NotesPage = async () => {
  const notes = await getNotes()
  
  return (
    <div className='todos'>
        <h1>NotesPage</h1>
    </div>
  )
}

export default NotesPage
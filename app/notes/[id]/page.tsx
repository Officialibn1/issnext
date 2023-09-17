import { Note } from '@/typings'
import Link from 'next/link';
import React from 'react'

const NotePage = async ({ params }: { params: { id: string }}) => {
    const note: Note = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then(
        res => res.json()
    );

  return (
    <div>
        <div className='card'>
            <p>User Id: {note.userId}</p>
            <p>Id: {note.id}</p>
            <p>Title: {note.title}</p>
            <p>Note: <br /><br /> {note.body}</p>

            <p><Link href={`/notes`}>Back</Link></p>
        </div>
    </div>
  )
}

export default NotePage

export const generateStaticParams = async () => {
    const notes: Note[] = await fetch(`https://jsonplaceholder.typicode.com/posts/`).then(
        res => res.json()
    )

    const staticNotes = notes.slice(0, 15)
    
    return staticNotes.map(note => ({
        id: note.id.toString()
    }))
}
import React from 'react'
import { Note } from '../page';
import Link from 'next/link';


const NotePage = async ({params}: {params: {noteId: string}}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.noteId}`)
    const note: Note = await res.json();

  return (
    <div>
        <div className='noteCard'>
            <h3>ID: {note.id}</h3>
            <h3>User ID: {note.userId}</h3>
            <h2>Title: {note.title}</h2>
            <p>Content:</p>
            <p>{note.body}</p>
            <p>
                <Link href={`/notes`}>
                    Back
                </Link>
            </p>
        </div>
    </div>
  )
}

export default NotePage
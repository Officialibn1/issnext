import React from 'react'
import NotesNav from './NotesNav'

const NotesLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div style={{display: 'flex', gap: '2rem'}}>
        <NotesNav />
        {children}
    </div>
  )
}

export default NotesLayout
import React from 'react'
import NotesSidenav from './NotesSidenav'

const NotesLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div style={{display: 'flex', gap: '1rem'}}>
        <NotesSidenav />
        {children}
    </div>
  )
}

export default NotesLayout
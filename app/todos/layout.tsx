import React from 'react'
import Sidenav from './Sidenav'

const TodosLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div style={{display: 'flex', gap: '1rem'}}>
        <Sidenav />
        {children}
    </div>
  )
}

export default TodosLayout
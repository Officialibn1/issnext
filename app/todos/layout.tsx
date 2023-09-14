import React from 'react'
import TodosNav from './TodosNav'

const TodosLayout = ({children}: {
    children: React.ReactNode
}) => {
  return (
    <div style={{display: 'flex', gap: '2rem'}}>
        <TodosNav />
        {children}
    </div>
  )
}

export default TodosLayout
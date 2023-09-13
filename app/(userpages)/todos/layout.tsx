import React from 'react'
import TodoList from './TodoList'

const TodoLatout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <main style={{display: 'flex', gap: '2rem'}}>
        <TodoList />

        <div>
            {children}
        </div>
    </main>
  )
}

export default TodoLatout
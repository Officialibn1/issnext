import React from 'react'
import { fetchTodos } from './page'
import Link from 'next/link'

const Sidenav = async () => {
    const todos = await fetchTodos()
    
  return (
    <nav className="sideNav">
        <ul>
            {todos.map(todo => (
                <li key={todo.id}><Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link></li>
            ))}
        </ul>
    </nav>
  )
}

export default Sidenav
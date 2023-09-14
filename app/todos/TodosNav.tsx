import React from 'react'
import TodosNavStyles from '../../styles/TodosNav.module.scss';
import { getTodos } from './page';
import Link from 'next/link';


type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const TodosNav = async () => {
    const todos: Todo[] = await getTodos()
    const todoLinks = todos.slice(0, 30);

  return (
    <nav className={TodosNavStyles.todosNav}>
        {todoLinks.map(todo => (
            <Link href={`/todos/${todo.id}`} key={todo.id}>
                <p>Todo: {todo.id}</p>
            </Link>
        ))}
    </nav>
  )
}

export default TodosNav
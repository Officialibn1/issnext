import { Todo } from '@/typings';
import Link from 'next/link';
import React from 'react'

export const fetchTodos = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const data: Todo[] = await res.json()

    const todos = data.splice(0, 40);

    return todos
}

const TodosPage = async () => {
  return (
    <div className="section">
        <h1>TodosPage</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit nulla vitae laboriosam quidem maiores, consequuntur voluptates tenetur accusantium, adipisci veritatis doloremque aperiam voluptatum porro nemo quod beatae deserunt. Odit eum mollitia cum quia ducimus?</p>
    </div>
  )
}

export default TodosPage
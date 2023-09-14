import Link from 'next/link'
import React from 'react'

type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


const Todo = async ({params}: {params: {todoId: string}}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)
    const todo: Todo = await res.json();
    
  return (
    <div>
        <div className='noteCard'>
            <p>ID: {todo.id}</p>
            <p>User ID: {todo.userId}</p>
            <p>Title: {todo.title}</p>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>

            <p>
                <Link href={`/todos`}>
                    Back
                </Link>
            </p>
        </div>
    </div>
  )
}

export default Todo
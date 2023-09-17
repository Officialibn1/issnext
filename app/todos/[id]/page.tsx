import { Todo } from '@/typings'
import Link from 'next/link'
import React from 'react'
import { notFound } from "next/navigation";

const TodoPage = async ({ params }: {params: { id: string}}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
    const todo: Todo = await res.json();


    if (!todo.id) return notFound();
return (
    <div>
        <div className="card">
            <h1>UserId: {todo.userId} </h1>
            <p>Id: {todo.id} </p>
            <p>Title: {todo.title} </p>
            <p>Completed: {todo.completed} </p>
            <p><Link href={`/todos`}>Back</Link></p>
        </div>
    </div>
  )
}

export default TodoPage

export const generateStaticParams = async () => {
    const todos: Todo[] = await fetch(`https://jsonplaceholder.typicode.com/todos/`).then(res => 
    res.json());

    const staticTodo = todos.slice(0, 20);

    return staticTodo.map(todo => ({
        id: todo.id.toString()
    }))
}
import { Todo } from '@/typings'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

const CardStyle = {
    backgroundColor: '#0891b2',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 0 10px 0 #155e75',
    width: '300px',
    margin: '40px 80px',
    color: '#fff'
}

const pStyle = {
    fontSize: '20px',
    margin: '10px 0'
}

type PageProps = {
    params: {
        todoId: string
    }
}

export const dynamicParams = true;

const fetchTodo = async (todoId: string) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`, 
        { next: {revalidate: 60}}
    )
    
    const data: Todo = await res.json()
    
    return data

}

const TodoPage = async ({params: {todoId}}: PageProps) => {
    const todo = await fetchTodo(todoId);
    if(!todo.id) return notFound();

  return (
    <div style={CardStyle}>
        <p style={pStyle}>
            UserId: {todo.id}
        </p>
        <p style={pStyle}>
            Title: {todo.title}
        </p>
        <p style={pStyle}>
            Completed: {todo.completed ? 'Yes' : 'No'}
        </p>

        <Link href='/todos'>
            Back
        </Link>
    </div>
  )
}

export default TodoPage

export const generateStaticParams = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const data: Todo[] = await res.json();

    const trimmedData = data.splice(0, 10);

    return trimmedData.map(todo => ({
        todoId: todo.id.toString()
    }))
}
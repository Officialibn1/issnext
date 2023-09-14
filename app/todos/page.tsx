import Link from 'next/link';
import React from 'react'

type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export const getTodos = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const todos = await res.json()

    return todos
}


const Todos = async () => {
    const todos: Todo[] = await getTodos()
    
    
    return (
        <div className='todos'>
            Todos Home
        </div>
    )
}

export default Todos
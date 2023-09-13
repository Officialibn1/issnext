'use client'
import Link from 'next/link'
import React from 'react'

const TodoError = () => {
  return (
    <div>
        Sorry, we could&apos;nt fetch your todo. . .

        <Link href={`/todos`}>
            Back
        </Link>
    </div>
  )
}

export default TodoError
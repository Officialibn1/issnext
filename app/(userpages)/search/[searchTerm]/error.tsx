'use client'
import React, { useEffect } from 'react'

const Error = ({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) => {
    // Use effect hook
    useEffect(() => {
      console.error(error);
    }, [error])
    
  return (
    <div>
        <h1>
            Ooops... your search could&apos;nt be completed. . .
        </h1>

        <button onClick={() => reset()}>
            Retry
        </button>

    </div>
  )
}

export default Error
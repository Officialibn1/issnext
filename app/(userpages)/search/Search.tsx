'use client'
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";


const Search = () => {
    const [search, setSearch] = useState('')
    const router = useRouter()

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSearch('')
        router.push(`/search/${search}`)
    }

    return (
    <div>
        <form onSubmit={handleSearch}>
            <input 
                type="text" 
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Todo. . ."
                value={search}
                style={{
                    border: '2px solid salmon',
                    padding: '10px 20px',
                    margin: '5px 10px'
                }}
            />

            <button 
                type="submit"
                style={{
                    background: 'salmon',
                    padding: '10px 20px',
                    margin: '5px 10px',
                    border: 'none'
                }}
            >
                Search
            </button>
        </form>
    </div>
  )
}

export default Search
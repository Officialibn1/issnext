import React from 'react'
import Search from './Search'

const layout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <div style={{display: 'flex', gap: '2rem'}}>
        <h1>Search. . .</h1>

        <div style={{display: 'flex', gap: '2rem', flexDirection: 'column', borderLeft: '2px solid salmon', padding: '0 20px'}}>
            <Search />

            <div>
                {children}
            </div>
        </div>
    </div>
  )
}

export default layout
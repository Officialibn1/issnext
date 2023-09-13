import React from 'react'

type PageProps = {
    params: {
        searchTerm: string;
    };
};

type SearchResults = {
    organic_results: [
        {
            position: number,
            title: string,
            link: string,
            tumbnail: string,
            snippet: string
        }
    ]
}

const search = async (searchTerm: string) => {
    const res = await fetch(`https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`)

    const data: SearchResults = await res.json()

    return data

}

const SearchTerm = async ({params: {searchTerm}}: PageProps) => {
    const searchResults = await search(searchTerm);
    // console.log(searchResults); 
    
    return (
    <div>
        <p>you searched for {searchTerm}</p>

        <ol>
            {searchResults?.organic_results.map(item => (
                <li key={item.position} 
                    style={{border: '2px solid #000', padding: '10px', margin: '10px 0'}}>
                    <p>
                        {item.position}.
                        <span>
                            {item.title}
                        </span>
                    </p>
                    
                    <br />
                    <a href={item.link} target='_blank'>
                        {item.link}
                    </a>
                    <p>
                        {item.snippet}
                    </p>
                    <p>
                        {item.tumbnail}
                    </p>
                </li>
            ))}
        </ol>
    </div>
  )
}

export default SearchTerm
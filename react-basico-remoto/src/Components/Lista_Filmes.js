import React, { useState } from 'react'
import movies from '../Data/movies.json'

function Lista_Filmes () {
  const [searchTerm, setSearchTerm] = useState('')
  const allMovies = [...movies]

  const filteredMovies = allMovies.filter(filme =>
    filme.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <h2>Movies List</h2>
      <input
        type='text'
        placeholder='Search Movies'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      {filteredMovies.length > 0 ? (
        <ul className='movie-list'>
          {filteredMovies.map(filme => (
            <li key={filme.id}>
              <span className='movie-marker'>&#8226;</span>
              <span className='movie-title'>{filme.title}</span>
              <h3 className='movie-release'>{filme.year}</h3>
              <p>{filme.extract}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default Lista_Filmes

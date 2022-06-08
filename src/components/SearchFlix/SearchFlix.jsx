import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import '../../components/Movies/Movies.css';
import './SearchFlix.css'

function SearchFlix({results}) {
  console.log(results)
  return (
    <div className='container'>
      {results.map((movie) => (
        <MovieCard key= {movie.title} movie= {movie}/>
      ))}
      <div className='pagination'>
        <div className='pagination-btn'>
          {/* <button onClick={() => 
            setPage(page-1)
          }>
            PREVIOUS PAGE
          </button>
          
          <button onClick={() => 
            setPage(page+1)
          }>
            NEXT PAGE
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default SearchFlix
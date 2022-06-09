import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import TVShowCard from '../TVShowCard/TVShowCard'
import '../../components/Movies/Movies.css';
import './SearchFlix.css'

function SearchFlix({results, changeSelectedMedia}) {
  
  return (
    <div className='container'>
      {results.map((result) => {
        if(result.media_type==='movie') {
          return <MovieCard key= {result.title} movie= {result} changeSelectedMedia={changeSelectedMedia}/>
        }else if(result.media_type==='tv') {
          return <TVShowCard key= {result.name} tvshow= {result} changeSelectedMedia= {changeSelectedMedia}/>
        }
          
      })}
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
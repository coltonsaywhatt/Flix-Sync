import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from '../../MovieCard/MovieCard';
import '../Movies.css';
import * as moviesAPI from "../../../utilities/movies-api"

function PopularMovies({changeSelectedMedia}) {
  const [popularMovies, setPopularMovies] = useState([]); 

  useEffect(() => {
    async function getPopularMovies() {
      const popular = await moviesAPI.getPopular()
      setPopularMovies(popular);
    }
    getPopularMovies();
  },[])

  return (
    <div className='container'>
      {popularMovies.map((movie) => (
        <MovieCard key = {movie.title} movie={movie} changeSelectedMedia= {changeSelectedMedia}/>
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

export default PopularMovies
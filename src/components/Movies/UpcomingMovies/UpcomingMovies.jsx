import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from '../../MovieCard/MovieCard';
import '../Movies.css';
import * as moviesAPI from "../../../utilities/movies-api"

function UpcomingMovies({changeSelectedMedia}) {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    async function getUpcomingMovies() {
      const upcoming = await moviesAPI.getUpcoming()
      setUpcomingMovies(upcoming);
    }
    getUpcomingMovies();
  },[])

  return (
    <div className='container'>
      {upcomingMovies.map((movie) => (
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

export default UpcomingMovies
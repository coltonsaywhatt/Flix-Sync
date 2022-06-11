import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from '../../MovieCard/MovieCard';
import '../Movies.css';
import * as moviesAPI from "../../../utilities/movies-api"
import MovieDetails from '../../MovieDetails/MovieDetails';

function PopularMovies({changeSelectedMedia, selectedMedia, addMovie}) {
  const [popularMovies, setPopularMovies] = useState([]); 

  useEffect(() => {
    async function getPopularMovies() {
      const popular = await moviesAPI.getPopular()
      setPopularMovies(popular);
    }
    getPopularMovies();
  },[])

  return (
    <>
      <div className='container'>
        {popularMovies.map((movie) => (
          <MovieCard key = {movie.title} movie={movie} changeSelectedMedia= {changeSelectedMedia} />
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
      <MovieDetails changeSelectedMedia= {changeSelectedMedia} selectedMedia= {selectedMedia} addMovie={addMovie} />
    </>
  )
}

export default PopularMovies
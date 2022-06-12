import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from '../../MovieCard/MovieCard';
import '../Movies.css';
import * as moviesAPI from "../../../utilities/movies-api"
import MovieDetails from '../../MovieDetails/MovieDetails';

function TopRatedMovies({changeSelectedMedia, selectedMedia, addMovie}) {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function getTopRatedMovies() {
      const topRated = await moviesAPI.getTopRated(page)
      setTopRatedMovies(topRated);
    }
    getTopRatedMovies();
  },[page])

  return (
    <>
      <div className='container'>
        {topRatedMovies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} changeSelectedMedia={changeSelectedMedia} />
        ))}
        <div className='pagination'>
          <div className='pagination-btn'>
            <button onClick={() => 
              setPage(page-1)
            }>
              PREVIOUS PAGE
            </button>
            
            <button onClick={() => 
              setPage(page+1)
            }>
              NEXT PAGE
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopRatedMovies
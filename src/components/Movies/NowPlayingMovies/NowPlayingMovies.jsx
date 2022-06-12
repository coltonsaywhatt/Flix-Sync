import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from '../../MovieCard/MovieCard';
import '../Movies.css';
import * as moviesAPI from "../../../utilities/movies-api"
import MovieDetails from '../../MovieDetails/MovieDetails';

function NowPlayingMovies({changeSelectedMedia, selectedMedia, addMovie}) {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function getNowPlayingMovies() {
      const nowPlaying = await moviesAPI.getNowPlaying(page)
      setNowPlayingMovies(nowPlaying);
    }
    getNowPlayingMovies();    
  },[page])

  return (
    <>
      <div className='container'>
        {nowPlayingMovies.map((movie) => (
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

export default NowPlayingMovies
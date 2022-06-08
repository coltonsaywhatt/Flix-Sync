import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from '../../MovieCard/MovieCard';
import '../Movies.css';
import * as moviesAPI from "../../../utilities/movies-api"

function NowPlayingMovies() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]); 

  useEffect(() => {
    async function getNowPlayingMovies() {
      const nowPlaying = await moviesAPI.getNowPlaying()
      setNowPlayingMovies(nowPlaying);

      // fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=${page}`)
      // .then((req) => {
      //   return req.json();
      // })
      // .then((data) => {
      //   setNowPlayingMovies(data.results);
      // })
      // .catch((error) => {
      //   console.error(error);
      // })
    }
    getNowPlayingMovies();    
  },[])

  return (
    <div className='container'>
      {nowPlayingMovies.map((movie) => (
        <MovieCard key= {movie.title} poster_path= {movie.poster_path} title= {movie.title} backdrop_path= {movie.backdrop_path} overview= {movie.overview} vote_average= {movie.vote_average} release_date= {movie.release_date.substring(0,4)}/>
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

export default NowPlayingMovies
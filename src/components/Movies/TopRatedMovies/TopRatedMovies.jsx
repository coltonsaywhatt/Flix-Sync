import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from '../../MovieCard/MovieCard';
import '../Movies.css';
import * as moviesAPI from "../../../utilities/movies-api"

function TopRatedMovies() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    async function getTopRatedMovies() {
      const topRated = await moviesAPI.getTopRated()
      setTopRatedMovies(topRated);
      // fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=1`)
      // .then((req) => {
      //   return req.json();
      // })
      // .then((data) => {
      //   setTopRatedMovies(data.results);
      // })
      // .catch((error) => {
      //   console.error(error);
      // })
    }
    getTopRatedMovies();
  },[])

  return (
    <div className='container'>
      {topRatedMovies.map((movie) => (
        <MovieCard key = {movie.title} poster_path = {movie.poster_path} title = {movie.title} vote_average = {movie.vote_average} release_date = {movie.release_date.substring(0,4)}/>
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

export default TopRatedMovies
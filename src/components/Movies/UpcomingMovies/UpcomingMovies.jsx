import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from '../../MovieCard/MovieCard';
import '../Movies.css';
import * as moviesAPI from "../../../utilities/movies-api"

function UpcomingMovies() {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    async function getUpcomingMovies() {
      const upcoming = await moviesAPI.getUpcoming()
      setUpcomingMovies(upcoming);
      // fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=${page}`)
      // .then((req) => {
      //   return req.json();
      // })
      // .then((data) => {
      //   setUpcomingMovies(data.results);
      // })
      // .catch((error) => {
      //   console.error(error);
      // })
    }
    getUpcomingMovies();
  },[])

  return (
    <div className='container'>
      {upcomingMovies.map((movie) => (
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

export default UpcomingMovies
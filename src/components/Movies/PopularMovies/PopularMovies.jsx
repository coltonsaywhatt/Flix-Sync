import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from '../../MovieCard/MovieCard';
import '../Movies.css';

function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(1);  

  useEffect(() => {
    function getPopularMovies() {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=${page}`)
      .then((req) => {
        return req.json();
      })
      .then((data) => {
        setPopularMovies(data.results);
      })
      .catch((error) => {
        console.error(error);
      })
    }
    getPopularMovies();
  },[page])

  return (
    <div className='container'>
      {popularMovies.map((movie) => (
        <MovieCard key = {movie.title} poster_path = {movie.poster_path} title = {movie.title} vote_average = {movie.vote_average} release_date = {movie.release_date.substring(0,4)}/>
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
  )
}

export default PopularMovies
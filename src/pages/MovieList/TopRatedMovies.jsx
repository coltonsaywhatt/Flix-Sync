import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';

function TopRatedMovies() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  function getTopRatedMovies() {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=1')
    .then((req) => {
      return req.json();
    })
    .then((data) => {
      setTopRatedMovies(data.results);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  useEffect(() => {
    getTopRatedMovies();
  },[])

  return (
    <div>
      {topRatedMovies.map((movie) => (
        <MovieCard poster_path = {movie.poster_path} title = {movie.title} vote_average = {movie.vote_average} release_date = {movie.release_date.substring(0,4)}/>
      ))}
    </div>
  )
}

export default TopRatedMovies
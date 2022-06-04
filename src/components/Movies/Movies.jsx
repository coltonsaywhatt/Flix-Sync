import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import MovieCard from '../MovieCard/MovieCard';

function Movies() {
    const [ movies, setMovies ] = useState([]);

    function getMovies(){
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0debf7e322c372742f6079fe3d10685b')
        .then((req) => {
            return req.json();
        })
        .then((data) => {
            setMovies(data.results);
        })
        .catch((error) => {
            console.error(error);
        })
    }



    useEffect(() => {
        getMovies();
    },[])

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard poster_path = {movie.poster_path} title = {movie.title} release_date = {movie.release_date}/>
            ))}
        </div>

    )
}

export default Movies
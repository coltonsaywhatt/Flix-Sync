import React from 'react'
import { useState, useEffect } from 'react'
import * as Moviesapi from '../../utilities/movies-api'
import './WatchList.css'
import MovieCard from '../MovieCard/MovieCard'
import '../MovieCard/MovieCard.css'

const WatchList = () => {
  const [watch, setWatch] = useState();
//   const [refresh, setRefresh] = useState(true);
  useEffect(() =>  {
    const getWatchList = async () => {
      const watch = await Moviesapi.watchList();
      setWatch(watch);
    };
    getWatchList();
  },[]);

// async function deleteMovie(id) {
//   const remove = await Moviesapi.deleteMovie(id);
//   setRefresh(!refresh)
// }
console.log(watch)

  return (
    <>

    {/* <button onClick={deleteCoin}>Remove</button> */}
    {watch && watch.map(movie => 
    <p className='render' >{movie.title} | {movie.poster_path} | {movie.release_date} 
    {/* <MovieCard key={movie.title} movie={movie} */}
    {/* <button className='watch-btn' onClick={() => deleteMovie(movie._id)}>Remove</button> */}
    {/* <button className='watch-btn' setRefresh={refresh} onClick={() => deleteMovie(movie._id)}>Remove</button> */}
    </p> )}

    </>
  )
}

export default WatchList
import React from 'react'
import { useState, useEffect } from 'react'
import * as Moviesapi from '../../utilities/movies-api'
import './WatchList.css';
import WatchMovie from '../WatchListCard/WatchMovie/WatchMovie';

const WatchList = () => {
  const [watch, setWatch] = useState();

  async function deleteMovie(id) {
    const remove = await Moviesapi.deleteMovie(id)
    console.log(remove)
  }

  useEffect(() =>  {
    const getWatchList = async () => {
      const watch = await Moviesapi.watchList();
      setWatch(watch);
    };
    getWatchList();
  },[]);

  return (
    <>
      <div className='container'>
      <h2 className='watchlist'>My Watch List</h2>  
        {watch && watch.map(movie =>
        <>
          <button onClick={() => deleteMovie(movie._id) }>
            <i class="fa-solid fa-trash-can"></i>
          </button>
          
          <WatchMovie className='render' key={movie.title} movie={movie} />
          
        </>           
        )}
      </div> 
    </>
  )
}

export default WatchList
    // const [refresh, setRefresh] = useState(true);
    {/* <button onClick={deleteCoin}>Remove</button> */}
    {/* <button className='watch-btn' onClick={() => deleteMovie(movie._id)}>Remove</button> */}
    {/* <button className='watch-btn' setRefresh={refresh} onClick={() => deleteMovie(movie._id)}>Remove</button> */}
import React from 'react'
import { useState, useEffect } from 'react'
import * as Moviesapi from '../../utilities/movies-api'
import './WatchList.css';
import WatchMovie from '../WatchListCard/WatchMovie/WatchMovie';

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

  return (
    <>
    <div className='container'>
    <h2 className='watchlist'>My Watch List</h2>  
      {watch && watch.map(movie => 
        <WatchMovie className='render' key={movie.title} movie={movie} />          
      )}
    </div> 
    </>
  )
}

export default WatchList

    {/* <button onClick={deleteCoin}>Remove</button> */}
    {/* <button className='watch-btn' onClick={() => deleteMovie(movie._id)}>Remove</button> */}
    {/* <button className='watch-btn' setRefresh={refresh} onClick={() => deleteMovie(movie._id)}>Remove</button> */}
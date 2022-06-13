import React from 'react'
import './WatchMovie.css'; 
import * as Moviesapi from '../../../utilities/movies-api'
import { useState } from 'react';

function WatchMovie(props) {
  

  // async function deleteMovie(apiID) {
  //   console.log(deleteMovie)
  //   const remove = await Moviesapi.deleteMovie(apiID)
  // }

  return (    

    <div className='movieCard'>
      <div className='image'>
        <div className='image-wrapper'>
          <img src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} alt="" />
        </div>
        <div className='delete-icon'>
          {/* <button onClick={() => deleteMovie(apiID._id) }>
            <i class="fa-solid fa-trash-can"></i>
          </button>          */}
        </div>
      </div>         
      <div className='content'>
        <h2>{props.movie.title}</h2>
        <p>{props.movie.release_date.substring(0, 4)}</p>
      </div>
   </div>
  )
}

export default WatchMovie
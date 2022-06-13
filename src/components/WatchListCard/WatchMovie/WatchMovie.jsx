import React from 'react'
import './WatchMovie.css'; 

function WatchMovie(props) {
  return (    

    <div className='movieCard'>
      <div className='image'>
        <div className='image-wrapper'>
          <img src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} alt="" />
        </div>
        <div className='delete-icon'>
          <button>
            <i class="fa-solid fa-trash-can"></i>
          </button>         
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
import React from 'react';
import './MovieCard.css';

function MovieCard(props) {
  return (
    <div className='movieCard'>
      <div className='image'>
        <div className='image-wrapper'>
          <img src= {`https://image.tmdb.org/t/p/original${props.poster_path}`} alt="" />
        </div>
      </div>         
      <div className='content'>
        <h2>{props.title}</h2>
        {/* <h4>{props.vote_average}</h4> */}
        <p>{props.release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard
import React from 'react';
import './MovieCard.css'; 

function MovieCard(props) {

  function handleClick() {
    props.changeSelectedMedia(props.movie)
  }

  return (
    <div className='movieCard' onClick={handleClick}>
      <div className='image'>
        <div className='image-wrapper'>
          <img src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} alt="" />
        </div>
        <div className='rating'>
          <h4>{props.movie.vote_average}</h4>          
        </div>
      </div>         
      <div className='content'>
        <h2>{props.movie.title}</h2>
        <p>{props.movie.release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard
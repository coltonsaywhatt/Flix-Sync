import React from 'react'
import './MovieCard.css'

function MovieCard(props) {
  return (
    <div className='movieCard'>
        <img src= {`https://image.tmdb.org/t/p/original${props.poster_path}`} alt="" /> 
        <h4>{props.title}</h4>
        <p>{props.release_date}</p>

    </div>
  )
}

export default MovieCard
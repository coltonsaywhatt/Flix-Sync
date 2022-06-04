import React from 'react';
import './TVShowCard.css';

function TVShowCard(props) {
  return (
    <div className='tvShowCard'>
      <img src= {`https://image.tmdb.org/t/p/original${props.poster_path}`} alt="" /> 
        <h4>{props.name}</h4>
        <p>{props.first_air_date}</p>

    </div>
  )
}

export default TVShowCard
import React from 'react';
import './TVShowCard.css';

function TVShowCard(props) {
  return (
    <div className='tvShowCard'>
      <div className='image'>
        <div className='image-wrapper'>
          <img src= {`https://image.tmdb.org/t/p/original${props.poster_path}`} alt="" />
        </div>
        <div className='rating'>
          <h4>{props.vote_average}</h4>          
        </div>
      </div>
      <div className='content'>        
        <h2>{props.name}</h2>
        <p>{props.first_air_date}</p>
      </div> 
    </div>
  )
}

export default TVShowCard


         
        
        
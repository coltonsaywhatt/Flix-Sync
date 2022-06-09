import React from 'react';
import './TVShowCard.css';

function TVShowCard(props) {
  return (
    <div className='tvShowCard'>
      <div className='image'>
        <div className='image-wrapper'>
          <img src= {`https://image.tmdb.org/t/p/original${props.tvshow.poster_path}`} alt="" />
        </div>
        <div className='rating'>
          <h4>{props.tvshow.vote_average}</h4>          
        </div>
      </div>
      <div className='content'>        
        <h2>{props.tvshow.name}</h2>
        <p>{props.tvshow.first_air_date.substring(0, 4)}</p>
      </div> 
    </div>
  )
}

export default TVShowCard


         
        
        
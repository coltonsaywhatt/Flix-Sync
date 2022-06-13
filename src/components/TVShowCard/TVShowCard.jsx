import React from 'react';
import './TVShowCard.css';

function TVShowCard(props) {

  function handleClick() {
    props.changeSelectedTvMedia(props.tvshow)
  }

  return (
    <div className='tvShowCard' onClick={handleClick}>
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
        <p>{props.tvshow.first_air_date}</p>
      </div> 
    </div>
  )
}

export default TVShowCard
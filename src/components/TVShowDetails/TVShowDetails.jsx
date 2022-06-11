import React from 'react'
import './TVShowDetails.css'

function TVShowDetails(props) {
  return (

    <div className="movie_card" id="container" style={{display: props.showModal?"block":"none"}}>
    <div className="info_section">
      <div className="movie_header">
        <div className="close_btn" onClick={()=>props.changeSelectedTvMedia({})}>
          <i className="fa-solid fa-xmark"></i>          
        </div>
        <img className="poster" alt='' src={`https://image.tmdb.org/t/p/original${props.selectedTvMedia.poster_path}`}/>
        <h1>{props.selectedTvMedia.name}</h1>
        <h4>{props.selectedTvMedia.first_air_date}</h4><span className="minutes">{props.selectedTvMedia.episode_run_time}</span>
        <p className="type">{props.selectedTvMedia.genres_name}</p>
      </div>
      <div className="movie_desc">
        <p className="text">{props.selectedTvMedia.overview}</p>
      </div>
      <div className="movie_social">
        <ul>
          <li><button><i className="fa-solid fa-bookmark"></i>&nbsp; Add to watch list</button></li>
          <li><button><i className="fa-solid fa-circle-check"></i>&nbsp; Add to watched list</button></li>
        </ul>
      </div>
    </div>
    <div className="blur_back backdrop">
      <img alt="" src={`https://image.tmdb.org/t/p/original${props.selectedTvMedia.backdrop_path}`}/>
    </div>
  </div>
  )
}

export default TVShowDetails
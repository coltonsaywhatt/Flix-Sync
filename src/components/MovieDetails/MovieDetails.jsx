import React from 'react'
import './MovieDetails.css'

function MovieDetails(props) {
  // var modal = document.getElementById(container)

  return (

    <div className="movie_card" id="container">
    <div className="info_section">
      <div className="movie_header">
        <div className="close_btn">
          <i className="fa-solid fa-xmark"></i>          
        </div>
        <img className="poster" src={`https://image.tmdb.org/t/p/original${props.poster_path}`}/>
        <h1>{props.title}</h1>
        <h4>{props.release_date}</h4><span className="minutes">{props.runtime}</span>
        <p className="type">{props.genres_name}</p>
      </div>
      <div className="movie_desc">
        <p className="text">{props.overview}</p>
      </div>
      <div className="movie_social">
        <ul>
          <li><button><i className="fa-solid fa-bookmark"></i>&nbsp; Add to watch list</button></li>
          <li><button><i className="fa-solid fa-circle-check"></i>&nbsp; Add to watched list</button></li>
        </ul>
      </div>
    </div>
    <div className="blur_back backdrop">
      <img alt="" src={`https://image.tmdb.org/t/p/original${props.backdrop_path}`}/>
    </div>
  </div>
  )
}

export default MovieDetails
import React from 'react'

function MovieDetails() {
  return (

    <div class="movie_card" id="container">
    <div class="info_section">
      <div class="movie_header">
        <img class="poster" src={`https://image.tmdb.org/t/p/original${props.poster_path}`}/>
        <h1>{props.title}</h1>
        <h4>{props.release_date}</h4><span class="minutes">R</span> <span class="minutes">{props.runtime}</span>
        <p class="type">{props.genres_name}</p>
      </div>
      <div class="movie_desc">
        <p class="text">{props.overview}</p>
      </div>
      <div class="movie_social">
        <ul>
          <li><button><i class="fa-solid fa-bookmark"></i>&nbsp; Add to watch list</button></li>
          <li><button><i class="fa-solid fa-circle-check"></i>&nbsp; Add to watched list</button></li>
        </ul>
      </div>
    </div>
    <div class="blur_back backdrop">
      <img alt="" src={`https://image.tmdb.org/t/p/original${props.backdrop}`}/>
    </div>
  </div>
  )
}

export default MovieDetails
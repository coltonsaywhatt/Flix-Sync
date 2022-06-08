import React from 'react'

function MovieDetails() {
  return (

    <div class="movie_card" id="container">
    <div class="info_section">
      <div class="movie_header">
        <img class="poster" src={`https://image.tmdb.org/t/p/original${props.poster_path}`}/>
        <h1>{props.title}</h1>
        <h4>{props.release_date}</h4><span class="minutes">R</span> <span class="minutes">117 min</span>
        <p class="type">Action, Crime, Fantasy</p>
      </div>
      <div class="movie_desc">
        <p class="text">Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.</p>
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
import React from 'react'
import './MovieDetails.css'

function MovieDetails(props) {
  return (
    <>     
      <div className="movie_card" id="container" style={{display: props.selectedMedia.id?"block":"none"}}>
        <div className="close_btn" onClick={()=>props.changeSelectedMedia({})}>
          <i className="fa-solid fa-xmark"></i>          
        </div>
        <div className="info_section">
          <div className="movie_header">          
            <img className="poster" alt='' src={`https://image.tmdb.org/t/p/original${props.selectedMedia.poster_path}`}/>
            <h1>{props.selectedMedia.title}</h1>
            <h4>{props.selectedMedia.release_date}</h4><span className="minutes">{props.selectedMedia.runtime}min</span>
            {props.selectedMedia.genres && props.selectedMedia.genres.map(g => <p className="type"> {g.name}</p>) }
          </div>
          <div className="movie_desc">
            <p className="text">{props.selectedMedia.overview}</p>
          </div>
          <div className="movie_social">
            <ul>
              <li><button className='watchlist-btn' onClick={()=>{props.addMovie(props.selectedMedia)}}><i className="fa-solid fa-bookmark"></i>&nbsp; Add to watch list</button></li>
              <li><button className='watchlist-btn'><i className="fa-solid fa-circle-check"></i>&nbsp; Add to watched list</button></li>
            </ul>
          </div>
        </div>
        <div className="blur_back backdrop">
          <img alt="" src={`https://image.tmdb.org/t/p/original${props.selectedMedia.backdrop_path}`}/>
        </div>
      </div>
      <div className="modal-bg" style={{display: props.selectedMedia.id?"block":"none"}}></div>
    </>
  )
}

export default MovieDetails
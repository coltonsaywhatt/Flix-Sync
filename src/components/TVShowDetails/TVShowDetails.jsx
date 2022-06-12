import React from 'react'
import './TVShowDetails.css'

function TVShowDetails(props) {
  return (
    <>
      <div className="tv_card" id="tv-container" style={{display: props.selectedTvMedia.id?"block":"none"}}>
        <div className="close_btn" onClick={()=>props.changeSelectedTvMedia({})}>
          <i className="fa-solid fa-xmark"></i>
        </div>    
        <div className="info_section">
          <div className="tv_header">          
            <img className="poster" alt='' src={`https://image.tmdb.org/t/p/original${props.selectedTvMedia.poster_path}`}/>
            <h1>{props.selectedTvMedia.name}</h1>
            <h4>{props.selectedTvMedia.first_air_date}</h4><span className="minutes">{props.selectedTvMedia.episode_run_time}min</span>
            {props.selectedTvMedia.genres && props.selectedTvMedia.genres.map(g => <p className="type"> {g.name}</p>) }
          </div>
          <div className="tv_desc">
            <p className="text">{props.selectedTvMedia.overview}</p>
          </div>
          <div className="tv_social">
            <ul>
              <li><button className='watchlist-btn' onClick={()=>{props.addTvShow(props.selectedTvMedia)}}><i className="fa-solid fa-bookmark"></i>&nbsp; Add to watch list</button></li>
              <li><button className='watchlist-btn'><i className="fa-solid fa-circle-check"></i>&nbsp; Add to watched list</button></li>
            </ul>
          </div>
        </div>
      <div className="blur_back backdrop">
        <img alt="" src={`https://image.tmdb.org/t/p/original${props.selectedTvMedia.backdrop_path}`}/>
      </div>
    </div>
    <div className="modal-bg" style={{display: props.selectedTvMedia.id?"block":"none"}}></div>
  </>
  )
}

export default TVShowDetails
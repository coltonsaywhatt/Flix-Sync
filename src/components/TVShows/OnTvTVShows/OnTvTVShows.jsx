import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import TVShowCard from '../../TVShowCard/TVShowCard';
import '../TVShows.css';

function OnTvTVShows() {
  const [onTvTVShows, setOnTvTVShows] = useState([]);
  const [page, setPage] = useState(1);

  function getOnTvTVShows() {
    fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=${page}`)
    .then((req) => {
      return req.json();
    })
    .then((data) => {
      setOnTvTVShows(data.results);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  useEffect(() => {
    getOnTvTVShows();
  },[page])

  return (
    <div className='container'>
      {onTvTVShows.map((tvshow) => (
        <TVShowCard poster_path = {tvshow.poster_path} name = {tvshow.name} vote_average = {tvshow.vote_average} first_air_date = {tvshow.first_air_date.substring(0,4)}/>
      ))}
      <div className='pagination'>
        <div className='pagination-btn'>
          <button onClick={() => 
            setPage(page-1)
          }>
            PREVIOUS PAGE
          </button>
          
          <button onClick={() => 
            setPage(page+1)
          }>
            NEXT PAGE
          </button>
        </div>
      </div>
    </div>
  )
}

export default OnTvTVShows
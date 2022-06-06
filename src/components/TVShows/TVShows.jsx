import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TVShowCard from '../TVShowCard/TVShowCard';

function TVShows() {
  const [tvshows, setTVShows] = useState([]);

  function getTVShows() {
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=0debf7e322c372742f6079fe3d10685b')
    .then((req) => {
      return req.json();
    })
    .then((data) => {
      setTVShows(data.results);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  useEffect(() => {
    getTVShows();
  },[])

  return (
    <div>
      {tvshows.map((tvshow) => (
        <TVShowCard poster_path = {tvshow.poster_path} name = {tvshow.name} first_air_date = {tvshow.first_air_date.substring(0,4)}/>
      ))}
    </div>
  )
}

export default TVShows
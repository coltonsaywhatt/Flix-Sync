import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import TVShowCard from '../../TVShowCard/TVShowCard';
import '../TVShows.css';
import * as tvshowsAPI from "../../../utilities/tvshows-api";

function AiringTodayTVShows() {
  const [airingTodayTVShows, setAiringTodayTVShows] = useState([]);

  useEffect(() => {
    async function getAiringTodayTVShows() {
      const airingToday = await tvshowsAPI.getAiringToday()
      setAiringTodayTVShows(airingToday);
      // fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=0debf7e322c372742f6079fe3d10685b&language=en-US&page=${page}`)
      // .then((req) => {
      //   return req.json();
      // })
      // .then((data) => {
      //   setAiringTodayTVShows(data.results);
      // })
      // .catch((error) => {
      //   console.error(error);
      // })
    }
    getAiringTodayTVShows();
  },[])

  return (
    <div className='container'>
      {airingTodayTVShows.map((tvshow) => (
        <TVShowCard key= {tvshow.name} tvshow={tvshow}/>
      ))}
      <div className='pagination'>
        <div className='pagination-btn'>
          {/* <button onClick={() => 
            setPage(page-1)
          }>
            PREVIOUS PAGE
          </button>
          
          <button onClick={() => 
            setPage(page+1)
          }>
            NEXT PAGE
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default AiringTodayTVShows
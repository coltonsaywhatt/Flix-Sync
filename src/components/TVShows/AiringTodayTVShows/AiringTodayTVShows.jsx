import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import TVShowCard from '../../TVShowCard/TVShowCard';
import '../TVShows.css';
import * as TvShowAPI from "../../../utilities/tvshows-api";
import TVShowDetails from '../../TVShowDetails/TVShowDetails';

function AiringTodayTVShows({changeSelectedTvMedia, addTvShow}) {
  const [airingTodayTVShows, setAiringTodayTVShows] = useState([]);

  useEffect(() => {
    async function getAiringTodayTVShows() {
      const airingToday = await TvShowAPI.getAiringToday()
      setAiringTodayTVShows(airingToday);
    }
    getAiringTodayTVShows();
  },[])

  return (
    <div className='container'>
      {airingTodayTVShows.map((tvshow) => (
        <TVShowCard key={tvshow.name} tvshow={tvshow} changeSelectedTvMedia={changeSelectedTvMedia} />
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
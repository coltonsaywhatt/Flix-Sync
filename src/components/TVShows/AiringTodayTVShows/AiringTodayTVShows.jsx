import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import TVShowCard from '../../TVShowCard/TVShowCard';
import '../TVShows.css';
import * as tvshowsAPI from "../../../utilities/tvshows-api";

function AiringTodayTVShows({changeSelectedMedia}) {
  const [airingTodayTVShows, setAiringTodayTVShows] = useState([]);

  useEffect(() => {
    async function getAiringTodayTVShows() {
      const airingToday = await tvshowsAPI.getAiringToday()
      setAiringTodayTVShows(airingToday);
    }
    getAiringTodayTVShows();
  },[])

  return (
    <div className='container'>
      {airingTodayTVShows.map((tvshow) => (
        <TVShowCard key= {tvshow.name} tvshow={tvshow} changeSelectedMedia= {changeSelectedMedia}/>
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
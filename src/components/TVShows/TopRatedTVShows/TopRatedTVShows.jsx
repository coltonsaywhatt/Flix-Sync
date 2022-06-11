import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import TVShowCard from '../../TVShowCard/TVShowCard';
import '../TVShows.css';
import * as tvshowsAPI from "../../../utilities/tvshows-api";

function TopRatedTVShows({changeSelectedTvMedia}) {
  const [topRatedTVShows, setTopRatedTVShows] = useState([]);

  useEffect(() => {
    async function getTopRatedTVShows() {
      const topRated = await tvshowsAPI.getTopRated()
      setTopRatedTVShows(topRated);
    }
    getTopRatedTVShows();
  },[])

  return (
    <div className='container'>
      {topRatedTVShows.map((tvshow) => (
        <TVShowCard key= {tvshow.name} tvshow={tvshow} changeSelectedTvMedia= {changeSelectedTvMedia} />
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

export default TopRatedTVShows
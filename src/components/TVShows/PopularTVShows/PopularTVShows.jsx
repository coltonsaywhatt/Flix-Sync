import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import TVShowCard from '../../TVShowCard/TVShowCard';
import '../TVShows.css';
import * as tvshowsAPI from "../../../utilities/tvshows-api";

function PopularTVShows({changeSelectedTvMedia, addTvShow}) {
  const [popularTVShows, setPopularTVShows] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function getPopularTVShows() {
      const popular = await tvshowsAPI.getPopular(page)
      setPopularTVShows(popular);
    }
    getPopularTVShows();
  },[page])

  return (
    <div className='container'>
      {popularTVShows.map((tvshow) => (
        <TVShowCard key={tvshow.name} tvshow={tvshow} changeSelectedTvMedia={changeSelectedTvMedia} />
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

export default PopularTVShows
import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import TVShowCard from '../TVShowCard/TVShowCard';
import '../../components/Movies/Movies.css';
import '../../components/TVShows/TVShows.css';


function SearchFlix({results, changeSelectedMedia, changeSelectedTvMedia, selectedMedia, addMovie, addTvShow}) {
    
  return (
    <>
      <div className='container'>
        {results.map((result, idx) => {
          if(result.media_type==='movie') {
            return <MovieCard key= {idx} movie= {result} changeSelectedMedia= {changeSelectedMedia} />
          }else if(result.media_type==='tv') {
            return <TVShowCard key= {idx} tvshow= {result} changeSelectedTvMedia= {changeSelectedTvMedia} />
          }          
        })}
        <div className='pagination'>
          <div className='pagination-btn'>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchFlix
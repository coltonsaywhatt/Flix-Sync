import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import TVShowCard from '../TVShowCard/TVShowCard';
import '../../components/Movies/Movies.css';
import '../../components/TVShows/TVShows.css';
import MovieDetails from '../MovieDetails/MovieDetails';

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
      <MovieDetails changeSelectedMedia= {changeSelectedMedia} selectedMedia= {selectedMedia} addMovie={addMovie} addTvShow={addTvShow} />
    </>
  )
}

export default SearchFlix
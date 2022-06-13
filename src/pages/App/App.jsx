import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NowPlayingMovies from '../../components/Movies/NowPlayingMovies/NowPlayingMovies';
import PopularMovies from '../../components/Movies/PopularMovies/PopularMovies';
import TopRatedMovies from '../../components/Movies/TopRatedMovies/TopRatedMovies';
import UpcomingMovies from '../../components/Movies/UpcomingMovies/UpcomingMovies';
import AiringTodayTVShows from '../../components/TVShows/AiringTodayTVShows/AiringTodayTVShows';
import OnTvTVShows from '../../components/TVShows/OnTvTVShows/OnTvTVShows';
import PopularTVShows from '../../components/TVShows/PopularTVShows/PopularTVShows';
import TopRatedTVShows from '../../components/TVShows/TopRatedTVShows/TopRatedTVShows';
import './App.css';
import SearchFlix from '../../components/SearchFlix/SearchFlix';
import * as Moviesapi from '../../utilities/movies-api'
import * as TvShowAPI from '../../utilities/tvshows-api'
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import TVShowDetails from '../../components/TVShowDetails/TVShowDetails';
import WatchList from '../../components/WatchList/WatchList';
import WatchMovie from '../../components/WatchListCard/WatchMovie/WatchMovie';

function App() {
  const [user, setUser] = useState(getUser());
  const [results, setResults] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState ({})
  const [selectedTvMedia, setSelectedTvMedia] = useState ({})
  
  async function changeSelectedMedia (newMedia) {
    const movieDetails = await Moviesapi.getDetails(newMedia.id);
    setSelectedMedia(movieDetails);
  }

  async function changeSelectedTvMedia (newMedia) {
    const tvshowDetails = await TvShowAPI.getTvDetails(newMedia.id);
    setSelectedTvMedia(tvshowDetails);
  }

  async function addMovie (newMedia) {
    const movieObject = {
      title: newMedia.title,
      poster_path: newMedia.poster_path,
      release_date: newMedia.release_date,
      runtime: newMedia.runtime,
      genres : newMedia.genres.map(g => g.name),
      overview: newMedia.overview,
      backdrop_path: newMedia.backdrop_path,
      apiId: newMedia.id,
    }
    const movie = await Moviesapi.add(movieObject);
    // setSelectedMedia(movieDetails);
  }

  async function addTvShow (newMedia) {
    const tvObject = {
      name: newMedia.name,
      poster_path: newMedia.poster_path,
      first_air_date: newMedia.first_air_date,
      runtime: newMedia.episode_run_time,
      genres : newMedia.genres.map(g => g.name),
      overview: newMedia.overview,
      backdrop_path: newMedia.backdrop_path,
      apiId: newMedia.id,
    }
    const tv = await TvShowAPI.add(tvObject);
    // setSelectedMedia(tvDetails);
  }
  

  return (
    <main className="App">
      { user ?
        <>
          <TVShowDetails changeSelectedTvMedia= {changeSelectedTvMedia} selectedTvMedia= {selectedTvMedia} addTvShow={addTvShow} />
          <MovieDetails changeSelectedMedia= {changeSelectedMedia} selectedMedia= {selectedMedia} addMovie={addMovie} />
          <NavBar user={user} setUser={setUser} setResults={setResults} />
          <Routes>
            {/* Route components in here */}
            <Route path="/WatchList" element={<WatchList WatchList={WatchList} />} />

            <Route path="/search" element={<SearchFlix results={results} selectedMedia={selectedMedia} changeSelectedMedia={changeSelectedMedia} selectedTvMedia={selectedTvMedia} changeSelectedTvMedia={changeSelectedTvMedia} addMovie={addMovie} addTvShow={addTvShow} />} />
            
            <Route path="/now-playing-movies" element={<NowPlayingMovies selectedMedia={selectedMedia} changeSelectedMedia={changeSelectedMedia} addMovie={addMovie} />} />
            <Route path="/popular-movies" element={<PopularMovies selectedMedia={selectedMedia} changeSelectedMedia={changeSelectedMedia} addMovie={addMovie} />} />
            <Route path="/top-rated-movies" element={<TopRatedMovies selectedMedia={selectedMedia} changeSelectedMedia={changeSelectedMedia} addMovie={addMovie} />} />
            <Route path="/upcoming-movies" element={<UpcomingMovies selectedMedia={selectedMedia} changeSelectedMedia={changeSelectedMedia} addMovie={addMovie} />} />

            <Route path="/airing-today-tVShows" element={<AiringTodayTVShows selectedTvMedia={selectedTvMedia} changeSelectedTvMedia={changeSelectedTvMedia} addTvShow={addTvShow} />} />
            <Route path="/on-tv-tVShows" element={<OnTvTVShows selectedTvMedia={selectedTvMedia} changeSelectedTvMedia={changeSelectedTvMedia} addTvShow={addTvShow}/>} />
            <Route path="/popular-tVShows" element={<PopularTVShows selectedTvMedia={selectedTvMedia} changeSelectedTvMedia={changeSelectedTvMedia} addTvShow={addTvShow} />} />
            <Route path="/top-rated-tVShows" element={<TopRatedTVShows selectedTvMedia={selectedTvMedia} changeSelectedTvMedia={changeSelectedTvMedia} addTvShow={addTvShow} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;

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
import MovieDetails from '../../components/MovieDetails/MovieDetails';

function App() {
  const [user, setUser] = useState(getUser());
  const [results, setResults] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState ({})
  
  async function changeSelectedMedia (newMedia) {
    const movieDetails = await Moviesapi.getDetails(newMedia.id);
    setSelectedMedia(movieDetails);
    // console.log(movieDetails)
  }

  return (
    <main className="App">
      { user ?
        <>
          <MovieDetails changeSelectedMedia= {changeSelectedMedia} selectedMedia= {selectedMedia} />
          <NavBar user={user} setUser={setUser} setResults={setResults} />
          <Routes>
            {/* Route components in here */}
            <Route path="/search" element={<SearchFlix results={results} selectedMedia={selectedMedia} changeSelectedMedia={changeSelectedMedia}/>} />
            
            <Route path="/now-playing-movies" element={<NowPlayingMovies selectedMedia={selectedMedia} changeSelectedMedia={changeSelectedMedia} />} />
            <Route path="/popular-movies" element={<PopularMovies selectedMedia={selectedMedia} changeSelectedMedia={changeSelectedMedia} />} />
            <Route path="/top-rated-movies" element={<TopRatedMovies selectedMedia={selectedMedia} changeSelectedMedia={changeSelectedMedia} />} />
            <Route path="/upcoming-movies" element={<UpcomingMovies selectedMedia={selectedMedia} changeSelectedMedia={changeSelectedMedia} />} />

            <Route path="/airing-today-tVShows" element={<AiringTodayTVShows changeSelectedMedia={changeSelectedMedia}  />} />
            <Route path="/on-tv-tVShows" element={<OnTvTVShows changeSelectedMedia={changeSelectedMedia} />} />
            <Route path="/popular-tVShows" element={<PopularTVShows changeSelectedMedia={changeSelectedMedia} />} />
            <Route path="/top-rated-tVShows" element={<TopRatedTVShows changeSelectedMedia={changeSelectedMedia} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;

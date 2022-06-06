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

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/now-playing-movies" element={<NowPlayingMovies />} />
            <Route path="/popular-movies" element={<PopularMovies />} />
            <Route path="/top-rated-movies" element={<TopRatedMovies />} />
            <Route path="/upcoming-movies" element={<UpcomingMovies />} />

            <Route path="/airing-today-tVShows" element={<AiringTodayTVShows />} />
            <Route path="/on-tv-tVShows" element={<OnTvTVShows />} />
            <Route path="/popular-tVShows" element={<PopularTVShows />} />
            <Route path="/top-rated-tVShows" element={<TopRatedTVShows />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;

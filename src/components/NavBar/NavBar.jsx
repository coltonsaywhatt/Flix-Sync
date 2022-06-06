import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav className='nav'>
      <div className='nav_content'>
        <div className='sub_media'>
          <div className='nav_wrapper'>
            <img src="https://i.ibb.co/NLkL19K/Screen-Shot-2022-06-03-at-4-43-02-PM.png" alt="" />
          </div>
          <div className='search_bar'>
            <input type="search" name="" id="search" placeholder='search' />
            <button className='search-btn' type=''><i class="fa-solid fa-magnifying-glass"></i></button>
          </div>
          <div className='flex'>
            <div>
              <Link to="/movies">Movies</Link>
            </div>
            <ul className='menus'>
              <li>
                <Link to="/upcoming-movies">Upcoming</Link>
              </li>
              <li>
                <Link to="">Now Playing</Link>
              </li>
              <li>
                <Link to="">Top Rated</Link>
              </li>
            </ul>           
            &nbsp; | &nbsp;
            <Link to="/tv-shows">TV Shows</Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}</span>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
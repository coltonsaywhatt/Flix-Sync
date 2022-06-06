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

  
  const nav = document.querySelector(".nav");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
      nav.classList.add("nav--hidden");
    } else {
      nav.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
  });
  

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
          <div className='dropdown'>
            <button class="dropbtn">Movies &nbsp; 
              <i class="fa fa-caret-down"></i>
            </button>            
            <div className='dropdown-content'>
              <Link to="/popular-movies">Popular</Link>
              <Link to="/upcoming-movies">Upcoming</Link>
              <Link to="/now-playing-movies">Now Playing</Link>
              <Link to="/top-rated-movies">Top Rated</Link>
            </div>
          </div>         
          <div className='dropdown'>
            <button class="dropbtn">TV Shows &nbsp; 
              <i class="fa fa-caret-down"></i>
            </button>
            <div className='dropdown-content'>
              <Link to="/popular-tVShows">Popular</Link>
              <Link to="/airing-today-tVShows">Airing Tody</Link>
              <Link to="/on-tv-tVShows">On TV</Link>
              <Link to="/top-rated-tVShows">Top Rated</Link>
            </div>
          </div>          
          <div>
            <span>Welcome, {user.name}</span>
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link> 
          </div>         
        </div>
      </div>
    </nav>
  );
}
import React from 'react'
import './SearchBar.css'

function SearchBar({search, setSearch, handleSearch}) {
  function handleSearchChange(evt) {
    setSearch(evt.target.value);
  }
  return (
    <div className='search_bar'>
      <input type="search" value={search}onChange={handleSearchChange}  name="" id="search" placeholder='search' />
      <button className='search-btn' onClick={handleSearch}><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
  )
}

export default SearchBar
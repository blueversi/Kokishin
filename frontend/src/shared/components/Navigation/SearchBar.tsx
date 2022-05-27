import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <form action=''>
        <input
          id='searchBar'
          type='text'
          name='searchBar'
          placeholder='Wyszukaj'
        />
        <button type='submit' className='btn btn-default' title='search'>
          <i className='fas fa-search'></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

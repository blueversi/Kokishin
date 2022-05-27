import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchInput(event.target.value);
  };

  const handleSearchButtonClick = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(
      'tu bedzie logika wyszukiwania w przyszlości a narazie czyszcze stan'
    );
    setSearchInput('');
  };

  return (
    <div className='search-bar'>
      <form onSubmit={handleSearchButtonClick}>
        <input
          id='searchBar'
          type='text'
          name='searchBar'
          placeholder='Wyszukaj'
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button type='submit' className='btn btn-default' title='search'>
          <i className='fas fa-search'></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

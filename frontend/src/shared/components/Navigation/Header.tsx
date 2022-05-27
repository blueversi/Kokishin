import React from 'react';
import './Header.css';
import Logo from './Logo';
import SearchBar from './SearchBar';
import UserBar from './UserBar';

const Header = () => {
  return (
    <>
      <header>
        <Logo />
        <SearchBar />
        <UserBar />
      </header>
    </>
  );
};

export default Header;

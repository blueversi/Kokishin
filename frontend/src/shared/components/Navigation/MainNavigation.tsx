import React from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.css';

//TODO: Zrobić nawigacje
const MainNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
          <Link to={'/'}>Categories</Link>
          <Link to={'/'}>Users</Link>
          <Link to={'/'}>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;

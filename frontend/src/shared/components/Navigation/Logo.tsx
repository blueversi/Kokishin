import React from 'react';
import './Logo.css';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink className={'logo'} to='/'>
      Kokishin
    </NavLink>
  );
};

export default Logo;

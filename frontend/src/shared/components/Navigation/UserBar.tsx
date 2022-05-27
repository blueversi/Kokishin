import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserBar.css';

const UserBar = () => {
  return (
    <div className='userbar'>
      <img
        className='user-avatar'
        src='./img/userav/navbar/user-av-1.webp'
        alt='user'
      />
      <div className='user-dropdown'>
        <span className='username-dropdown-trig'>
          BlueVersi <i className='fas fa-caret-down'></i>
        </span>
        <div className='user-dropdown-content'>
          <NavLink to='/user/BlueVersi'>
            <i className='fas fa-user'></i> Profil
          </NavLink>
          <NavLink to='/user/settings'>
            <i className='fas fa-cog'></i> Ustawienia
          </NavLink>
          <NavLink to='/user/logut'>
            <i className='fas fa-sign-out-alt'></i> Wyloguj
          </NavLink>
        </div>
      </div>
      <NavLink to='/user/saved'>
        <i className='far fa-bookmark'></i>
      </NavLink>
      <NavLink to='/user/messages'>
        <i className='far fa-envelope'></i>
      </NavLink>
      <NavLink to='/articles/add'>
        <i className='fas fa-plus'></i>
      </NavLink>
    </div>
  );
};

export default UserBar;

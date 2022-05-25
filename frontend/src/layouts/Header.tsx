import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <form action=''>
            <input
              id='searchBar'
              type='text'
              name='searchBar'
              placeholder='Wyszukaj'
            />
            <button type='submit' className='btn btn-default'>
              <i className='fas fa-search'></i>
            </button>
          </form>
          <span className='logo'>
            <NavLink to='/'>Kokishin</NavLink>
          </span>
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
        </nav>
      </header>
    </>
  );
};

export default Header;

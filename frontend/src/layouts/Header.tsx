import React from 'react';

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
            <a href='index.html'>Kokishin</a>
          </span>
          <div className='userbar'>
            <img
              className='user-avatar'
              src='img/userav/navbar/user-av-1.webp'
              alt='user'
            />
            <div className='user-dropdown'>
              <span className='username-dropdown-trig'>
                BlueVersi <i className='fas fa-caret-down'></i>
              </span>
              <div className='user-dropdown-content'>
                <a href='profile.html'>
                  <i className='fas fa-user'></i> Profil
                </a>
                <a href='ustawienia.html'>
                  <i className='fas fa-cog'></i> Ustawienia
                </a>
                <a href='wyloguj.html'>
                  <i className='fas fa-sign-out-alt'></i> Wyloguj
                </a>
              </div>
            </div>
            <a href='zapisane.html'>
              <i className='far fa-bookmark'></i>
            </a>
            <a href='wiadomosci.html'>
              <i className='far fa-envelope'></i>
            </a>
            <a href='dodaj.html'>
              <i className='fas fa-plus'></i>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

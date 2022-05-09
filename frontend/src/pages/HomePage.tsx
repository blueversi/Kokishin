import React, { FC } from 'react';
import Sidebar from '../layouts/Sidebar';

const HomePage: FC = () => {
  return (
    <>
      <main>
        <div id='main-list'>
          <h2>Popularne ciekawostki</h2>

          <div className='main-list-item'>
            <div className='main-list-item-vote-bar'>
              <a href='#'>
                <i className='far fa-lightbulb'></i>
              </a>
            </div>
            <div className='main-list-item-content'>
              <h3>Przykładowy tytuł ciekaowstki</h3>
              <span className='main-list-item-author'>
                Dodane przez: <a href='#'>Azurow</a> 5 godzin temu
              </span>
              <span className='tags'> do Informatyka</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className='main-list-item-photo'>
              <img
                src='res/img/main-list/main-cow-1.webp'
                alt='obrazek do posta'
              />
            </div>
            <div className='main-list-item-footer'>
              <a href=''>
                <i className='far fa-comments'></i> 365
              </a>
              -
              <a href=''>
                <i className='fas fa-share-alt'></i> Udostępnij
              </a>
              -
              <a href=''>
                <i className='far fa-bookmark'></i> Zapisz
              </a>
              -
              <a href=''>
                <i className='far fa-flag'></i> Zgłoś
              </a>
            </div>
          </div>
        </div>
        <Sidebar />
      </main>
    </>
  );
};

export default HomePage;

import React, { useState } from 'react';
import Sidebar from '../../shared/components/Sidebar/Sidebar';

//TODO: wyrzucenie sekcji w komponenty do zrobienia kiedy będzie już podpięte mongo z danymi i będzie json do mapowania
const Profile = () => {
  const [section, setSection] = useState('BLOG');
  const profileSection = () => {
    switch (section) {
      case 'BLOG': {
        return (
          <div id='blog-container' className='profile-user-actions'>
            <div className='blog-post'>
              <div className='blog-post-content'>
                <span className='blog-post-tags'>
                  Tagi: <a href='tags/ptaki'>#ptaki</a>,{' '}
                  <a href='tags/migracje'>#migracje</a>,{' '}
                  <a href='tags/zwierzeta'>#zwierzeta</a>
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing ullamco
                  laboris nisi ut aliquip eiusmod tempor adipiscing elit, ex ea
                  commodo consequat. Uut labore et dolorepsum dolor sit
                  ametostrud exercitationsed do eiusmod tensectetur adipisc
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip eiusmod tempor
                  adipiscing elit, ex ea commodo consequat. Uut labore et
                  dolorepsum dolor sit ametostrud exercitationsed do eiusmod
                  tensectetur adipisc quis nostrud ipsum dolor sit amet,
                  consectetur adipiscing .
                </p>
              </div>
              <img className='blog-post-img' src='../img/blogposts/2.webp' />
              <div className='blog-post-footer'>
                <span className='main-list-item-author'>
                  Dodane przez: <a href='#'>Azurow</a> 5 godzin temu
                </span>
                <a href='#'>
                  <i className='far fa-comments' /> 365
                </a>
                <a href='#'>
                  <i className='fas fa-share-alt' /> Udostępnij
                </a>
                <a href='#'>
                  <i className='far fa-bookmark' /> Zapisz
                </a>
                <a href='#'>
                  <i className='far fa-flag' /> Zgłoś
                </a>
              </div>
            </div>
            <div className='blog-post'>
              <div className='blog-post-content'>
                <span className='blog-post-tags'>
                  Tagi: <a href='tags/informatyka'>#informatyka</a>,{' '}
                  <a href='tags/it'>#it</a>,{' '}
                  <a href='tags/javascript'>#javascript</a>
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip eiusmod tempor adipiscing elit, ex ea
                  commodo consequat. Uut labore et dolorepsum dolor sit
                  ametostrud exercitationsed do eiusmod tensectetur adipisc
                </p>
              </div>
              <div className='blog-post-footer'>
                <span className='main-list-item-author'>
                  Dodane przez: <a href='#'>Azurow</a> 5 godzin temu
                </span>
                <a href='#'>
                  <i className='far fa-comments' /> 365
                </a>
                <a href='#'>
                  <i className='fas fa-share-alt' /> Udostępnij
                </a>
                <a href='#'>
                  <i className='far fa-bookmark' /> Zapisz
                </a>
                <a href='#'>
                  <i className='far fa-flag' /> Zgłoś
                </a>
              </div>
            </div>
            <div className='blog-post'>
              <div className='blog-post-content'>
                <span className='blog-post-tags'>
                  Tagi: <a href='tags/informatyka'>#informatyka</a>,{' '}
                  <a href='tags/it'>#it</a>,{' '}
                  <a href='tags/javascript'>#javascript</a>
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip eiusmod tempor adipiscing elit, ex ea
                  commodo consequat. Uut labore et dolorepsum dolor sit
                  ametostrud exercitationsed do eiusmod tensectetur adipisc
                </p>
              </div>
              <img className='blog-post-img' src='../img/blogposts/1.webp' />
              <div className='blog-post-footer'>
                <span className='main-list-item-author'>
                  Dodane przez: <a href='#'>Azurow</a> 5 godzin temu
                </span>
                <a href='#'>
                  <i className='far fa-comments' /> 365
                </a>
                <a href='#'>
                  <i className='fas fa-share-alt' /> Udostępnij
                </a>
                <a href='#'>
                  <i className='far fa-bookmark' /> Zapisz
                </a>
                <a href='#'>
                  <i className='far fa-flag' /> Zgłoś
                </a>
              </div>
            </div>
          </div>
        );
      }
      case 'ADDED_ARTICLES': {
        console.log(section);
        return (
          <div id='added-container' className='profile-user-actions'>
            <div className='main-list-item'>
              <div className='main-list-item-vote-bar'>
                <a href='#'>
                  <i className='far fa-lightbulb' />
                </a>
              </div>
              <div className='main-list-item-content'>
                <h3>Przykładowy tytuł ciekaowstki</h3>
                <span className='main-list-item-author'>
                  Dodane przez: <a href='#'>Azurow</a> 5 godzin temu
                </span>
                <span className='tags'> do Informatyka</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className='main-list-item-photo'>
                <img src='../img/main-list/main-cow-1.webp' />
              </div>
              <div className='main-list-item-footer'>
                <a href='#'>
                  <i className='far fa-comments' /> 365
                </a>
                -
                <a href='#'>
                  <i className='fas fa-share-alt' /> Udostępnij
                </a>
                -
                <a href='#'>
                  <i className='far fa-bookmark' /> Zapisz
                </a>
                -
                <a href='#'>
                  <i className='far fa-flag' /> Zgłoś
                </a>
              </div>
            </div>
            <div className='main-list-item'>
              <div className='main-list-item-vote-bar'>
                <a href='#'>
                  <i className='far fa-lightbulb' />
                </a>
              </div>
              <div className='main-list-item-content'>
                <h3>Przykładowy tytuł ciekaowstki</h3>
                <span className='main-list-item-author'>
                  Dodane przez: <a href='#'>Azurow</a> 5 godzin temu
                </span>
                <span className='tags'> do Informatyka</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className='main-list-item-photo'>
                <img src='../img/main-list/main-chitizenitza-1.webp' />
              </div>
              <div className='main-list-item-footer'>
                <a href='#'>
                  <i className='far fa-comments' /> 365
                </a>
                -
                <a href='#'>
                  <i className='fas fa-share-alt' /> Udostępnij
                </a>
                -
                <a href='#'>
                  <i className='far fa-bookmark' /> Zapisz
                </a>
                -
                <a href='#'>
                  <i className='far fa-flag' /> Zgłoś
                </a>
              </div>
            </div>
            <div className='main-list-item'>
              <div className='main-list-item-vote-bar'>
                <a href='#'>
                  <i className='far fa-lightbulb' />
                </a>
              </div>
              <div className='main-list-item-content'>
                <h3>Przykładowy tytuł ciekaowstki</h3>
                <span className='main-list-item-author'>
                  Dodane przez: <a href='#'>Azurow</a> 5 godzin temu
                </span>
                <span className='tags'> do Informatyka</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className='main-list-item-photo'>
                <img src='../img/main-list/main-coast-1.webp' />
              </div>
              <div className='main-list-item-footer'>
                <a href='#'>
                  <i className='far fa-comments' /> 365
                </a>
                -
                <a href='#'>
                  <i className='fas fa-share-alt' /> Udostępnij
                </a>
                -
                <a href='#'>
                  <i className='far fa-bookmark' /> Zapisz
                </a>
                -
                <a href='#'>
                  <i className='far fa-flag' /> Zgłoś
                </a>
              </div>
            </div>
            <div className='main-list-item'>
              <div className='main-list-item-vote-bar'>
                <a href='#'>
                  <i className='far fa-lightbulb' />
                </a>
              </div>
              <div className='main-list-item-content'>
                <h3>Przykładowy tytuł ciekaowstki</h3>
                <span className='main-list-item-author'>
                  Dodane przez: <a href='#'>Azurow</a> 5 godzin temu
                </span>
                <span className='tags'> do Informatyka</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className='main-list-item-photo'>
                <img src='../img/main-list/main-finedining-1.webp' />
              </div>
              <div className='main-list-item-footer'>
                <a href='#'>
                  <i className='far fa-comments' /> 365
                </a>
                -
                <a href='#'>
                  <i className='fas fa-share-alt' /> Udostępnij
                </a>
                -
                <a href='#'>
                  <i className='far fa-bookmark' /> Zapisz
                </a>
                -
                <a href='#'>
                  <i className='far fa-flag' /> Zgłoś
                </a>
              </div>
            </div>
          </div>
        );
      }
      case 'ACTIONS': {
        console.log(section);
        return (
          <div id='actions-container' className='profile-user-actions'>
            <div className='main-list-item'>
              <div className='main-list-item-vote-bar'>
                <a href='#'>
                  <i className='far fa-lightbulb' />
                </a>
              </div>
              <div className='main-list-item-content'>
                <h3>Przykładowy tytuł ciekaowstki</h3>
                <span className='main-list-item-author'>
                  Dodane przez: <a href='#'>Azurow</a> 5 godzin temu
                </span>
                <span className='tags'> do Informatyka</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className='main-list-item-photo'>
                <img src='../img/main-list/main-default-1.webp' />
              </div>
              <div className='main-list-item-footer'>
                <a href='#'>
                  <i className='far fa-comments' /> 365
                </a>
                -
                <a href='#'>
                  <i className='fas fa-share-alt' /> Udostępnij
                </a>
                -
                <a href='#'>
                  <i className='far fa-bookmark' /> Zapisz
                </a>
                -
                <a href='#'>
                  <i className='far fa-flag' /> Zgłoś
                </a>
              </div>
            </div>
            <div className='blog-post'>
              <div className='blog-post-content'>
                <span className='blog-post-tags'>
                  Tagi: <a href='tags/ptaki'>#ptaki</a>,{' '}
                  <a href='tags/migracje'>#migracje</a>,{' '}
                  <a href='tags/zwierzeta'>#zwierzeta</a>
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing ullamco
                  laboris nisi ut aliquip eiusmod tempor adipiscing elit, ex ea
                  commodo consequat. Uut labore et dolorepsum dolor sit
                  ametostrud exercitationsed do eiusmod tensectetur adipisc
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip eiusmod tempor
                  adipiscing elit, ex ea commodo consequat. Uut labore et
                  dolorepsum dolor sit ametostrud exercitationsed do eiusmod
                  tensectetur adipisc quis nostrud ipsum dolor sit amet,
                  consectetur adipiscing .
                </p>
              </div>
              <img className='blog-post-img' src='../img/blogposts/2.webp' />
              <div className='blog-post-footer'>
                <span className='main-list-item-author'>
                  Dodane przez: <a href='#'>Azurow</a> 5 godzin temu
                </span>
                <a href='#'>
                  <i className='far fa-comments' /> 365
                </a>
                <a href='#'>
                  <i className='fas fa-share-alt' /> Udostępnij
                </a>
                <a href='#'>
                  <i className='far fa-bookmark' /> Zapisz
                </a>
                <a href='#'>
                  <i className='far fa-flag' /> Zgłoś
                </a>
              </div>
            </div>
            <div className='main-list-item'>
              <div className='main-list-item-vote-bar'>
                <a href='#'>
                  <i className='far fa-lightbulb' />
                </a>
              </div>
              <div className='main-list-item-content'>
                <h3>Przykładowy tytuł ciekaowstki</h3>
                <span className='main-list-item-author'>
                  Dodane przez: <a href='#'>Azurow</a> 5 godzin temu
                </span>
                <span className='tags'> do Informatyka</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className='main-list-item-photo'>
                <img src='../img/main-list/main-venice-1.webp' />
              </div>
              <div className='main-list-item-footer'>
                <a href='#'>
                  <i className='far fa-comments' /> 365
                </a>
                -
                <a href='#'>
                  <i className='fas fa-share-alt' /> Udostępnij
                </a>
                -
                <a href='#'>
                  <i className='far fa-bookmark' /> Zapisz
                </a>
                -
                <a href='#'>
                  <i className='far fa-flag' /> Zgłoś
                </a>
              </div>
            </div>
            <div className='blog-post'>
              <div className='blog-post-content'>
                <span className='blog-post-tags'>
                  Tagi: <a href='tags/informatyka'>#informatyka</a>,{' '}
                  <a href='tags/it'>#it</a>,{' '}
                  <a href='tags/javascript'>#javascript</a>
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip eiusmod tempor adipiscing elit, ex ea
                  commodo consequat. Uut labore et dolorepsum dolor sit
                  ametostrud exercitationsed do eiusmod tensectetur adipisc
                </p>
              </div>
              <div className='blog-post-footer'>
                <span className='main-list-item-author'>
                  Dodane przez: <a href='#'>Azurow</a> 5 godzin temu
                </span>
                <a href='#'>
                  <i className='far fa-comments' /> 365
                </a>
                <a href='#'>
                  <i className='fas fa-share-alt' /> Udostępnij
                </a>
                <a href='#'>
                  <i className='far fa-bookmark' /> Zapisz
                </a>
                <a href='#'>
                  <i className='far fa-flag' /> Zgłoś
                </a>
              </div>
            </div>
            <div className='main-list-item'>
              <div className='main-list-item-vote-bar'>
                <a href='#'>
                  <i className='far fa-lightbulb' />
                </a>
              </div>
              <div className='main-list-item-content'>
                <h3>Przykładowy tytuł ciekaowstki</h3>
                <span className='main-list-item-author'>
                  Dodane przez: <a href='#'>Azurow</a> 5 godzin temu
                </span>
                <span className='tags'> do Informatyka</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className='main-list-item-photo'>
                <img src='../img/main-list/main-france-1.webp' />
              </div>
              <div className='main-list-item-footer'>
                <a href='#'>
                  <i className='far fa-comments' /> 365
                </a>
                -
                <a href='#'>
                  <i className='fas fa-share-alt' /> Udostępnij
                </a>
                -
                <a href='#'>
                  <i className='far fa-bookmark' /> Zapisz
                </a>
                -
                <a href='#'>
                  <i className='far fa-flag' /> Zgłoś
                </a>
              </div>
            </div>
          </div>
        );
      }
      case 'SAVED': {
        console.log(section);
        return (
          <div id='saved-container' className='profile-user-actions'>
            <div className='main-list-item'>
              <div className='main-list-item-vote-bar'>
                <a href='#'>
                  <i className='far fa-lightbulb' />
                </a>
              </div>
              <div className='main-list-item-content'>
                <h3>Przykładowy tytuł ciekaowstki</h3>
                <span className='main-list-item-author'>
                  Dodane przez: <a href='#'>Azurow</a> 5 godzin temu
                </span>
                <span className='tags'> do Informatyka</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className='main-list-item-photo'>
                <img src='../img/main-list/main-france-1.webp' />
              </div>
              <div className='main-list-item-footer'>
                <a href='#'>
                  <i className='far fa-comments' /> 365
                </a>
                -
                <a href='#'>
                  <i className='fas fa-share-alt' /> Udostępnij
                </a>
                -
                <a href='#'>
                  <i className='far fa-bookmark' /> Zapisz
                </a>
                -
                <a href='#'>
                  <i className='far fa-flag' /> Zgłoś
                </a>
              </div>
            </div>
            <div className='main-list-item'>
              <div className='main-list-item-vote-bar'>
                <a href='#'>
                  <i className='far fa-lightbulb' />
                </a>
              </div>
              <div className='main-list-item-content'>
                <h3>Przykładowy tytuł ciekaowstki</h3>
                <span className='main-list-item-author'>
                  Dodane przez: <a href='#'>Azurow</a> 5 godzin temu
                </span>
                <span className='tags'> do Informatyka</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className='main-list-item-photo'>
                <img src='../img/main-list/main-default-1.webp' />
              </div>
              <div className='main-list-item-footer'>
                <a href='#'>
                  <i className='far fa-comments' /> 365
                </a>
                -
                <a href='#'>
                  <i className='fas fa-share-alt' /> Udostępnij
                </a>
                -
                <a href='#'>
                  <i className='far fa-bookmark' /> Zapisz
                </a>
                -
                <a href='#'>
                  <i className='far fa-flag' /> Zgłoś
                </a>
              </div>
            </div>
            <div className='main-list-item'>
              <div className='main-list-item-vote-bar'>
                <a href='#'>
                  <i className='far fa-lightbulb' />
                </a>
              </div>
              <div className='main-list-item-content'>
                <h3>Przykładowy tytuł ciekaowstki</h3>
                <span className='main-list-item-author'>
                  Dodane przez: <a href='#'>Azurow</a> 5 godzin temu
                </span>
                <span className='tags'> do Informatyka</span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className='main-list-item-photo'>
                <img src='../img/main-list/main-venice-1.webp' />
              </div>
              <div className='main-list-item-footer'>
                <a href='#'>
                  <i className='far fa-comments' /> 365
                </a>
                -
                <a href='#'>
                  <i className='fas fa-share-alt' /> Udostępnij
                </a>
                -
                <a href='#'>
                  <i className='far fa-bookmark' /> Zapisz
                </a>
                -
                <a href='#'>
                  <i className='far fa-flag' /> Zgłoś
                </a>
              </div>
            </div>
          </div>
        );
      }
    }
  };

  return (
    <main>
      {/*---------------------------*/}
      {/*--------PROFILE INFO-------*/}
      {/*---------------------------*/}
      <div className='profile-info'>
        {/*---------------------------*/}
        {/*------PROFILE DETAILS------*/}
        {/*---------------------------*/}
        <div className='profile-details'>
          <img
            className='profile-avatar'
            src='../img/userprofile/user-av1.webp'
            alt='avatar'
          />
          <div className='profile-description'>
            <p>
              <i className='fas fa-user' /> BlueVersi
            </p>
            <p>
              <i className='fas fa-map-marker-alt' /> Warszawa
            </p>
            <p>
              <i className='fas fa-link' /> https://github.com/blueversi
            </p>
            <p>
              <i className='fas fa-feather-alt' /> Student ostatniego roku
              informaatyki zafascynowany wszystkim co związane z cyfrowym
              światem.
            </p>
          </div>
          <div className='profile-buttons'>
            <button>Obserwuj</button>
            <button>Wyślij wiadomość</button>
            <button>Zablokuj</button>
            <button>Zgłoś użytkownika</button>
          </div>
        </div>
        {/*---------------------------*/}
        {/*----PROFILE ACHIVMENTS-----*/}
        {/*---------------------------*/}
        <div className='profile-achivments'>
          <div className='achivment-box'>
            <img
              src='../img/achivments/default.webp'
              className='achivment-img'
            />
            <span className='achivment-title'>Stary Wyjadacz</span>
            <span className='achivment-desc'>Za 7 lat na portalu.</span>
          </div>
          <div className='achivment-box'>
            <img
              src='../img/achivments/default.webp'
              className='achivment-img'
            />
            <span className='achivment-title'>Poczatkujący Komentator</span>
            <span className='achivment-desc'>Za 100 Komentarzy</span>
          </div>
          <div className='achivment-box'>
            <img
              src='../img/achivments/default.webp'
              className='achivment-img'
            />
            <span className='achivment-title'>Odznaka Społeczności</span>
            <span className='achivment-desc'>
              Za 100 dodanych ciekawostek, które trafiły na strone główną
            </span>
          </div>
          <div className='achivment-box'>
            <img
              src='../img/achivments/default.webp'
              className='achivment-img'
            />
            <span className='achivment-title'>Fizyk</span>
            <span className='achivment-desc'>
              Za dodanie 50 ciekawostek do działu "Fizyka"
            </span>
          </div>
          <div className='achivment-box'>
            <img
              src='../img/achivments/default.webp'
              className='achivment-img'
            />
            <span className='achivment-title'>Początkujący Bloger</span>
            <span className='achivment-desc'>
              Za dodanie pierwszego postu na bloga
            </span>
          </div>
        </div>
        {/*---------------------------*/}
        {/*---PROFILE USER ACTIONS----*/}
        {/*---------------------------*/}
        <div className='porifle-action-switcher'>
          <button
            id='blog-button'
            className='active'
            onClick={() => setSection('BLOG')}
          >
            Blog
          </button>
          <button
            id='added-button'
            onClick={() => setSection('ADDED_ARTICLES')}
          >
            Dodane ciekawostki
          </button>
          <button id='actions-button' onClick={() => setSection('ACTIONS')}>
            Akcje
          </button>
          <button id='saved-button' onClick={() => setSection('SAVED')}>
            Zapisane
          </button>
        </div>

        {profileSection()}
      </div>
      {/*PROFILE INFO DIV*/}
      <Sidebar />
    </main>
  );
};

export default Profile;

import React from 'react';
import './Sidebar.css';

//todo: zmienić na aside i wywalic sidebar z maina, zamknac po prostu we wraperze

const Sidebar = () => {
  return (
    <aside>
      <div className='sidebar-item'>
        <br />
        <a href='/About'>O nas</a>
        <br />
        <a href='/Ads'>Reklama</a>
        <br />
        <a href='/Privacy_Politic'>Polityka prywatności</a>
        <br />
        <a href='/Contact'>Kontakt</a>
        <br />
        <br />
        Kokishin <i className='far fa-copyright'></i> 2021. Wszelkie prawa
        zastrzeżone.
      </div>
    </aside>
  );
};

export default Sidebar;

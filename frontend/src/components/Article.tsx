import React from 'react';
import { NavLink } from 'react-router-dom';

interface ArticleProps {
  id: string;
  tiitle: string;
  description: string;
  author: string;
  date: string;
  img: string;
  category: string;
  comments: number;
}

const Article = (props: ArticleProps) => {
  return (
    <div className='main-list-item'>
      <div className='main-list-item-vote-bar'>
        {/* TODO: Zamiast navlinka button z handlerem  ale to na etapie jak juz bd mongo śmigać z danymi */}
        <NavLink to='/'>
          <i className='far fa-lightbulb'></i>
        </NavLink>
      </div>
      <div className='main-list-item-content'>
        <h3>{props.tiitle}</h3>
        <span className='main-list-item-author'>
          Dodane przez: <NavLink to='/user/Blueversi'>{props.author} </NavLink>
          Dnia: {props.date}
          do
          <NavLink to={`./categories/${props.category}`}>
            {props.category}
          </NavLink>
        </span>
        <p>{props.description}</p>
      </div>
      <div className='main-list-item-photo'>
        <img src={props.img} alt='obrazek do posta' />
      </div>
      <div className='main-list-item-footer'>
        <NavLink to={`./articles/data/nazwa#comments`}>
          <i className='far fa-comments'></i> 365
        </NavLink>
        {/* Dla poniższych w przyszłości handlery zamiast navlinkó na etapie mongo z danymi */}
        <NavLink to={`./articles/data/nazwa#share`}>
          <i className='fas fa-share-alt'></i> Udostępnij
        </NavLink>
        <NavLink to={`./articles/data/nazwa#save`}>
          <i className='far fa-bookmark'></i> Zapisz
        </NavLink>
        <NavLink to={`./user/report`}>
          <i className='far fa-flag'></i> Zgłoś
        </NavLink>
      </div>
    </div>
  );
};

export default Article;

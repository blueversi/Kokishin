import React from 'react';

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
        <a href='#'>
          <i className='far fa-lightbulb'></i>
        </a>
      </div>
      <div className='main-list-item-content'>
        <h3>{props.tiitle}</h3>
        <span className='main-list-item-author'>
          Dodane przez: <a href='#'>{props.author}</a>Dnia: {props.date}
        </span>
        <span className='tags'> do {props.category}</span>
        <p>{props.description}</p>
      </div>
      <div className='main-list-item-photo'>
        <img src={props.img} alt='obrazek do posta' />
      </div>
      <div className='main-list-item-footer'>
        <a href='#'>
          <i className='far fa-comments'></i> 365
        </a>
        -
        <a href='#'>
          <i className='fas fa-share-alt'></i> Udostępnij
        </a>
        -
        <a href='#'>
          <i className='far fa-bookmark'></i> Zapisz
        </a>
        -
        <a href='#'>
          <i className='far fa-flag'></i> Zgłoś
        </a>
      </div>
    </div>
  );
};

export default Article;

import React, { useState, useEffect } from 'react';
import { getAllArticles } from '../../APIcalls/ArticlesCalls';
import Article from '../../articles/components/Article';
import Sidebar from '../../layouts/Sidebar';

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((response: any) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <>
      <main>
        <div id='main-list'>
          <h2>Popularne ciekawostki</h2>
          {articles.map((item: any) => {
            return (
              <Article
                key={item.id}
                id={item.id}
                tiitle={item.title}
                description={item.description}
                author={item.author}
                date={item.date}
                img={item.img}
                category={'Informatyka'}
                comments={item.comments}
              />
            );
          })}
        </div>
        <Sidebar />
      </main>
    </>
  );
};

export default HomePage;

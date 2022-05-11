import axios from 'axios';

export const getAllArticles = () => {
  return axios.get('http://localhost:5000/articles/').catch(function (error) {
    console.log('GET ERROR' + '\n' + error);
  });
};

import axios from 'axios';

export const getAllArticles = () => {
  return axios.get('http://localhost:5000/articles/');
};

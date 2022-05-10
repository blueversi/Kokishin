import axios from 'axios';

export const getAllArticles = () => {
  return axios
    .get('http://localhost:5000/articles/')
    .then(function (response) {
      console.log('GET SUCCES' + '\n' + response);
    })
    .catch(function (error) {
      console.log('GET ERROR' + '\n' + error);
    });
};

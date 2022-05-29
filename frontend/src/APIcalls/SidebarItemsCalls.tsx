import axios from 'axios';

export const getSidebarItems = () => {
  return axios
    .get('http://localhost:5000/sidebarItems/')
    .catch(function (error) {
      console.log('GET ERROR' + '\n' + error);
    });
};

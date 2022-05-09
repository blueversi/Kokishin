var express = require('express');
var router = express.Router();

/* TMP */
const articles = [
  {
    id: 1,
    title: 'Przykładowy tytuł ciekaowstki',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Azurow',
    date: '2022-03-14',
    img: 'res/img/main-list/main-cow-1.webp',
    comments: 365,
  },
  {
    id: 2,
    title: 'Przykładowy tytuł ciekaowstki',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Azurow',
    date: '2022-03-14',
    img: 'res/img/main-list/main-cow-1.webp',
    comments: 365,
  },
  {
    id: 3,
    title: 'Przykładowy tytuł ciekaowstki',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Azurow',
    date: '2022-03-14',
    img: 'res/img/main-list/main-cow-1.webp',
    comments: 365,
  },
  {
    id: 4,
    title: 'Przykładowy tytuł ciekaowstki',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Azurow',
    date: '2022-03-14',
    img: 'res/img/main-list/main-cow-1.webp',
    comments: 365,
  },
  {
    id: 5,
    title: 'Przykładowy tytuł ciekaowstki',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Azurow',
    date: '2022-03-14',
    img: 'res/img/main-list/main-cow-1.webp',
    comments: 365,
  },
  {
    id: 6,
    title: 'Przykładowy tytuł ciekaowstki',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Azurow',
    date: '2022-03-14',
    img: 'res/img/main-list/main-cow-1.webp',
    comments: 365,
  },
  {
    id: 7,
    title: 'Przykładowy tytuł ciekaowstki',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Azurow',
    date: '2022-03-14',
    img: 'res/img/main-list/main-cow-1.webp',
    comments: 365,
  },
  {
    id: 8,
    title: 'Przykładowy tytuł ciekaowstki',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Azurow',
    date: '2022-03-14',
    img: 'res/img/main-list/main-cow-1.webp',
    comments: 365,
  },
  {
    id: 9,
    title: 'Przykładowy tytuł ciekaowstki',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 'Azurow',
    date: '2022-03-14',
    img: 'res/img/main-list/main-cow-1.webp',
    comments: 365,
  },
];

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.status(200).json(articles);
});

module.exports = router;

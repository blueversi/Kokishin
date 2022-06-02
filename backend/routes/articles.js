var express = require('express');
var router = express.Router();
const HttpError = require('../models/http-error');

/* TMP */
const articles = [
  {
    id: 1,
    title: 'Przykładowy tytuł ciekaowstki',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 1,
    date: '2022-03-14',
    img: 'img/main-list/main-france-1.webp',
    comments: 365,
  },
  {
    id: 2,
    title: 'Przykładowy tytuł ciekaowstki',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 2,
    date: '2022-03-14',
    img: 'img/main-list/main-japan-1.webp',
    comments: 365,
  },
  {
    id: 3,
    title: 'Przykładowy tytuł ciekaowstki',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 3,
    date: '2022-03-14',
    img: 'img/main-list/main-flamming-1.webp',
    comments: 365,
  },
  {
    id: 4,
    title: 'Przykładowy tytuł ciekaowstki',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 1,
    date: '2022-03-14',
    img: 'img/main-list/main-venice-1.webp',
    comments: 365,
  },
  {
    id: 5,
    title: 'Przykładowy tytuł ciekaowstki',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 4,
    date: '2022-03-14',
    img: 'img/main-list/main-chitizenitza-1.webp',
    comments: 365,
  },
  {
    id: 6,
    title: 'Przykładowy tytuł ciekaowstki',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 2,
    date: '2022-03-14',
    img: 'img/main-list/main-default-1.webp',
    comments: 365,
  },
  {
    id: 7,
    title: 'Przykładowy tytuł ciekaowstki',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 2,
    date: '2022-03-14',
    img: 'img/main-list/main-finedining-1.webp',
    comments: 365,
  },
  {
    id: 8,
    title: 'Przykładowy tytuł ciekaowstki',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 3,
    date: '2022-03-14',
    img: 'img/main-list/main-coast-1.webp',
    comments: 365,
  },
  {
    id: 9,
    title: 'Przykładowy tytuł ciekaowstki',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    author: 4,
    date: '2022-03-14',
    img: 'img/main-list/main-cow-1.webp',
    comments: 365,
  },
];

/* GET all articles */
router.get('/', function (req, res, next) {
  res.status(200).json(articles);
});

/* GET article by id */
router.get('/:aid', function (req, res, next) {
  const articleId = req.params.aid;
  const article = articles.find((a) => {
    return a.id == articleId;
  });

  if (!article) {
    throw new HttpError(
      `Could not find a article with ID = [${articleId}]`,
      404
    );
  }
  res.status(200).json(article);
});

/* GET user articles */
router.get('/user/:uid', function (req, res, next) {
  const userId = req.params.uid;
  const userArticles = articles.filter((a) => {
    return a.author == userId;
  });

  if (!userArticles.length) {
    throw new HttpError(
      `Could not find a article for user with ID = [${userId}]`,
      404
    );
  }
  res.status(200).json(userArticles);
});

module.exports = router;

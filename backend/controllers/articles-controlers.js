const HttpError = require('../models/http-error');
const { body, validationResult } = require('express-validator');
const Article = require('../models/article.js');

/* TMP */
var articles = [
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
    img: 'img/main-list/main- -1.webp',
    comments: 365,
  },
];

/* GET all articles */
const getAllArticles = async (req, res, next) => {
  let articles;

  try {
    articles = await Article.find();
  } catch (err) {
    const error = new HttpError(
      `Something went wrong. Cannot get articles.`,
      500
    );
    return next(error);
  }
  res.status(200).json(articles);
};

/* GET article by id */
const getArticleById = async (req, res, next) => {
  const articleId = req.params.aid;
  let article;
  try {
    article = await Article.findById(articleId);
  } catch (err) {
    const error = new HttpError(
      `Something went wrong. Could not find a article with ID = [${articleId}]`,
      500
    );
    return next(error);
  }
  if (!article) {
    const error = new HttpError(
      `Could not find a article with ID = [${articleId}]`,
      404
    );

    return next(error);
  }
  res.status(200).json({ article: article.toObject({ getters: true }) });
};

/* GET user articles */
const getUserArticles = async (req, res, next) => {
  const userId = req.params.uid;
  let articles;

  try {
    articles = await Article.find({ author: userId });
  } catch (err) {
    const error = new HttpError(
      `Something went wrong. Cannot get articles.`,
      500
    );
    return next(error);
  }

  res.status(200).json(articles);
};

/* POST create new article */
const createArticle = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data', 422);
  }

  const { title, description, author, date, img } = req.body;

  const createdArticle = new Article({ title, description, author, date, img });

  try {
    await createdArticle.save();
  } catch (err) {
    const error = new HttpError(
      'Create article failed. Please check your input data.',
      500
    );
    return next(error);
  }
  res.status(201).json({ article: createdArticle });
};

/* PATCH update existing article */
const updateArticle = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data', 422);
  }

  const articleId = req.params.aid;
  const { title, description } = req.body;

  const updateArticle = { ...articles.find((a) => a.id == articleId) };
  const articleIndex = articles.findIndex((a) => a.id == articleId);

  updateArticle.title = title;
  updateArticle.description = description;

  articles[articleIndex] = updateArticle;

  res.status(200).json({ article: updateArticle });
};

/* DELETE existing article */
const deleteArticle = async (req, res, next) => {
  const articleId = req.params.aid;

  let article;

  try {
    article = await Article.findByIdAndDelete(articleId);
  } catch (err) {
    const error = new HttpError(
      `Something went wrong. Cannot delete article.`,
      500
    );
    return next(error);
  }

  res.status(200).json({ message: 'Article deleted' });
};

exports.getAllArticles = getAllArticles;
exports.getArticleById = getArticleById;
exports.getUserArticles = getUserArticles;
exports.createArticle = createArticle;
exports.updateArticle = updateArticle;
exports.deleteArticle = deleteArticle;

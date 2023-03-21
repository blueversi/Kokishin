const HttpError = require('../models/http-error');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const Article = require('../models/article.js');
const User = require('../models/user');

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
  res.status(200).json({
    articles: articles.map((article) => article.toObject({ getters: true })),
  });
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
  let userWithArticles;
  try {
    userWithArticles = await User.findById(userId).populate('articles');
  } catch (err) {
    const error = new HttpError(
      `Something went wrong. Cannot get articles.`,
      500
    );
    return next(error);
  }
  if (userWithArticles.articles.length === 0) {
    const error = new HttpError(`Cannot get articles for this user id.`, 404);
    return next(error);
  }

  res.status(200).json({
    articles: userWithArticles.articles.map((article) =>
      article.toObject({ getters: true })
    ),
  });
};

/* POST create new article */
const createArticle = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new HttpError(
      'Invalid inputs passed, please check your data',
      422
    );
    return next(error);
  }

  const { title, description, author, date, img } = req.body;

  const createdArticle = new Article({ title, description, author, date, img });

  let user;
  try {
    user = await User.findById(author);
  } catch (err) {
    const error = new HttpError('Creating place faild, try again', 500);
    return next(error);
  }

  if (!user) {
    const error = new HttpError('Could not find that user', 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdArticle.save({ session: sess });
    user.articles.push(createdArticle);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    console.log(err);
    const error = new HttpError(
      'Create article failed. Please check your input data.',
      500
    );
    return next(error);
  }

  res.status(201).json({ article: createdArticle });
};

/* PATCH update existing article */
const updateArticle = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new HttpError(
      'Invalid inputs passed, please check your data' + errors,
      422
    );
    return next(error);
  }

  const articleId = req.params.aid;
  const { title, description } = req.body;

  let article;
  try {
    article = await Article.findById(articleId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update article',
      500
    );
    return next(error);
  }

  article.title = title;
  article.description = description;

  try {
    await article.save();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not update article',
      500
    );
    return next(error);
  }

  res.status(200).json({ article: article.toObject({ getters: true }) });
};

/* DELETE existing article */
const deleteArticle = async (req, res, next) => {
  const articleId = req.params.aid;

  let article;

  try {
    article = await Article.findById(articleId).populate('author');
  } catch (err) {
    const error = new HttpError(
      `Something went wrong. Cannot delete article.`,
      500
    );
    return next(error);
  }

  if (!article) {
    const error = new HttpError('Could not find article with this id. ', 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await article.remove({ session: sess });
    article.author.articles.pull(article);
    await article.author.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong. Cannot delete article.',
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

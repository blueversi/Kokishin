var express = require('express');
var router = express.Router();
const HttpError = require('../models/http-error');
const articlesController = require('../controllers/articles-controlers');

/* GET all articles */
router.get('/', articlesController.getAllArticles);

/* GET article by id */
router.get('/:aid', articlesController.getArticleById);

/* GET user articles */
router.get('/user/:uid', articlesController.getUserArticles);

module.exports = router;

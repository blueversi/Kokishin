const express = require('express');
const { check } = require('express-validator');
const articlesController = require('../controllers/articles-controlers');
const router = express.Router();

/* GET all articles */
router.get('/', articlesController.getAllArticles);

/* GET article by id */
router.get('/:aid', articlesController.getArticleById);

/* GET user articles */
router.get('/user/:uid', articlesController.getUserArticles);

/* POST new article*/
router.post(
  '/',
  [
    check('title').not().isEmpty(),
    check('description').isLength({ min: 5 }),
    check('author').not().isEmpty().isNumeric(),
    check('title').not().isEmpty(),
    check('img').not().isEmpty(),
  ],
  articlesController.createArticle
);

/* PATCH update existing article*/
router.patch(
  '/:aid',
  [check('title').not().isEmpty(), check('description').isLength({ min: 5 })],
  articlesController.updateArticle
);

/* POST delete article*/
router.delete('/:aid', articlesController.deleteArticle);

module.exports = router;

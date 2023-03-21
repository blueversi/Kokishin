const express = require('express');
const { check } = require('express-validator');
const usersController = require('../controllers/users-controllers');
const router = express.Router();

/* GET all users */
router.get('/', usersController.getAllUsers);

/* GET user by id */
router.get('/:uid', usersController.getUserById);

/* GET user articles */
// router.get('/user/:uid', usersController.getUserArticles);

/* POST new user*/
router.post(
  '/signup',
  [
    check('login').not().isEmpty().isLength({ min: 5 }),
    check('name').isLength({ min: 5 }),
    check('email').not().isEmpty().isEmail(),
    check('password').not().isEmpty().isLength({ min: 8 }),
  ],
  usersController.signup
);

/* POST login user*/
router.post(
  '/login',
  [
    check('login').not().isEmpty().isLength({ min: 5 }),
    check('password').not().isEmpty(),
  ],
  usersController.login
);

// /* PATCH update existing user*/
// router.patch(
//   '/:uid',
//   [check('title').not().isEmpty(), check('description').isLength({ min: 5 })],
//   usersController.updateUser
// );

// /* POST delete user*/
// router.delete('/:uid', usersController.deleteUser);

module.exports = router;

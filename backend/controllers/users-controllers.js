const HttpError = require('../models/http-error');
const { body, validationResult } = require('express-validator');
const User = require('../models/user');

const getAllUsers = async (req, res, next) => {
  let users;

  try {
    users = await User.find({}, '-password');
  } catch (err) {
    const error = new HttpError('There are no users in database', 404);
    return next(error);
  }

  res.status(200).json({
    users: users.map((user) => user.toObject({ getters: true })),
  });
};

const getUserById = async (req, res, next) => {
  const userId = req.params.uid;
  let user;

  try {
    user = await User.findById(userId, '-password');
  } catch (err) {
    const error = new HttpError(
      `Something went wrong. Could not find a user with ID = [${userId}]`,
      404
    );
    return next(error);
  }
  //
  if (!user) {
    const error = new HttpError(
      `Could not find a user with ID = [${userId}]`,
      404
    );
    return next(error);
  }

  res.status(200).json({ user: user.toObject({ getters: true }) });
};

// const getUserArticles = (req, res, next) => {};

const signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new HttpError(
      'Invalid inputs passed, please check your data',
      422
    );
    return next(error);
  }
  const { login, name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later',
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      'User exists already, please login instead',
      422
    );
    return next(error);
  }

  const createdUser = new User({
    login,
    name,
    email,
    password,
    image: 'https://i.imgur.com/DqS2TVn.jpeg',
    articles: [],
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError(
      'Create user failed. Please check your input data.' + err,
      500
    );
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      'Logging in failed, please try again later',
      500
    );
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError(
      'Invalid credentials, could not log you in',
      401
    );
    return next(error);
  }

  res.json({ message: 'Logged in' });
};

// const updateUser = (req, res, next) => {};

// const deleteUser = (req, res, next) => {};

exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
// exports.getUserArticles = getUserArticles;
exports.signup = signup;
exports.login = login;
// exports.updateUser = updateUser;
// exports.deleteUser = deleteUser;

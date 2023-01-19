const express = require('express');
const { check } = require('express-validator');
const sidebarController = require('../controllers/sidebar-controlers');
const router = express.Router();

/* GET All sidebar items. */
router.get('/', sidebarController.getAllSidebarItems);

/* POST add sidebar item */
router.post(
  '/',
  [check('title').not().isEmpty(), check('content').not().isEmpty()],
  sidebarController.createSidebarItem
);

module.exports = router;

var express = require('express');
const { check } = require('express-validator');
const sidebarController = require('../controllers/sidebar-controlers');
var router = express.Router();

/* GET All sidebar items. */
router.get('/', sidebarController.getAllSidebarItems);

module.exports = router;

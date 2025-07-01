const express = require('express');
const router = express.Router();

const {createNewItem} = require('../controllers/itemController');

// Route to create a new item
router.post('/', createNewItem);

module.exports = router;
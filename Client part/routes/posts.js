const express = require('express');

const postController = require('../controllers/posts')

const router = express.Router();

router.get('/', postController.find)
router.get('/posts/:_id', postController.findOne)

module.exports = router

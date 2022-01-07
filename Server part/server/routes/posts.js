const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts');

router.get('/posts', postsController.find);

router.get('/posts/:_id', postsController.findOne);

router.post('/posts', postsController.create);

router.patch('/posts/:_id', postsController.update);

router.delete('/posts/:_id', postsController.remove);

module.exports = router
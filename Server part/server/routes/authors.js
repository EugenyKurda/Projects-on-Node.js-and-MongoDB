const express = require('express');
const router = express.Router();

const authorsController = require('../controllers/authors');

router.get('/authors', authorsController.find);

router.get('/authors/:_id', authorsController.findOne);

router.post('/authors', authorsController.create);

router.patch('/authors/:_id', authorsController.update);

router.delete('/authors/:_id', authorsController.remove);

module.exports = router
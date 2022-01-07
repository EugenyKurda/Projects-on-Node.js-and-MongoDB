const express = require('express');
const router = express.Router();

const categoriesController = require('../controllers/categories');

router.get('/categories', categoriesController.find);

router.get('/categories/:_id', categoriesController.findOne);

router.post('/categories', categoriesController.create);

router.patch('/categories/:_id', categoriesController.update);

router.delete('/categories/:_id', categoriesController.remove);

module.exports = router
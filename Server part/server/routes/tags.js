const express = require('express');
const router = express.Router();

const tagsController = require('../controllers/tags');

router.get('/tags', tagsController.find);

router.get('/tags/:_id', tagsController.findOne);

router.post('/tags', tagsController.create);

router.patch('/tags/:_id', tagsController.update);

router.delete('/tags/:_id', tagsController.remove);

module.exports = router
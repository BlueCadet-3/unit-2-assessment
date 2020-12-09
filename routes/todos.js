var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');
var todo = require('../data/todos');

router.get('/', todosCtrl.index);
router.post('/', todosCtrl.create);
router.delete('/:id', todosCtrl.delete);

module.exports = router;

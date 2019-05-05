var express = require('express');
var router = express.Router();

var books_controller = require('../controllers//books')

/* GET home page. */
router.get('/list', books_controller.list)
router.post('/add',books_controller.add)
router.get('/delate',books_controller.remove)
router.get('/listone',books_controller.listone)
router.post('/edit',books_controller.edit)

module.exports = router; 
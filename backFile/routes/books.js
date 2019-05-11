var express = require('express');
var router = express.Router();
var fileUpload = require('../fileUpload/fileUpload')
var books_controller = require('../controllers/books')

/* GET home page. */
router.get('/listAll', books_controller.listAll)
router.get('/list', books_controller.list)
router.post('/add',books_controller.add)
router.get('/delate',books_controller.remove)
router.get('/listone',books_controller.listone)
router.post('/edit',books_controller.edit)

module.exports = router; 
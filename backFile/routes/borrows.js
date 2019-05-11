var express = require('express');
var router = express.Router();
var borrow_controller = require('../controllers/borrows')

/* GET home page. */
router.get('/listAll', borrow_controller.listAll)
router.get('/list', borrow_controller.list)
router.post('/add',borrow_controller.add)

module.exports = router; 
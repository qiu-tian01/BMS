var express = require('express');
var router = express.Router();
var borrow_controller = require('../controllers/borrows')

/* GET home page. */
router.get('/listAll', borrow_controller.listAll)
router.get('/list', borrow_controller.list)
router.post('/add',borrow_controller.add)
router.post('/edit',borrow_controller.edit)
router.get('/delate',borrow_controller.remove)
module.exports = router; 
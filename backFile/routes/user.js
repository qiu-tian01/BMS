var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user')

/* GET home page. */
router.get('/listAll', user_controller.listAll)
router.get('/list', user_controller.list)
router.post('/add',user_controller.add)
router.get('/delate',user_controller.remove)
router.get('/listone',user_controller.listone)
router.post('/edit',user_controller.edit)

module.exports = router; 
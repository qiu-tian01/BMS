var express = require('express');
var router = express.Router();
var collect_controller = require('../controllers/collect')

/* GET home page. */
router.get('/listAll', collect_controller.listAll)
router.get('/list', collect_controller.list)
router.post('/add',collect_controller.add)
router.get('/delate',collect_controller.remove)

module.exports = router; 
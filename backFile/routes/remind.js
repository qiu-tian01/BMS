var express = require('express');
var router = express.Router();
 var remind_controller = require('../controllers/remind')

/* GET home page. */

router.get('/listAll', remind_controller.listAll)
router.get('/list', remind_controller.list)
router.post('/add',remind_controller.add)
router.get('/delate',remind_controller.remove)
router.post('/edit',remind_controller.edit)

module.exports = router; 
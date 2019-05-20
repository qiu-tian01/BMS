var express = require('express');
var router = express.Router();
var comment_controller = require('../controllers/comment')

/* GET home page. */
router.get('/listAll', comment_controller.listAll)
router.get('/list', comment_controller.list)
router.post('/add',comment_controller.add)
router.get('/delate',comment_controller.remove)

module.exports = router; 
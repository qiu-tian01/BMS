var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //渲染模板引擎
  //从引擎目录取出index进行渲染，引擎为ejs引擎，这里渲染的是ejs模板
  res.render('index', { title: 'Express' });
});

module.exports = router;

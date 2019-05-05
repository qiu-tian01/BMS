var createError = require('http-errors');//请求报错
var express = require('express');
var path = require('path');//路径
var cookieParser = require('cookie-parser');//解析cookie
var logger = require('morgan');

//路由工具
var indexRouter = require('./routes/index');//路由工具
var bookRouter = require('./routes/books');

//主应用程序
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //引擎为ejs
//各种中间件
app.use(logger('dev'));
//body-parser中间件 处理form-data和request payload数据
//express4.0内部已经集成了body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//处理cookie
app.use(cookieParser());
//静态资源处理，静态文件放在public可以直接访问
app.use(express.static(path.join(__dirname, 'public')));
//启动路由工具
app.use('/', indexRouter);
app.use('/api/books',bookRouter)

// catch 404 and forward to error handler
// 处理404
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  // 处理500
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

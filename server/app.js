var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

let corsOptions={
  origin:"*",
  credential:true,
};
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var collectionsRouter = require('./routes/collections');
var itemsRouter = require('./routes/items');
var attributesRouter = require('./routes/attributes');
var pinatasRouter = require('./routes/pinatas');
var fileUploadRouter = require('./routes/fileUpload');

var app = express();
// var dbConfig = require(__dirname + '/config/db.js');
// var conn = dbConfig.init();
// dbConfig.connect(conn);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// route to '/'
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/collections', collectionsRouter);
app.use('/items', itemsRouter);
app.use('/attributes', attributesRouter);
app.use('/pinatas', pinatasRouter);
app.use('/upload', fileUploadRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var usersRouter = require('./routes/users');

var app = express();

const mysql = require('mysql');
const con = mysql.createConnection({
  host: "localhost",
  user: "node",
  password: "nodenode",
  database: "mydb"
});

// Code not working
// const con = mysql.createPool({
//   connectionLimit: 200,
//   host: "localhost",
//   user: "node",
//   password: "nodenode",
//   database: "mydb"
// });



con.connect((err) => {
  if (err) {
      throw err;
  }
  console.log('Connected to database');
});
global.con = con;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/users', usersRouter);

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
  res.render(err.message); //Render full detail of error message
});

app.route('./routes');

module.exports = app;

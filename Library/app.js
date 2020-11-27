var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// allow all entry comunications with the API
const cors = require('cors');
// allow enviroment variables
require('dotenv').config()
const sequelize = require('./database/db')
var apidxRouter = require('./routes/api/index');
require('./database/asociations')
var app = express();

// config to update the models with sequelize
sequelize.sync({force:false}).then(()=>{
  console.log("Nos hemos conectado a la base de datos")
}).catch(error=>{
  console.log(`Se a producido un error ${error}`)
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apidxRouter);
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

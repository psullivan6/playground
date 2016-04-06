var config  = require('../config');
var express = require('express');
var gulp    = require('gulp');
var utility = require('gulp-util');
require('colors');

var PORT = '1030';

gulp.task('server', function(callback){
  var app = express();
  var ENVIRONMENT = (utility.env.env === 'production' || utility.env.env === 'staging') ? config.paths.release : config.paths.source;

  app.use('/', express.static(ENVIRONMENT));
  app.use('*', express.static(ENVIRONMENT + '/404.html'));

  app.listen(PORT);
  console.log('Repo live on', 'PORT'.brightYellow, PORT.brightYellow, 'via the', ENVIRONMENT.brightYellow, 'directory');

  return callback();
});
var config = require('../config');
var gulp   = require('gulp');
var path   = require('path');
var surge  = require('gulp-surge');

gulp.task('deploy', ['build-full'], function() {
  return surge({
    project: path.join(config.paths.release, config.paths.deploy.directory),
    domain: config.paths.deploy.url
  });
});
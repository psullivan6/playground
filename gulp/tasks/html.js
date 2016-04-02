var config       = require('../config');
var gulp         = require('gulp');
var handleErrors = require('../helper/handleErrors');
var jade         = require('gulp-jade');
var utility      = require('gulp-util');

gulp.task('html', function() {
  gulp.src(config.paths.html.source)
    .pipe(jade({
      pretty: true
    }).on('error', handleErrors))
    .pipe(gulp.dest(config.paths.html.release))
    .pipe(gulp.dest(config.paths.html.testing));
});
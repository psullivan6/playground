var config       = require('../config');
var gulp         = require('gulp');
var handleErrors = require('../helper/handleErrors');
var jade         = require('gulp-jade');
var utility      = require('gulp-util');

gulp.task('html', function() {
  var fullCompile = utility.env.env === 'production' || utility.env.env === 'staging';

  gulp.src(config.paths.html.source)
    .pipe(jade({
      pretty: true,
      locals: {
        localDevOnly: !fullCompile
      }
    }).on('error', handleErrors))
    .pipe(gulp.dest(fullCompile ? config.paths.html.release : config.paths.html.testing));
});
var config       = require('../config');
var gulp         = require('gulp');
var handleErrors = require('../helper/handleErrors');
var pug         = require('gulp-pug');
var utility      = require('gulp-util');

gulp.task('html', function() {
  var fullCompile = utility.env.env === 'production' || utility.env.env === 'staging';

  gulp.src(config.paths.html.source)
    .pipe(pug({
      pretty: true,
      locals: {
        localDevOnly: !fullCompile
      }
    }).on('error', handleErrors))
    .pipe(gulp.dest(fullCompile ? config.paths.html.release : config.paths.html.testing));
});
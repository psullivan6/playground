var config      = require('../config');
var fileinclude = require('gulp-file-include');
var gulp        = require('gulp');

gulp.task('html', function() {
  return gulp.src(config.paths.html.source)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: './_source/templates/'
    }))
    .pipe(gulp.dest(config.paths.html.release));
});
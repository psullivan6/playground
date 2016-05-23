var config     = require('../config');
var gulp       = require('gulp');

gulp.task('images', function() {
  return gulp.src(config.paths.images.source)
    .pipe(gulp.dest(config.paths.images.release));
});
var concat     = require('gulp-concat');
var config     = require('../config');
var gulp       = require('gulp');
var utility    = require('gulp-util');
var minify_js  = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('js', function() {
  var fullCompile = utility.env.env === 'production' || utility.env.env === 'staging';

  return gulp.src(config.paths.js.source)
    .pipe(fullCompile ? utility.noop() : sourcemaps.init())
      .pipe(concat(config.names.js))
      .pipe(fullCompile ? minify_js() : utility.noop())
    .pipe(fullCompile ? utility.noop() : sourcemaps.write())
    .pipe(gulp.dest(config.paths.js.release));
});
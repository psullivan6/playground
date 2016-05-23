var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');
var config       = require('../config');
var gulp         = require('gulp');
var handleErrors = require('../helper/handleErrors');
var minify_css   = require('gulp-cssnano');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var utility      = require('gulp-util');

gulp.task('css', function(callback){
  return gulp.src(config.paths.css.source)
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', handleErrors))
      .pipe(autoprefixer('last 2 versions'))
      .pipe(concat(config.names.css))
      .pipe(utility.env.production ? minify_css() : utility.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.css.release))
    .pipe(gulp.dest(config.paths.css.testing));
});
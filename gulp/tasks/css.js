var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');
var config       = require('../config');
var gulp         = require('gulp');
var utility      = require('gulp-util');
var minify_css   = require('gulp-minify-css');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');

var handleErrors = function(error){
  console.warn('\n', error.toString(), '\n');
  utility.beep();
};

gulp.task('css', function(){
  return gulp.src(config.paths.css.source)
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', handleErrors))
      .pipe(autoprefixer('last 2 versions'))
      .pipe(concat(config.names.css))
      .pipe(minify_css())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.css.release));
});
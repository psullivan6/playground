var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');
var config       = require('../config');
var gulp         = require('gulp');
var handleErrors = require('../helper/handleErrors');
var includePaths = require("bourbon-neat").includePaths;
var minify_css   = require('gulp-cssnano');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var utility      = require('gulp-util');

gulp.task('css', function(){
  var fullCompile = utility.env.env === 'production' || utility.env.env === 'staging';

  return gulp.src(config.paths.css.source)
    .pipe(fullCompile ? utility.noop() : sourcemaps.init())
      .pipe(sass({
        includePaths: includePaths
      }).on('error', handleErrors))
      .pipe(autoprefixer('last 2 versions'))
      .pipe(concat(config.names.css))
      .pipe(minify_css())
    .pipe(fullCompile ? utility.noop() : sourcemaps.write())
    .pipe(gulp.dest(fullCompile ? config.paths.css.release : config.paths.css.testing));
});
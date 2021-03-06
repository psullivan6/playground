'use strict';


// #############################################################################
// Plugins
// #############################################################################
var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');
var del          = require('del');
var gulp         = require('gulp');
var minify_css   = require('gulp-minify-css');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');


// #############################################################################
// Convenience Functions
// #############################################################################
var handleErrors = function(error){
  console.warn('\n', error.toString(), '\n');
  var beeper = require('beeper');
  beeper();
};


// #############################################################################
// Tasks > Compile CSS                                                $ gulp css
// #############################################################################
gulp.task('css', function(){
  return gulp.src('_source/css/styles.scss')
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', handleErrors))
      .pipe(autoprefixer('last 2 versions'))
      .pipe(concat('styles.css'))
      .pipe(minify_css())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('release/css'));
});


// #############################################################################
// Tasks > Clean Disribution/Build Directory                        $ gulp clean
// #############################################################################
gulp.task('clean', function (callback) {
  del('release/css', callback);
});


// #############################################################################
// Tasks > Watch files then run tasks                               $ gulp watch
// #############################################################################
gulp.task('watch', function() {
  gulp.watch('_source/css/**/*.scss', ['css']);
});

gulp.task('default', ['watch']);

module.exports = gulp;
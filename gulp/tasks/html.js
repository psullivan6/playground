var config = require('../config');
var gulp   = require('gulp');

gulp.task('html', function(callback){
  for (var page = config.paths.html.pages.length - 1; page >= 0; page--) {
    gulp.src(config.paths.html.source)
      .pipe(gulp.dest(config.paths.html.pages[page]));
  }
  return callback();
});

var hb = require('gulp-hb');

// Basic

gulp.task('basic', function () {
  return gulp
    .src(config.paths.html.source)
    .pipe(hb({
        partials: './src/assets/partials/**/*.hbs',
        helpers: './src/assets/helpers/*.js',
        data: './src/assets/data/**/*.{js,json}'
    }))
    .pipe(config.paths.html.release);
});
var config      = require('../config');
var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('compile', ['move', 'css', 'js', 'html']);

gulp.task('build', function (callback) {
  return runSequence(
    'clean',
    'compile',
    callback
  );
});
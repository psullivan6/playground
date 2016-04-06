var config      = require('../config');
var gulp        = require('gulp');
var runSequence = require('run-sequence');

var taskSequence = function(callback){
  return runSequence(
    'clean',
    'compile',
    callback
  );
};

gulp.task('compile', ['move', 'css', 'js', 'html']);

gulp.task('build', function (callback) {
  return taskSequence(callback);
});

gulp.task('build-full', function (callback) {
  utility.env.env = 'production'; // Set this flag so that all subsequent tasks are run in the fullCompile mode
  return taskSequence(callback);
});
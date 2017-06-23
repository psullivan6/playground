var config = require('../config');
var gulp   = require('gulp');

gulp.task('watch', function() {
  gulp.watch(config.paths.css.watch, ['css']);
  gulp.watch(config.paths.js.watch, ['js']);
  gulp.watch(config.paths.html.watch, ['html']);
});

//
// [NOTE] Below is multiple file logic from camel build process
//

// const config = require('../config');
// const getImportPaths = require('../helpers/getImportPaths');
// const gulp   = require('gulp');

// const watchCSS = function(){
//   config.paths.css.map(function(item){
//     const taskName = 'css:' + item.name;
//     return gulp.watch(getImportPaths(item.watch), [taskName]);
//   });
// };

// const watchJS = function(){
//   config.paths.js.map(function(item){
//     const taskName = 'js:' + item.name;
//     return gulp.watch(getImportPaths(item.watch), [taskName]);
//   });
// };

// gulp.task('watch', function() {
//   watchCSS();
//   watchJS();
// });
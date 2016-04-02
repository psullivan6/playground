var awspublish  = require('gulp-awspublish');
var config      = require('../config');
var fs          = require('fs');
var gulp        = require('gulp');

gulp.task('deploy', ['build'], function() {
  var credentials = JSON.parse(fs.readFileSync('aws-credentials.json', 'utf8'));
  var publisher = awspublish.create({
    region: 'us-west-2',
    params: {
      Bucket: config.paths.deployBucket
    },
    credentials: credentials
  });

  return gulp.src(config.paths.release + '/**/*')
     // gzip, Set Content-Encoding headers and add .gz extension
    .pipe(awspublish.gzip())

    .pipe(publisher.publish())

    // create a cache file to speed up consecutive uploads
    .pipe(publisher.cache())

    //  // print upload updates to console
    .pipe(awspublish.reporter());
});
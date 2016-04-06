var awspublish = require('gulp-awspublish');
var config     = require('../config');
var fs         = require('fs');
var gulp       = require('gulp');
var utility    = require('gulp-util');

gulp.task('deploy', ['build-full'], function() {
  var REMOTE = utility.env.to || utility.env.env || utility.env.remote;

  if (typeof REMOTE === 'undefined') {
    throw new utility.PluginError('undefined remote', {
      message: '\nNo remote defined. \nPlease use `gulp deploy --to=REMOTE` syntax when using this task.\n'
    });
    return false;
  }

  var awsConfig = JSON.parse(fs.readFileSync('aws-config.json', 'utf8'));
  var publisher = awspublish.create({
    region: awsConfig.buckets[REMOTE].region,
    params: {
      Bucket: awsConfig.buckets[REMOTE].name
    },
    credentials: awsConfig.credentials
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
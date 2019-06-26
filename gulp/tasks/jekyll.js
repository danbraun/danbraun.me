var browserSync   = require('browser-sync');
var config        = require('../util/loadConfig').jekyll;
var gulp          = require('gulp');
var isProduction  = require('../util/isProduction');
var spawn         = require('cross-spawn');

gulp.task('jekyll-build', function(done) {
  var processEnv = process.env;
  var args = ['exec', 'jekyll', 'build', '--config'];
  if (isProduction) {
    args.push('_config.yml');
    processEnv.JEKYLL_ENV = 'production';
  } else {
    args.push('_config-dev.yml');
  }

  browserSync.notify(config.notification);

  // Spawn jekyll commands
  return spawn('bundle', args, {stdio: 'inherit', env:processEnv})
    .on('close', done);
});

'use strict';

var gulp        = require('gulp'),
    config      = require('./gulp/gulp-config.js'),
    del         = require('del'),
    webpack     = require('webpack'),
    argv        = require('yargs').argv,
    plugins     = require('gulp-load-plugins')();
    // bowerConfig = require('./bower.json'),
    // gulpConnect = require('gulp-connect'),
    // runSequence = require('run-sequence'),
    // gutil       = require('gulp-util'),
    // gulpConnectSsi = require('gulp-connect-ssi'),
    // eslint      = require('gulp-eslint'),
    // es          = require('event-stream'),
    // include     = require('gulp-include'),
    // replace     = require('gulp-replace');

/* BUILD TASKS */
gulp.task('scss', require('./gulp/build-tasks/scss')(gulp, plugins, config));
gulp.task('html', require('./gulp/build-tasks/html')(gulp, plugins, config));

gulp.task('default', ['html', 'scss']);
gulp.task('build', ['default']);

/* WATCH TASSKS */
gulp.task('watch', function () {
    // gulp.watch(config.basepath.src + '/**/*.js', ['js']);
    gulp.watch([config.basepath.src + '/**/*.html'], ['html']);
    gulp.watch([config.basepath.src + '/**/*.scss'], ['scss']);
    // gulp.watch([config.basepath.src + '*', config.basepath.src + '*' + '*', config.basepath.src + '*' + '*'], ['other:assets']);
});

/* RELEASE TASKS */
gulp.task('scss-src', require('./gulp/release-tasks/scss-src')(gulp, plugins, config));
gulp.task('release', ['scss-src']);

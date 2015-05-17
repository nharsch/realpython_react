'use strict';

// requirements
var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    size = require('gulp-size'),
    clean = require('gulp-clean');


gulp.task('transform', function () {
  return gulp.src('./project/static/scripts/jsx/main.js')
    .pipe(browserify({transform: ['reactify']}))
    .pipe(gulp.dest('./project/static/scripts/js'))
    .pipe(size());
});

gulp.task('clean', function () {
  // add task
  return gulp.src(['./projects/static/scripts/jsx/main.js'], {read: false})
    .pipe(clean());

});


gulp.task('default', ['clean'], function () {
  gulp.start('transform');
  gulp.watch('./project/static/scripts/jsx/main.js', ['transform']);
});





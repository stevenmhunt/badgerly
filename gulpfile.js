'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    scssPaths = ['./src/**/*.scss', './*.scss'];

gulp.task('sass', function () {
    return gulp.src(scssPaths)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('.'));
});

gulp.task('sass:watch', function () {
    gulp.watch(scssPaths, ['sass']);
});

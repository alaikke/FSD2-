
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sasss = require('gulp-ruby-sass');
 
 //task sass

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
 //task sass ruby
 gulp.task('sasss', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 //task watch

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.sass', ['sass']);
});

//task default
gulp.task('default',['sass','watch']);
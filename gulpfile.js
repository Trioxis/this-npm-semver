var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

gulp.task('lint', function() {
  return gulp.src(['*.js','./test/**/*.js'])
		.pipe(jshint({
      esnext:true
    }))
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(jshint.reporter('fail'));
});

gulp.task('test',['lint'], function() {
  return gulp.src(['./test/**/*.js'],{read:false})
		.pipe(mocha());
});

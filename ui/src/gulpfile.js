var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

var basePath = './app/';
var sassPath = basePath + 'sass';
var jsPath = basePath + 'js';
var dist = '../dist/';

gulp.task('compile:css', function() {
    console.log('Compiling SASS to CSS - Begin');
    return gulp.src(sassPath + '/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(dist + 'css'));
});

gulp.task('compile:es6', function() {
    console.log('Compiling ES6 to JS - Begin');
    return gulp.src(jsPath + '/*.js')
        .pipe(babel())
        .pipe(gulp.dest(dist + 'js'));
});

gulp.task('copy:html', function() {
    console.log('Copy HTMLs - Begin');
    return gulp.src('./*.html')
        .pipe(gulp.dest(dist));
});

gulp.task('copy:assets', function() {
    console.log('Copy Assets - Begin');
    gulp.src('./app/assets/*.css')
        .pipe(gulp.dest(dist + 'css'));
    gulp.src('./app/assets/*.js')
        .pipe(gulp.dest(dist + 'js'));
    return;
});

gulp.task('default', ['compile:css', 'compile:es6', 'copy:html', 'copy:assets']);
gulp.task('watch', ['default'], function() {
    gulp.watch(sassPath + '/*.scss', ['compile:css']);
    gulp.watch(jsPath + '/*.js', ['compile:es6']);
    gulp.watch(basePath + '/*.html', ['copy:html']);
    return;
});
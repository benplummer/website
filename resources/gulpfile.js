var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var sass = require('gulp-ruby-sass');
var autoprefix = require('gulp-autoprefixer');
var sassUnicode = require('gulp-sass-unicode');

var sassDir = 'scss';

var targetCSSDir = '../source/assets/css';

gulp.task('css', function () {
    return sass(sassDir + '/style.scss', { style: 'compressed' })
        .on('error', gutil.log)
        .pipe(autoprefix('last 10 version'))
        .pipe(sassUnicode())
        .pipe(gulp.dest(targetCSSDir))
        .pipe(notify('CSS minified'))
});

gulp.task('watch', function () {
    gulp.watch(sassDir + '/**/*.scss', ['css']);
});

gulp.task('default', ['css', 'watch']);

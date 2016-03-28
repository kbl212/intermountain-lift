var gulp = require('gulp');

var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('./public/main.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./public'));
});

gulp.task('watch', function () {
    gulp.watch('./public/features/**/*.scss', ['sass']);
})

gulp.task('default', ['sass', 'watch']);
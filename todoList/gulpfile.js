var gulp = require("gulp");
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');

gulp.task('sass', function () {
    return gulp.src('./source/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('watch', function () {
    gulp.watch('./source/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));

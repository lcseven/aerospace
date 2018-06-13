var gulp = require('gulp'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');


gulp.task('less', function () {
    return gulp.src('src/css/less/app.less')
        .pipe(plumber({errorHandler: notify.onError('Error:<%=error.message%>')}))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src/css'));

});


// 监听任务
gulp.task('watch', ['less'], function() {
    gulp.watch('src/css/less/*.less',['less']);

});



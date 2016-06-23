var gulp = require('gulp'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    sass = require('gulp-sass'),
    del = require('del'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('browserify'),
    browserSync = require('browser-sync').create();

gulp.task('clean:dist', function () {
  return del(['public/**/*']);
});

gulp.task('sass', ['clean:dist'], function () {
    return gulp.src('src/scss/*.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(gulp.dest('public/'));
});

gulp.task('js', function (){
    browserify('src/app.js')
        .bundle()
        .on('error', function(e){
            gutil.log(e);
        })
        .pipe(source('app.js'))
        .pipe(gulp.dest('public/'));
});

gulp.task('copy', ['clean:dist'], function() {
  return gulp.src([
        'src/app.js',
        'src/vue.js',
        'src/index.html',
        'src/components/*.*',
        'src/img/**/*.*'
    ])
    .pipe(gulp.dest('public/'));
});

gulp.task('reload-watch', ['clean:dist', 'sass', 'js', 'copy'], function() {
    setTimeout(function() {
        browserSync.reload();
    }, 1000);
});

gulp.task('watch', function () {
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./public"
        },
        browser: ["google chrome"],
        reloadOnRestart: false
    });

    gulp.watch(["src/**/*.*"], ['reload-watch',]);

});

gulp.task('default',  ['clean:dist', 'sass', 'js', 'copy', 'watch']  );
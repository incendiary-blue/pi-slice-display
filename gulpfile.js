var gulp = require('gulp'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sass = require('gulp-sass'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    browserSync = require('browser-sync').create();

gulp.task('clean:dist', function () {
  return del(['public/**/*', '!public/serial.js']);
});

gulp.task('sass', ['clean:dist'], function () {
    return gulp.src('src/scss/*.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(gulp.dest('public/'));
});


gulp.task('js', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: 'src/app.js',
    debug: true
  })
  b.transform(babelify, {/* options */ });

  return b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public/'));
});

gulp.task('copy', ['clean:dist'], function() {
  return gulp.src([
        'src/index.html',
        'src/components/*.*',
        'src/img/**/*.*',
        'src/fonts/**/*.*'
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
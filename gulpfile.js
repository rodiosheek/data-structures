const gulp = require('gulp'),
      babel = require('gulp-babel'),
      browserSync = require('browser-sync').create(),
      browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      babelify = require("babelify");



gulp.task('browser', function () {
   return browserify({
       entries: './src/scripts/main.js',
       extensions: ['.js'],
       debug: true
   })
       .transform(babelify.configure({
           plugins: [
               "transform-es2015-modules-commonjs",
               "transform-decorators-legacy"
           ],
           sourceMapsAbsolute: true
       }))
       .bundle()
       .pipe(source('main.js'))
       .pipe(gulp.dest('./dist'))
});

gulp.task('specs', function () {
    return browserify({
        entries: './e2e/src/index.js',
        extensions: ['*[sS]pec.js'],
        debug: true
    })
        .transform(babelify.configure({
            plugins: [
                "transform-es2015-modules-commonjs",
                "transform-decorators-legacy"
            ],
            sourceMapsAbsolute: true
        }))
        .bundle()
        .pipe(source('indexSpec.js'))
        .pipe(gulp.dest('./e2e/specs'))
});


gulp.task('watch', ['browser', 'specs'], ()=>{
    browserSync.init({
        server: "./"
    });

    gulp.watch("./src/**/**.js", ['browser']);
    gulp.watch("./e2e/src/*.js", ['specs']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("dist/**/*.js").on('change', browserSync.reload);
});


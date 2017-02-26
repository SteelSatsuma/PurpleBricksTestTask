
const gulp = require('gulp');
const browserify = require('browserify');
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const merge = require('merge-stream');
const babelify = require('babelify');
const dedupe = require('gulp-dedupe');
const cleanCSS = require('gulp-clean-css');
 
gulp.task('clean', function () {
    const jsStream = gulp.src('public/js/**/*.js', {read: false});
    const sassStream = gulp.src('public/css/**/*.css', {read: false});

  return merge(jsStream, sassStream)
    .pipe(clean());
});


gulp.task('js', () => {
    console.log('Building Javascript...');

    return browserify('dev/main.js')
        .transform("babelify", {presets: ['es2015', 'react', 'stage-0']})
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(dedupe())
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});

gulp.task('sass', () => {
    console.log('Building styles...');
    return gulp.src('dev/styles/main.scss')
        .pipe(sass())
        .pipe(concat('main.css'))
        .pipe(cleanCSS({
            compatibility: 'ie9'
        }))
        .pipe(gulp.dest('public/css'));
});

gulp.task('test', () => {

});

gulp.task('watch', () => {
    gulp.watch('dev/**/*.js', ['js']);
    gulp.watch('dev/**/*.scss', ['sass']);
});

gulp.task('build', ['clean', 'js', 'sass']);

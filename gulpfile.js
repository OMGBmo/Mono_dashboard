const gulp = require ('gulp');
const sass = require ('gulp-sass');
const browserSync = require ('browser-sync').create();

function style () {
  return gulp.src (['node_modules/bootstrap/scss/bootstrap.scss', './scss/**/*.scss'])
  .pipe(sass())
  .pipe(gulp.dest('./css'))
  .pipe(browserSync.stream());
}

function js (){
return gulp.src (['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/popper.js/dist/umd/popper.min.js', 'node_modules/jquery/dist/jquery.min.js'])
  .pipe(gulp.dest('./js'))
  .pipe(browserSync.stream());
}

function watch () {
  browserSync.init({
    server: {
      baseDir:'./'
    }
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}
exports.style = style;
exports.watch = watch;
exports.js = js;

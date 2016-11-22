var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  beep = require('beepbeep');
  //browserSync = require('browser-sync').create();

// Config
var fileNameBase = 'style';
var paths = {
  scss: 'scss/' + fileNameBase + '.scss'
};

gulp.task('serve',['sass'], function() {
  
  /*browserSync.init({
    server:""
  });*/

  gulp.watch('scss/**/*.scss', ['sass']);
  //gulp.watch('*.html').on('change',browserSync.reload);
});

gulp.task('prefix', function(){
  return gulp.src('scss/*.scss')
    
    .pipe(gulp.dest('./css/'));
});

gulp.task('sass', function(){
  return gulp.src(paths.scss)
    .pipe(sass())
    .on('error', swallowError)
    .pipe(autoprefixer({
      browsers:['last 10 versions'],
      cascade:false
    }))
    .pipe(gulp.dest('./css'))
    //.pipe(browserSync.stream());
});

// Watch Files For Changes
gulp.task('watch', function() {
  //livereload.listen();
  gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);


function swallowError (error) {
  beep(2,1000);
  console.log('----------------- START ERROR -----------------');
  console.log(error);
  this.emit('end');
  console.log('----------------- END ERROR -----------------');
}
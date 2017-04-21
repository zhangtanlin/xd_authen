
// 引入 gulp及组件
var gulp    = require('gulp'),               //基础库
  sass = require('gulp-less'),               //less
  minifycss = require('gulp-minify-css'),    //css压缩
  jshint = require('gulp-jshint'),           //js检查
  uglify  = require('gulp-uglify'),          //js压缩
  rename = require('gulp-rename'),           //重命名
  concat  = require('gulp-concat'),          //合并文件
  clean = require('gulp-clean'),             //清空文件夹
  tinylr = require('tiny-lr'),               //livereload
  server = tinylr(),
  port = 35729,
  livereload = require('gulp-livereload');   //livereload

// HTML处理
gulp.task('html', function() {
  var htmlSrc = './src/*.html',
    htmlDst = './dist/';

  gulp.src(htmlSrc)
    .pipe(livereload(server))
    .pipe(gulp.dest(htmlDst))
});

// 样式处理
gulp.task('css', function () {
  var cssSrc = './src/scss/*.scss',
    cssDst = './dist/css';

  gulp.src(cssSrc)
    .pipe(sass({ style: 'expanded'}))
    .pipe(gulp.dest(cssDst))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(livereload(server))
    .pipe(gulp.dest(cssDst));
});

// js处理
gulp.task('js', function () {
  var jsSrc = './src/js/*.js',
    jsDst ='./dist/js';

  gulp.src(jsSrc)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(jsDst))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(livereload(server))
    .pipe(gulp.dest(jsDst));
});

// 清空图片、样式、js
gulp.task('clean', function() {
  gulp.src(['./dist/css', './dist/js', './dist/images'], {read: false})
    .pipe(clean());
});

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', ['clean'], function(){
  gulp.start('html','css','images','js');
});

// 监听任务 运行语句 gulp watch
gulp.task('watch',function(){

  server.listen(port, function(err){
    if (err) {
      return console.log(err);
    }

    // 监听html
    gulp.watch('./src/*.html', function(){
      gulp.run('html');
    });

    // 监听css
    gulp.watch('./src/scss/*.scss', function(){
      gulp.run('css');
    });

    // 监听js
    gulp.watch('./src/js/*.js', function(){
      gulp.run('js');
    });

  });
});
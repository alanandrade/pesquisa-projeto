var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat');	


//STEP-0
gulp.task('sass', function(){
	return gulp.src('src/app/step-0/step-0.scss')
	.pipe (sass())
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(autoprefixer())
	.pipe(concat('step-0.component.css'))
	.pipe(gulp.dest('src/app/step-0'))
});

//STEP-1
gulp.task('sass', function(){
	return gulp.src('src/app/step-1/step-1.scss')
	.pipe (sass())
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(autoprefixer())
	.pipe(concat('step-1.component.css'))
	.pipe(gulp.dest('src/app/step-1'))
});

//STEP-2
gulp.task('sass', function(){
	return gulp.src('src/app/step-2/step-2.scss')
	.pipe (sass())
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(autoprefixer())
	.pipe(concat('step-2.component.css'))
	.pipe(gulp.dest('src/app/step-2'))
});


//STEP-3
gulp.task('sass', function(){
	return gulp.src('src/app/step-3/step-3.scss')
	.pipe (sass())
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(autoprefixer())
	.pipe(concat('step-3.component.css'))
	.pipe(gulp.dest('src/app/step-3'))
});



gulp.task('watch', ['sass'], function(){
	gulp.watch('src/app/**/*.scss', ['sass']);
});
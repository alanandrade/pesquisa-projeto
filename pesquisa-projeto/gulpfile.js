var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer'),
	concat = require('gulp-concat');

//GLOBAL
gulp.task('global', function(){
	return gulp.src('src/app/app.scss')
	.pipe (sass())
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(autoprefixer())
	.pipe(concat('app.component.css'))
	.pipe(gulp.dest('src/app'))
});

//HEADER
gulp.task('header', function(){
	return gulp.src('src/app/header/header.scss')
	.pipe (sass())
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(autoprefixer())
	.pipe(concat('header.component.css'))
	.pipe(gulp.dest('src/app/header'))
});

//STEP-0
gulp.task('step0', function(){
	return gulp.src('src/app/step-0/step-0.scss')
	.pipe (sass())
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(autoprefixer())
	.pipe(concat('step-0.component.css'))
	.pipe(gulp.dest('src/app/step-0'))
});

//STEP-1
gulp.task('step1', function(){
	return gulp.src('src/app/step-1/step-1.scss')
	.pipe (sass())
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(autoprefixer())
	.pipe(concat('step-1.component.css'))
	.pipe(gulp.dest('src/app/step-1'))
});

//STEP-2
gulp.task('step2', function(){
	return gulp.src('src/app/step-2/step-2.scss')
	.pipe (sass())
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(autoprefixer())
	.pipe(concat('step-2.component.css'))
	.pipe(gulp.dest('src/app/step-2'))
});

//STEP-3
gulp.task('step3', function(){
	return gulp.src('src/app/step-3/step-3.scss')
	.pipe (sass())
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(autoprefixer())
	.pipe(concat('step-3.component.css'))
	.pipe(gulp.dest('src/app/step-3'))
});

gulp.task('watch', ['header', 'global', 'step0', 'step1', 'step2', 'step3'], function(){
	gulp.watch('src/app/*.scss', ['global']);
	gulp.watch('src/app/**/*.scss', ['header']);
	gulp.watch('src/app/**/*.scss', ['step0']);
	gulp.watch('src/app/**/*.scss', ['step1']);
	gulp.watch('src/app/**/*.scss', ['step2']);
	gulp.watch('src/app/**/*.scss', ['step3']);
});
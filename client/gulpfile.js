/*
*   Para rodar no terminal, use esse comando:
*   $ node ./node_modules/gulp/bin/gulp.js
*/

'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('default', watch)
 
gulp.task('sass', compilaSass);

function compilaSass() {
    return gulp
        .src("src/styles/sass/**/*.scss")
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest("src/styles/css"));
}
 
function watch() {
    gulp.watch("src/styles/sass/**/*.scss", compilaSass)
}
const { src, dest, watch, series } = require('gulp');
const sass = require("gulp-sass")(require('sass'));


function buildStyles() {  // compiling *.scss to *.css
    return src('style.scss')
           .pipe(sass())
           .pipe(dest('css')) 
}


function watchTask() {
    watch(['style.scss'], buildStyles)
}


exports.default = series(buildStyles, watchTask);
# playground
Boilerplate for simple, playground dev

## Scratch Build Instructions

### Pre-Build Setup
1. `.gitignore` with all npm and misc. ignores
1. `.jshintrc` from [My Gist](https://gist.github.com/psullivan6/e7d9f6611bd163e52951)
1. commit

### Scratch Build Components
1. Run $`npm init`
1. Install task-runner and task libs: $`npm install gulp gulp-sass gulp-autoprefixer gulp-sourcemaps gulp-concat del --save`
    - gulp
    - gulp-sass - compiling sass
    - gulp-autoprefixer - autoprefix the sass
    - gulp-sourcemaps - sourcemap the sass
    - gulp-concat - concatenate the compiled sass into 1 file
    - del - cleanup the source files for testing

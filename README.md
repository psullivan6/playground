# playground
Boilerplate for simple, playground dev

[Download Latest Release](https://github.com/psullivan6/playground/releases/latest)

## First-Time Scratch Build Instructions

### Pre-Build Setup
*at this point this has already complete and has been committed*

1. `.gitignore` with all npm and misc. ignores
1. `.jshintrc` from [My Gist](https://gist.github.com/psullivan6/e7d9f6611bd163e52951)
1. commit

### Dependencies
node package manager via [npmjs install documentation](https://docs.npmjs.com/getting-started/installing-node)

### Scratch Build Components
1. Run $`npm init` to setup a basic npm-based project
  - fill out the subsequent prompts
1. Install task-runner and task libs: $`npm install gulp gulp-sass gulp-autoprefixer gulp-sourcemaps gulp-cssnano gulp-concat gulp-hb del --save`
    - `gulp`              - the task-runner
    - `gulp-sass`         - compile the sass
    - `gulp-autoprefixer` - autoprefix the sass
    - `gulp-sourcemaps`   - sourcemap the sass
    - `gulp-concat`       - concatenate the compiled sass into 1 css file
    - `gulp-cssnano`      - minify the resulting css file
    - `del`               - cleanup the source files for testing
1. Install dev dependencies: $`npm install gulp-util require-dir --save-dev`
    - `gulp-util`         - gulp utility (used to beep the console)
    - `require-dir`       - used to sub-directory the gulp tasks



    npm install --save handlebars
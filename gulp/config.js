module.exports = {
  paths: {
    project: './',
    release: './release',
    css: {
      source:  './_source/css/styles.scss',
      watch:   './_source/css/**/*.scss',
      release: './release/css'
    },
    html: {
      source:  './_source/*.html',
      watch:   './_source/templates/**/*.html',
      release: './release'
    },
    js: {
      source:  './_source/js/scripts.js',
      watch:   './_source/js/**/*.js',
      release: './release/js'
    }
  },
  names: {
    css: 'css.css',
    js:  'js.js'
  }
};
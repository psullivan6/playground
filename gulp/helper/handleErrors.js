var notify = require("gulp-notify");

module.exports = function(error) {

  notify('\n', error.toString(), '\n');
  // utility.beep();

  // notify.onError(errorObject.toString().split(': ').join(':\n')).apply(this, arguments)
  // // Keep gulp from hanging on this task
  // if (typeof this.emit === 'function') this.emit('end')
}

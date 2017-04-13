var sassGraph = require('sass-graph');

module.exports = function(file){
  const importPaths = sassGraph.parseFile(file).index;
  return Object.keys(importPaths).map(function(name) {
    return name;
  });
}
var ui = require('./ui');
var loader = require('./loader');
var colorizer = require('./colorizer');
var dictionary = require('./dictionary');

var path = './data/';
var dicts = {};
var dictCount;

ui.one();
loader(path, function(err, files) {
  dictCount = files.length;
  files.forEach((file, index) => {
    dicts[index] = file;
    dictNum = colorizer.colorize(`${index+1}`, 'red');
    console.log(`${dictNum}. ${file}`);
  });
  ui.two(dictCount, function(choice) {
    let dict = dicts[choice-1];
    let dictPath = `${path}${dict}`;
    dictionary(dictPath);
  });
});
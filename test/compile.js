var fs = require('fs');
var path = require('path');
var babel = require('babel-core');
var origJs = require.extensions['.js'];

require.extensions['.js'] = function (module, fileName) {
  var output;
  // console.log('fileName:', fileName);
  if (fileName.indexOf('node_modules/react-native/Libraries/react-native/react-native-implementation.js') >= 0) {
    console.log('fileName:', fileName)
    console.log('__________________________')
    fileName = path.resolve('./test/mocks/react-native.js');
  }
  if (fileName.indexOf('node_modules/') >= 0) {
    return (origJs || require.extensions['.js'])(module, fileName);
  }
  var src = fs.readFileSync(fileName, 'utf8');
  output = babel.transform(src, {
    filename: fileName
  }).code;

  return module._compile(output, fileName);
};

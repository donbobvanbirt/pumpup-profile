const fs    = require('fs')
const path  = require('path')
const babel = require('babel-core')

const origJs = require.extensions['.js']

const reactNativeModPath = 'node_modules/react-native/Libraries/'
const reactNativePath    = 'react-native/react-native-implementation.js'



require.extensions['.js'] = function (module, fileName) {

  if (fileName.indexOf(`${reactNativeModPath}${reactNativePath}`) >= 0) {
    fileName = path.resolve('./test/mocks/react-native.js')
  }

  if (fileName.indexOf('node_modules/') >= 0) {
    return (origJs || require.extensions['.js'])(module, fileName)
  }

  const src = fs.readFileSync(fileName, 'utf8')

  const output = babel.transform(src, {
    filename: fileName
  }).code

  return module._compile(output, fileName)
}

const { JSDOM } = require('jsdom')

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')

const { window } = jsdom




/**
 * copyProps - copies props to testing component
 * @param  {type} src     original source
 * @param  {type} target  target source
 */
function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop))
  Object.defineProperties(target, props)
}



global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js'
}

copyProps(window, global)

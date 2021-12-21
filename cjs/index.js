const {text, endText} = require('./foo')
const leftPad = require('left-pad')

console.log(text + leftPad(endText, 10, '.'))

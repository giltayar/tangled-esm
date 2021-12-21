import {text, endText} from './foo.js'
import leftPad from 'left-pad'

console.log(text + leftPad(endText, 10, '.'))

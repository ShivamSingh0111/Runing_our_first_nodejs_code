#!/nvm4w/nodejs/node
import {Buffer} from 'buffer'

// let unit8Array = new Unit8Array(4)
let a = new ArrayBuffer(4)
let nodeBuffer = new Buffer.from(a) 

// console.log(unit8Array)
console.log(nodeBuffer)
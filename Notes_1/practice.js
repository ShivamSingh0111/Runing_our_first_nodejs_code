#!/usr/bin/env node
import {Buffer} from 'buffer'

let a = new ArrayBuffer(4)
// let nodeBuffer = new Buffer.alloc(4)
// let unit8Array = new Unit8Array(4)

let nodeBuffer = new Buffer.from([96,97,98,99]) 

// console.log(unit8Array)
console.log(nodeBuffer.buffer)
## ecmaScript6

--> by default nodeJs use common js
--> To change cjs into mjs use inside package.json `{"type":"module"}`
--> when you are use `ES6` feature then by default in each module enable `"use strict"` mode.
--> If you don't provide at import time complete path, then you got an error(without extenstion)

## cjs --> common js

--> If you are provide any extension name of file such as '.mg, .mp4, .png, .jhdfka' in cjs still it will work.
Ex:- app.jks
let a = 10;
module.exports = a;

--> getValue.js
connst a = require('./app.jks');
console.log(a) // 10

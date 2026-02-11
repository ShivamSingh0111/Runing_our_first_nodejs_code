### common js vs es6 module

<!-- common js -->
1. synchronous file loading. and `cjs` are not `hoisted`.
2. top level `await` not allowed.
```
const res = await fetch('url');
console.log(res) // throw error, If you are using without async function or async IIFE function.

```
2. multiple value can not be export.
2. file Extentsion optional
3. If we give the full path of the file then we can load any file using cjs
4. For using `cjs` no need to change anything or also no need to create `package.json`. `cjs` it's a default part of the `node.js`

5. In cjs `this` keyword points to module.exports by default

```
Ex:-
console.log(this) //{}
module.exports.num = 5;
module.exports.user = {"name":"shivam"};
console.log(this) // {"num": 5,"user": {"name": "shivam"}};


```
6. In `cjs` execution start in current file before `require`, like which one comes first execute first.
ex:-
```
app.js-->
console.log('Hii')
const x = require('example.js')

```
7. __fileName , __dirName






<!-- ES6 js -->

1. Asynchronous file loading. and `mjs` are `hoisted`.
2. Top level `await` is allowed.
```
const res = await fetch('url');
console.log(res) // return o/p without error

```
2. multiple value can be exported.
2. file extension mandetory
3. we can not load any file except .js and .mjs
4. For using `mjs` you need to create `package.json`.then set {"type":"module"}, Now you can use `mjs`.
5. In `mjs` this keyword point to `undefined` 
6. In `mjs` execution start from `import`.
7. {filename , dirname} = import.meta
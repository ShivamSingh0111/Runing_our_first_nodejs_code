## what is buffer node?

it is Uint8Array which is TypedArray that provides where nodejs provide some extra properties.

i'm creating two thing

- Buffer
- Unit8Array

```
let unit8Array = new Unit8Array(4)
let nodeBuffer = new Buffer(4)
console.log(unit8Array)
console.log(nodeBuffer)


--> get o/p with warnings
```

Once you run then you can get a warnning, where node provide some suggestion regarding remove warning.

you can follow some step to remove warning

- npm i @types/node -D
- import {Buffer} from 'buffer'; --> node always reffer

after that you can use .alloc mehtod same as below example

```
 import {Buffer} from 'buffer';


let unit8Array = new Unit8Array(4)
let nodeBuffer = new Buffer.alloc(4) // 4 is same as ArrayBuffer which is bytes of lenth
console.log(unit8Array)
console.log(nodeBuffer)


```

If you want to create your own ArrayBuffer, so you have to simply do one thing create our ArrayBuffer then In place of static number you can pass your own Array of ArrayBuffer.
but you have to use .from() in place of .alloc() method.

```
 import {Buffer} from 'buffer';


// let unit8Array = new Unit8Array(4)
let a = new ArrayBuffer(4)
let nodeBuffer = new Buffer.from(a)

// console.log(unit8Array)
console.log(nodeBuffer)


```

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

### there is some difference b/w size

```

let nodeBuffer = new Buffer.from([96,97,98,99])
let nodeBuffer1 = new Buffer.allocUnsafe(4)
let nodeBuffer2 = new Buffer.alloc(4)

console.log(nodeBuffer.buffer) //8192
console.log(nodeBuffer1.buffer) //8192
console.log(nodeBuffer2.buffer) //4

```

--> the question is that length is changes if i passed 4 bytes.

let Buffer1 = Buffer.alloc(10000)
let Buffer2 = Buffer.allocUnsafe(10000)

console.log(Buffer1.toString())
console.log(Buffer2.toString())

```
let's explain above console, jb hum 77 line ko console krenge to hume hmesa empty string milta h..
        q ki Buffer.alloc() insure krta h.. ki jitne byte ka memory allocate kiya gya h waha pr kewa 0 value hi fill ho 


but the twist is that Buffer.allocUnsafe me aisa nhi hota vo simple kewal memory allocate kr dega ho skata h.. ki system m pahle se hi us index pr koi value nhi h..

waise to humara system bahut hi genius h.. hr process k baad memory clean kr deta h.. but the moral of the story is that we can get any value when we are using Buffer.allocUnsafe.

        but y unsafe h.. to iska mtlab y nhi h.. ki hum use nhi kr sakte y fast bhi h..


Buffer.allocUnsafe ka use tabhi kre jb usme koi data fill krna ho, agar ap create krke chhod denge to y sesitive data reveal kr sakta h.. apke system ka.

Buffer.allocUnsafe hum tabhi use krte h.. jb hume baar baar buffer create krna ho aur create krne k baad use fill krna ho, then u can  use it.


```

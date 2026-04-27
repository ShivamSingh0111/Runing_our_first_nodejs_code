### buffer pool

In buffer_in_nodejs we already know about alloc and allocUnsafe defference and benifit.

but in this note we learn some deep details

1. pool
2. when you create half of the buffer size in allocUnsafe then nodejs create new buffer for another allocUnsafe.

```
8192 >>> 1 = 4096 - 1 = 4095
let b = Buffer.allocUnsafe(4095)


```


### how can you search your element which you store inside ArrayBuffer.

you can find easly your array buffer but you have to do simple one thing check you byteOffset whihc is represent index you can copy and peast then find you  element.




### can we resize our arrayBuffer
yes you can do this, help of the boolsize first you have to import Buffer and write `Buffer.poolsize = 10000`, now your array buffer size is resize.
            you need to know one more thing which is important you can't resize your first buffer after fill everything node automatic create new buffer that size will be 10000.


### Buffer.from
behind the seen it is usinng allocUnsafe.


### can we join two different buffer together
yes you can do this help of the `Buffer.concat([a,b])` where a and b represent defferent-2 buffer.


### constraints

buffer provide one more property that hold two thing 
1. MAX_lenght
```
const { constants } = require("buffer");

console.log(constants.MAX_LENGTH);
```
2. MAX_STRING_LENGTH
```
console.log(constants.MAX_STRING_LENGTH);

```

YOU can identify that how many max char of string and array you can store inside array buffer


### Buffer.allocUnsafeSlow()--> this is not unsing BufferPool. 

```

let b = Buffer.allocUnsafe(4) // 8192
let c = Buffer.allocUnsafeSlow(4) // 4 


```
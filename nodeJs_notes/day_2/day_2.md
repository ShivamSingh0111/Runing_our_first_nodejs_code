## module.exports Vs exports
console.log(module.exports === exports) // true
```
Simple JavaScript example (NO Node)
let box = {};
let alias = box;

alias = { a: 1 };

console.log(alias); // ✅ { a: 1 }
console.log(box);   // ❌ {}

Why?

You reassigned alias

So the value is visible only via alias

2️⃣ Mapping this to Node.js (IMPORTANT)
Node returns ONLY this:
module.exports


So if you reassign something, you must reassign module.exports, not exports.

3️⃣ Correct way to “show value” after reassignment ✅
✅ Option 1 (BEST)
function sum(a,b){ return a+b }
function product(a,b){ return a*b }

module.exports = { sum, product };


Now:

require('./day_1');


returns:

{ sum: [Function], product: [Function] }

4️⃣ Why exports = {...} can NEVER work

Because Node never reads:

exports


It reads only:

module.exports


So even if exports has values, Node ignores it.

5️⃣ Valid patterns (memorize these)
✔ Pattern 1: Assign once
module.exports = { sum, product };

✔ Pattern 2: Add properties
exports.sum = sum;
exports.product = product;

❌ Invalid pattern
exports = { sum, product }; // ❌ ignored by Node

6️⃣ One-sentence rule (WRITE THIS DOWN)

If you reassign, reassign module.exports.
If you mutate, you may use exports.

7️⃣ Ultra-short interview answer 🎯

Reassigning exports doesn’t work because Node returns module.exports.
To expose reassigned values, assign them to module.exports.






```


const obj={
name:"shivam",
class:"12th",
address:{},
}

let obj1 = obj.address;
obj1 = {a:1};
console.log(obj1); //reassign the value but only or obj1
console.log(obj.address);


final answer is that require function always consider mosule.exports not exports (alias) value that's why each time we get empty object in case of exports = {a:1}







## Topic what we learnt so far
- module object
- __dirname
- __filename
- module

    - children -> we can see all those thing which is import inside children file
    - exports -> outer exports and inside module's export both are same
    - preloading -> you can true this value and get value before calling require method useing this cmd `node --require parentFilePath childFilepath(where you want to get value)`, `preloading:false`
    - loaded -> once the whole module will load then it will get value true most of time you can't debag because whenever you try to console internally module will be take time to load so you get `loaded:false` 

- exports
- require

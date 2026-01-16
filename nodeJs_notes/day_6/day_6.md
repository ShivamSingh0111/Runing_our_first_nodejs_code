# import.meta

```
yaha pr import koi object nhi h.. aisa mt socho ki import koi object hain aur uske ander meta koi object h..

`import.meta` khud me hi ek object h.. jaha pr kuch property avillable hain

-> fileName
-> dirName
-> resolve
-> url

version 22 k pahle keval resolve or url two property hi avillable thi.

```

### How can we access dirName and filename in es6

import.meta --> this one is complete object

now using this you can access filename,dirname,url etc..

--> inside import.meta you can add your property as well
EX:- import.meta.a = 10;

const {fileName, dirName, a} = import.meta;

- kuch log kabhi dirName lene k liye `process.cwd()` ka use krte h..
- `process.cwd()` and `conosle.log(import.meta.dirName)` both are same

ex:-

```
E:\Backend_lecture\Introduction_To_backend_And_Node_js\Runing_our_first_nodejs_code\nodeJs_notes\day_6 ----->meta
E:\Backend_lecture\Introduction_To_backend_And_Node_js\Runing_our_first_nodejs_code\nodeJs_notes\day_6 ------>process.cwd()

```

- but kuch chizo m `process.cwd()` wrong path deta h..
- For example:-

## Case 1 --> by using cd .. go one step back

if you are using `cd ..` go one step back.
-> for now you get wrong path

```
ex:-
E:\Backend_lecture\Introduction_To_backend_And_Node_js\Runing_our_first_nodejs_code\nodeJs_notes\day_6 ----->meta
E:\Backend_lecture\Introduction_To_backend_And_Node_js\Runing_our_first_nodejs_code\nodeJs_notes ------>process.cwd()

see the diffrence

```

- but using import.meta each time you get correct dir name

let's understand why `process.cwd()` gives o/p like that

- `process.cwd()` --> so in this case nodeJs gives path, jaha se node execute hua h.. in this case mera node `nodeJs_notes` dir se execute hua tha isliye hum o/p m `path` bhi
  `E:\Backend_lecture\Introduction_To_backend_And_Node_js\Runing_our_first_nodejs_code\nodeJs_notes ------>process.cwd()`,
  <br>
  `home dir` se `nodeJs_notes` yaha tk mil rha h..

## Case 2

If you are change dir by usinng `process.chdir('./src')` --> in this case you again get wrong dir

Ex:-

`const { filename, dirname } = import.meta;
console.log(dirname, "----->meta");
process.chdir('../src/')
console.log(process.cwd(), "------>process.cwd()");`


Output:- 
```


```
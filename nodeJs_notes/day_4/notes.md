const vm = require("vm");
vm.runInThisContext('var a= 10')--> when i use this then our variable avillable in global scope

### But the issue is comming when i declear variable in local scope

let a = 10;
vm.runInThisContext('console.log(a)')--> when i try to access varaible in global scope //we got the error

To resolbe this isssue we are using below given way.
vm.runInNewContext('console.log(a)',{a}) //10

---> internally nodeJs wrappe the module then execute the code
---> even after using `use strict` mode you can add your variable `global object`.
---> first import `vm` from nodeJs then use this method `vm.runInThisContext("var a = 10")` now a variable avillabe in global scope.
---> let's assume if I initalize variable in local scope and try to access in global context in this case:-

```
        --> if i use this `vm.runInThisContext("console.log(a)")` i got the error // error.
        --> so for this case `vm` provide one more method `vm.runInNewContext("console.log(a)",{a})` when i pass `{a}` a inside this method then we can access local variable.
```

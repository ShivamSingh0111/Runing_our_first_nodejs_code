// const a = requ("./sum.js");
const b = requ("./cal.js");
// console.log(a);
// console.log(b);
// "use strict";
// let vm = require("vm");
// vm.runInThisContext("var a = 10"); // now you can see this variable a in global, even after using "use strict" mode
// console.log(a);
// console.log(module);

// let a = 10;
// vm.runInNewContext("console.log(a)", { a }); // now you can see this variable a in global, even after using "use strict" mode

// console.log(module);

function requ(path) {
  let fs = require("fs");
  let fileContent = fs.readFileSync(path, "utf8");
  console.log(fileContent, "--->fileContent");
  let vm = require("vm");
  return (function (exp) {
    vm.runInNewContext(fileContent, { exp, requ, console });
    // eval(fileContent);
    // console.log(exp);
    return exp;
  })({});
}

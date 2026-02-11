// const enviourmentVariabal = process.env;
// console.log(enviourmentVariabal)

// const exce = require('child_process');
// console.log(exce);

// const { filename, dirname } = import.meta;
console.log(this, "--->this");
// console.log(filename, "--->filename");
// console.log(dirname, "---->dirname");
// console.log(process.cwd());

function fun() {
  return 2 * 3;
}

console.log('hello world');
import {fun1} from "./day_2_2.js";
console.log(fun())
console.log(fun1())


// var num = 45;
// console.log(num);

function sum(a, b) {
  return a + b;
}

function product(a, b) {
  return a * b;
}

// exports = {
//      sum, product
// }
// here i'm trying to change the refreces of exports, but Still it is empty.
// console.log(exports) // {}
console.log(module.exports); //{}
module.exports = { sum, product };

# {} vs [] :- 

```
--> We use {} (object) instead of [] (array) because:

---> Exports are name-based, not position-based

{} → named things (by key)

[] → ordered things (by index)

--> Exports need names, not positions.

1️⃣ What actually gets exported in JavaScript?

In CommonJS (Node.js):

module.exports = SOMETHING;


👉 SOMETHING can be anything:

object {} ✅

array [] ✅

function

string

number

So yes — both {} and [] technically work.

-----> But working ≠ correct design. <--------

2️⃣ Why {} makes sense for multiple exports

Example:

function sum(a, b) {
  return a + b;
}

function product(a, b) {
  return a * b;
}

module.exports = { sum, product };

What is this really?
module.exports = {
  sum: sum,
  product: product
};


Now import:

const { sum, product } = require('./math');


✔ You can access by name
✔ Order does NOT matter
✔ Very readable
✔ Safe for large projects

3️⃣ What if we use [] instead?
module.exports = [sum, product];


Importing:

const math = require('./math');

math[0](2, 3); // sum
math[1](2, 3); // product

Problems ❌

❌ No meaning: math[0] tells nothing

❌ Order matters (very dangerous)

❌ Adding one function breaks everything

❌ Bad readability

❌ Impossible to destructure by name

4️⃣ Key Difference (VERY IMPORTANT)
Feature	{} Object	[] Array
Access	By name	By index
Order matters	❌ No	✅ Yes
Readability	✅ High	❌ Low
Safe for scaling	✅ Yes	❌ No
Used in industry	✅ Yes	❌ No
5️⃣ Real-World Analogy 🧠
Object {} → Phone Contacts
{
  mom: "9999",
  dad: "8888"
}


You call by name.

Array [] → Queue
["mom", "dad"]


You depend on position.

📦 Exports should behave like contacts, not queues.

6️⃣ Why JavaScript community chose {}

Because:

Functions have names

Imports should be self-documenting

Code should not break when order changes

Objects represent APIs

That’s why:

module.exports = { sum, product };


is standard practice.

7️⃣ Final One-Line Rule (Remember this 🔥)

If you are exporting multiple things → always use {}
Use [] only when order matters (rare for exports)



```
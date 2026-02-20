## Shebang
this is called hashbang/shebang.

sytex:- #!`node-filepath`---> `#!node`

this path aplicable for both linux(ubantu) and windows --> `/usr/bin/env node`
1. install wsl ---> `wsl --install`
2. `restart` your system 


### Deffination
```
shebang is the first line wriiten on the top of the script file, and tell that os which interprator should run the file.

```
1. it start with --> `#!`.
2. Example:- `/usr/bin/env node`




## ✅ Without Shebang

You must explicitly tell which interpreter to use:
```
node index.js
```
Here you are manually telling:

---> “Use Node.js to run this file.”

## ✅ With Shebang

```
Example:

#!/usr/bin/env node
console.log("Hello Shivam");
```
Now give executable permission:
```
chmod +x index.js

Now you can run:

./index.js
```
You did NOT write node.
The OS automatically reads the first line (#!...) and understands:
```
“Oh, I should use Node.js to execute this.”
```


## 🔥 So Why Do We Need Shebang?
```
Because shebang makes your script behave like a real command-line tool.

🚀 Real-world Example

Tools like:

- npm
- npx
- eslint
- nodemon

```
When you type:

eslint app.js

You are NOT typing:

node path/to/eslint.js

Why does it work?

Because inside their file, there is:

#!/usr/bin/env node

That is shebang.

🧠 Simple Comparison
Without Shebang	With Shebang
node file.js	./file.js
Manual interpreter	Automatic interpreter
Normal script	CLI command
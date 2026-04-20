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


why need this cmd chmod +x index.js

Good question — this is about how Linux/Unix systems handle files.

🧠 Why do we need:
chmod +x index.js
👉 Short answer:

It gives your file permission to run as a program (executable).

🔍 What actually happens

In Linux, every file has permissions:

r → read
w → write
x → execute

When you try:

./index.js

👉 OS checks:

“Is this file allowed to execute?”

If x permission is missing, it will fail ❌

⚙️ What chmod +x does
chmod +x index.js

👉 Adds execute permission:

Now system treats it like a program
It will read the shebang (#!/usr/bin/env node)
Then runs it using Node.js
🔥 Real Flow

After this:

#!/usr/bin/env node
console.log("Hello")
Without permission ❌
./index.js
# Permission denied
With permission ✅
chmod +x index.js
./index.js
# Hello
🤔 Important Insight (Production Thinking)

You don’t always need this.

Use chmod +x when:
You want to run file like a CLI tool (./script.js)
You’re building command-line tools (like npm packages)
NOT needed when:
node index.js

👉 Node runs it directly, so no execute permission required

💡 Simple Analogy

Think of it like:

File = person
chmod +x = giving permission to perform on stage

Without permission → they exist but can’t perform
With permission → they can run/show execution

Notes:- 
```

r → read
w → write
x → execute

-> To check that perticular file have permission to executable.
         run cmd  -->  ls -l ./practice.js 
         o/p      -->  -rwxr-xr-x 1 HP 197121 212 Apr 20 07:35 ./practice.js*



```

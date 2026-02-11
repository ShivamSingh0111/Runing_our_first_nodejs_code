### In this notes we understand how many types of `Module` and how can we create our own `npm modules`


--> Types of modules
1. inbuild module/ native module
2. custom module/ user module
3. third party module / npm module


# Let's create our own `npm module` 
3. npm module:- 
        first you have to follow some step -->
1. node_modules folder structure
        1. create `node_modules` folder
        2. create own logic folder
        3. after that create two more file
            1. package.json
            2. and your own logic file --> where you want to add you own logic 

2. now initialize type inside `package.json` `module` or `common`
3. add you file inside logic folder. 

4. now the turn is create project where you want to  `import` or` use own npm module`


### let me show you project structure
- Project (whatever you project name )
    - node_modules (folder)
       - Maths (folder)
           - package.json (file) --> {"type":"module", "main":"index.js"} 
           - index.js(any file name) (file) --> your logic
       
    - app.js
    - package.json --> {"type":"module"} 

#### your `npm module` ready to use in `app.js` file, import it and use it.




### why we use `package.json` inside `node_modules` folder?
1. by default `node_modules` use `commonJs`
2. so whatever we export everything it will consider `cjs` when you export `mjs` then it will `throw error`
3. that's why to convert in `mjs` we use `package.json`




Notes:-
1.don't forgot to write this part `"main":"index.js"` inside `pacakge.json`,
other wise you will get warning -> you are not provide a path




## Now the question is that can we run `cjs` and `mjs` both without change `again and again` inside `node_modules`?
--> final ans is `YES`.
1. for doing this you have to follow some step and make some changes inside `node_modules` folder.
   - create two same logic file with `.mjs` or `.cjs` extenstion 
   - package.json --> other changes inside `package.json` file
      ```
      - for example your file name is ---> `math.mjs` and `math.cjs`
        {
            "main":"math.cjs",
            "module":"math.mjs",
            "exports":{
                "import":"./math.mjs",
                 "require":"./math.cjs",
            }
        }

      ```
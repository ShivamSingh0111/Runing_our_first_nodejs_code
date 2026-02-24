### NPX

- searches for a file and execute it.
- NPX cmd run in three parts.

1. First one is that
   - When you run `npx anyCmd`-->For ex:- `npx hello`
   - So first it will search `package.json`, Where check `name:'hello'` then check `bin:"app.js"`, here bin means(binery), but remeber one thing only file name means binary, not a content in binary.
   - then execute this file

```
package.json:-

{
    'name':'hello',
    'bin':'app.js'
}


```

2. Second way follow npx to search file
   - It will check node_modules folder and search .bin folder
   - Inside .bin folder run `hello` file, if it is exsist.
     Error:- 1. If you get err, `hello file is not recognized as an internal or external command`

   ```
   - To resolve this error, first you have to understand why this error comes
   - `by default npx` use `command prompt` to run any` npx command`.
   - To change `command prompt` to `bash`
   - use this heading to check shell ---> ## To find which shell exist in your terminal
   - Now resolve issue

   ```

3. third step to search file

- If packge install globally then it will found and execute.
- ex :- `npm i hello -g` --> hello file install inside --> `npm root -g`

4. step-4 find in `npm-cache`

- it will check in `npm-cache` if there is any file then it will execute the file.

5. step-5

- search hello package in npm registery
- prompt to install file, If file Found
- Download and execute.

## To find which shell exist in your terminal

```
1. npm config get script-shell -->  o/p null
2. npm config set script-shell "C:\Program Files\Git\bin\bash.exe"


```

Notes:-

1. npm root -g --> `If do you want where your global file add to run globally. you use this command and get path` --> you can get global folder path where all global file add.

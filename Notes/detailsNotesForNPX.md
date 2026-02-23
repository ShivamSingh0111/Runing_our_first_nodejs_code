### NPX
- searches for a file and execute it.
- NPX cmd run in three parts. 

1. First one is that 
   - When you run `npx anyCmd`-->For ex:- `npx hello` 
   - So first it will search `package.json`, Where check `name:'hello'` then check `bin:"app.js"`, here bin means(binery)
   - then execute this file
```
package.json:-

{
    'name':'hello',
    'bin':'app.js'
}


```

2. Second way follow npx to search file
    - It will check node_modules folder and search .bin file
    - Inside .bin file run hello file, if it is exsist.
    Error:-  1. If you get err, `hello file is not recognized as an internal or external command`
    ```
    - To resolve this error, first you have to understand why this error comes
    - `by default npx` use `command prompt` to run any` npx command`.
    - To change `command prompt` to `bash`
    - use this heading to check shell ---> ## To find which shell exist in your terminal
    - Now resolve issue

    ```


## To find which shell exist in your terminal
```
1. npm config get script-shell -->  o/p null
2. npm config set script-shell "C:\Program Files\Git\bin\bash.exe" 


```





Notes:-
1. npm root -g --> `If do you want where you global file add to run globally.`


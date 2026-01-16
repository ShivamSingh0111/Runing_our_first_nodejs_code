### Module Wrapper Function

- by uisng this you can see how you can get the module inside your vs code debugger.
- basic structure of the Module Wrapper function

```
(function(exports,require,module,__filename,__dirname){
<!-- module code goes here -->
})(exports,require,module,__filename,__dirname)


```

- this function call inside IIFE.

## Let's Understand How our module use Module wrapper function

1. first case, when we run `node day_2_2.js` cmd
   -> first, it will take `day2.js & day_2_2.js` content and wrap inside below IIFE function
   (function(exports,require,module,**filename,**dirname){
   <!-- module code goes here -->
   --> first file day2.js
   --> second file day_2_2.js
   <!-- get execute and provide res -->
   })(exports,require,module,**filename,**dirname)

2. same thing happen for require function

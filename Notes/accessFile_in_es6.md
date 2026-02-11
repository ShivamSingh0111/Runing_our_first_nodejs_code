### How can we access es6 fileName and dirName like `cjs`--->

- import.meta
  - this is the `whole object`
  - which you can access only incide module
  - you `can't` access `outside of the browser`.
  - this is avillabe inside `ES6` and `browser`
  - but you can not `direct access` inside `browser` and `node.js`

Notes:-

- If you think `import` is a object and inside import there is one `meta` property then `you are in wrong direction.`
- `import.meta` itself whole object.💯
  - Example:-
    import.meta = {};

### How can we use `import.meta`

- you can simple access `filename`, `dirname` using de-structuring.

  ex:-
  - const {filename, dirname} = import.meta;
  - console.log(filename)
  - console.log(dirname)



process.chdir('./src') --> currently i added `./src` path. 
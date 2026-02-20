## publish you npm package

1. Create account in `npm`
2. Once you done that, Open you terminal
3. Write this cmd `npm login`
4. whatever package you publish fill below all details in package.json

```
{
    "name":"sum_calculation",
    "version": "1.0.0",
    "module": "./math.mjs",
    "main": "./math.cjs",
    "exports":{
        "import":"./math.mjs",
        "require":"./math.cjs"
    }
}

```

5. before run another cmd --> first `enable 2f` security which is aviillable in npm profile.
6. then run `npm publish` now if you facing any error --> read and resolve.
7. now you package successfully published.

## If i update my code then How can we `update` on `npm`

1. normally you have to run `npm publish` this cmd.
2. but must be remember one thing before run this cmd `change your version` in `package.json`.
```
{
    "name":"sum_calculation",
    "version": "1.0.1",
    "module": "./math.mjs",
    "main": "./math.cjs",
    "exports":{
        "import":"./math.mjs",
        "require":"./math.cjs"
    }
}


```
# In this notes we learn about `version`

### Ex:- 2.4.1 ---> (major.minor.patch)

--> In `npm` when you `publish` your `package` then `some name` assign by npm for your verioning
--> you can `assign` your `package version number` in this way ---> `major.minor.patch`

- When you `install package` in your `project` then you can see `all package version` which is given in `package.json`.
- so the most importent thing is that there is some part which is importent to know,why it is given in version - caret (^) :- this will only `increase` your `minor` and `patch` part. - tilde(~) :- this will increase only your `patch` part.
- and some other part also avillable. - > and <=

```
package.json--->

{
    "express":"^1.2.1"
}

```

### Notes:-

```
1. remember one thing it will update only inside `node modules` not a `package.json`.
        - If you package.json look this
           {
                "express":"^1.2.1"
            }

        ---> it means your minor and patch part only update.
        - If you package.json look this
           {
                "express":"~1.2.1"
            }

        ---> it means your patch part only update.

          - If you package.json look this
           {
                "express":">1.2.1"
            }

        ---> it means your version update greater than current version.

                 - If you package.json look this
           {
                "express":"<1.2.1"
            }

        ---> it means your version update less than current version.

```

all update changes you can see in `node modules` only.

```
- When you use `npm i` then file and folder are vissible
1. package.lock.json -->
 - lock your all package version, it means If you node module and package.lock.josn is avillabe
 - then after npm i all install versions are same
2. npm modules


| Part | Meaning                          |
| ---- | -------------------------------- |
| 2    | Major (big breaking change)      |
| 4    | Minor (new feature, no breaking) |
| 1    | Patch (bug fix)                  |




```

# TypeScript Notes

https://www.udemy.com/course/understanding-typescript/learn/lecture/16888066#overview

## Section 2: Typescript Basics & Basic Types

### Core types:

| type    | value             | description                                                                       |
| ------- | ----------------- | --------------------------------------------------------------------------------- |
| number  | 1, 5.3, -10       | All numbers, no differentiation between integers or floats                        |
| string  | 'Hi', "Hi", `Hi`  | All text values                                                                   |
| boolean | true false        | Just these two, no "truthy" or "falsy" values                                     |
| object  | {age: 32}         | Any JavaScript object, more specific types(type of object) are possible           |
| Array   | [1, 2, 3]         | Any JavaScript array, type can be flexible or strict(regarding the element types) |
| Tuple   | [1,2]             | Added by TypeScript: Fixed-length array                                           |
| Enum    | enum { NEW, OLD } | Added by TypeScript: Automatically enumerated global constant identifiers         |
| Any     |                   | Most flexible type. !!! To be avoided !!!                                         |

<p style='font-size: 11px; text-align: right;'>[basic.ts], [obj-arays-enums.ts]</p>

##### [ts-files/union-aliases.ts]

...

##### [ts-files/functions.ts]

...

##### [ts-files/unknown-and-never]

...

[Everyday Types-TSDocs](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

## Section 3: The TypeScript Compiler (and its Configuration)

_! depending on how your dev env is setup (if `ts` is not installed globaly)_
_you may need to execute typescript from your_
_! node_modules with `npx` infront of every command_

- ts watch mode

```bash
# usefull if you work in a single file
tsc app.ts --watch
#or
tsc app.ts -w
```

```bash
# if we want to watch more than 1 file we need to run this once in your project folder
# creates tsconfig.json file and it tells that this project is handled by ts
tsc --init
# then we can run tsc to compile all of our .ts files
# or
tsc --watch
# to enter watch mode
```

```json
// tsconfig.json
{
  ...
  // exclude files you dont wan't to compile
  "exclude": ["node_modules", "ts-files"],
  // include is for sett only specific ts files or specific folder to be compiled
  "include": ["app.ts", "analytics.ts",]
  // if both are used and we have the same file or folder in exlcude its applied
  // include - exlcude
}
```

```json
// tsconfig.json
{
  // you can incude only files
  // suitable for smaller projects when you know you will have only couple of `.ts` files
  "files": ["app.ts"]
}
```

If the `lib` option is not set or commented out some defaults are asumed. Depending on your target version.

You can allow the creation of a source maps with the `"sourceMap": true` option. It helps with debugging. It allows the browser to understand and display ts files in the development tools. You can put breakpoints directly into the .ts files.

The `outDir` and `rootDir` options helps with organizing your files. The `outDir` option sets the target folder in which the compiled js files should be stored. Usualy is set to `dist` folder. Wit `rootDir` you can say explicitly where your root ts files live.

```json
{
  ...
  "outDir": "./dist",
  "rootDir": "./src",
  "removeComments": true // removes all comments you may have in the compiled js file.
}
```

`noEmitOnError` option disallow a creation of a problematic files.
`strict` option is preferable to always be used

There are some ts config options that can help you with your code quality:

```json
{
  "noUnusedLocalVariables": true,
  "noUnusedParameters": true,
  "noImplicitReturns": true
}
```

---

Useful resources:

- tsconfig Docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

- Compiler Config Docs: https://www.typescriptlang.org/docs/handbook/compiler-options.html

- VS Code TS Debugging: https://code.visualstudio.com/docs/typescript/typescript-debugging

---

## Section 4: Next-generation JavaScript & TypeScript

##### [src/next-gen.ts]

Interface: describe how an object should look like.

Interfasce vs custom type:

- Interface and a custom type are not exactly the same. Whilst often you can use them interchangeably and you can use interface instead of a custom type of the other way arount. There are also some differences:

  - interface can only be used to descrive the structure of an object.
  - another thing you can do with interfacs which you would also be able to do with custom types is you can implement an interface in a class. You can implement multiple interfaces by separating them by a coma.
    We can add other propertirs to the class but we are forsed to implement the logic of the interface into the class.

  ```js
  interface Greetable {
    name: string;
    greet(phrase: string): void;
  }

  class Person implements Greetable {
    name: string;
    age = 30;
    constructor(n: string) {
      this.name = n;
    }
    greet(phrase: string) {
      console.log(phrase + ' ' + this.name);
    }
  }
  ```

  - interfaces usualy are used to share logic between classes.

---

Usefull links
More on (JS) Classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

More on TS Interfaces: https://www.typescriptlang.org/docs/handbook/2/objects.html

---

##### [ts-files/advance-types.ts]

More on Advanced Types:
https://www.typescriptlang.org/docs/handbook/2/types-from-types.html

### Generics

[TypeScript Docs - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)

##### [working-with-generic-type-variables.ts]

##### [hello-world-of-generics.ts]

##### [merge-generic-func.ts]

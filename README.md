## Typescript Basics
This repo demonstrates e.g.
- Illustrates design patterns for building large applications
- How to integrate typescript into React/Redux or Express projects
- Shows difference between Composition and Inheritance
- How to write reusable code powered by classes and interfaces
- How to assemble reusable boilerplates for your own Typescript projects


NOTE: Remember to run npm install ```npm install``` for folders to get all the needed dependencies. If folder contains javascript (.js) files, it's purely because it was compiled from typescript (.ts) file.

### Folders:
- __features__: contains all the typescript language features
- __fetchjson__: simple example how use axios to fetch data
- __maps__: example how to use google maps api
- __rrts__: react + redux
- __server__: express + decorators
- __sort__: simple sorting logic
- __stats__: composition and inheritance when reading different endpoints
- __web__: web application framework from scratch

## Commands used during writing examples:
### Osx npm config:
```
nano ~/.zshenv
```

and add npm global bin to path 
```
"export PATH=/Users/<user>/.npm-global/bin/"
```

### commands
// compile and run typescript:
```
ts-node classes.ts
```
// compile:
```
tsc index.ts
```
// initialize npm project:
```
npm init -y
```
// run webapp with parcel:
```
npx parcel index.html
```
// initalize typescript config (modify rootDir and outDir variables at tsconfig.json):
```
tsc --init
```
// autocompile ts:
```
tsc -w
```
// autocompile and run using nodemon and concurrently:
```
npm install nodemon concurrently
```
// ..and following scripts to package.json:
```
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
```
// create react app in typescript syntax:
```
npx create-react-app rrts --template typescript
```

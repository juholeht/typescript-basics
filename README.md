#Osx config:
nano ~/.zshenv
and add npm global bin to path "export PATH=/Users/<user>/.npm-global/bin/"

#commands
// compile and run typescript:
ts-node classes.ts
// compile:
tsc index.ts
// initialize npm project:
npm init -y
// run webapp with parcel:
npx parcel index.html
// initalize typescript config (modify rootDir and outDir variables at tsconfig.json):
tsc --init
// autocompile ts:
tsc -w
// autocompile and run using nodemon and concurrently:
npm install nodemon concurrently
// ..and following scripts to package.json:
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },

// create react app in typescript syntax:
npm uninstall -g create-react-app

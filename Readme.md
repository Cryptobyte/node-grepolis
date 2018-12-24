## Grepolis Data for NodeJS
This library provides a simple layer between Grepolis's world data files and your NodeJS project. The purpose is to provide a quick and minimal library that turns the CSV (and some JSON) data into objects that can easily be worked with in Javascript. This project is under active development and will likely undergo several changes as it becomes stable.

This library has no external dependencies.

#### Installation
```
npm i grepolis --save
```

---

#### Usage
Every function in the Grepolis library is named after the file which it reads (list below) to make things simple for developers working with the library. Each function returns a Promise containing the data that was read. In most cases this data is a really large array of objects. Every endpoint requires a `server` variable which is just a string pointing to the server you are trying to read data from with the language part included, for example `"en110"` would be a valid input.

Here is an example of reading towns data:
```
const grepolis = require('grepolis');

/*
 * Read all towns data from en110 (Leontini)
 */
grepolis.towns('en110').then((data) => {
  // data = array of towns
  // this is a huge object list
  console.log('Town Data: ', data);
});
```

Take a look at the [sample data](Examples/Data/) folder for single objects formatted into JSON. These are the objects that will be returned in an array from the endpoint with the same name.

There are a couple endpoints which do not return arrays inside of their promises, and those are `units()` `researches()` and `buildings()` which provide information on in game world objects that are constant for every player. These three functions read `units.json` `researches.json` and `buildings.json` from the server endpoint and are only here to provide better API coverage.
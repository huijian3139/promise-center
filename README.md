# promise-center
A lib to set and get promise. You can get a promise before set it!
Installation
```
npm install promise-center
```

Usage 1:
```
import {getPromise, setPromise} from 'promise-center';

setPromise('world', Promise.resolve('Hello world!'));

const promiseA = getPromise('world');
promiseA.then(console.log);
```
Usage 2:
```
import {getPromise, setPromise} from 'promise-center';

const promiseB = getPromise('jason');
promiseB.then(console.log);

setPromise('jason', Promise.resolve('Hello Jason!'));
```
More usage, see test/promiseCenter.test.js

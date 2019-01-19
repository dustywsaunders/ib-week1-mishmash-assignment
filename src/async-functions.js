// ### Assignment 3: Asynchronous code
// _Note that this assignment asks you to delay the execution of functions, but the Mocha test runner sets a total limit of 2 seconds per test. So, make sure you only delay your functions for a few milliseconds._

// 1. You must create a module named `async-functions`. The test imports it with
//     ```js
//     const {
//       giveItBackLater,
//       addSomePromises,
//       promiseToGiveItBackLater
//     } = require("./async-functions")
//     ```
//     _Note: There should be **3** named exports that should all be functions_
// 1. The function `giveItBackLater` will be called with two parameters:
//    ```js
//    giveItBackLater(value, callback)
//    ```
//    The `callback` function should be called and given the `value` as a parameter. It should **NOT** do this right away, but later (asynchronously) using `setTimeout`.
// 1. The function `promiseToGiveItBackLater(value)` should return a promise that will resolve with the `value` later. **It should use `giveItBackLater`.** Meaning, you will wrap your callback-style function `giveItBackLater` with a promise-style version. 
// 1. Calling `addSomePromises(somePromise)` should chain one or more promises to the `somePromise` and return the last one. Your code should add both a fulfillment handler and a rejection handler.

//      - When `somePromise` resolves with a string, for example `"foo"`, then the returned promise should resolve with a string `"foofoo"`.
//      - When `somePromise` is rejected with a string, for example `"bar"`, then the returned promise should resolve with `"barbarbar"`.

//    So, your fulfillment handler should double the string and the rejection handler should triple the string. The testing code will reject or resolve the provided `somePromise` with a string value, and inspect what your returned promise resolves with.

// const randomNumberInAPromise = Promise.resolve(Math.random())
// randomNumberInAPromise.then(number => console.log(number))

// function partyHard(name, timeout){
//     const guestList = ['Beyonce', 'Snoopy']
//     return new Promise((resolve, reject) => {
//         if(guestList.includes(name)){
//             return setTimeout(() => resolve(name), timeout)    
//         }
//         reject(name)
//     })
// }

// partyHard("Rein", 200)
//     .then(value => console.log("Hey!", value))
//     .catch(value => console.log(value, "GET OUT!"))

// partyHard("Mimi", 400)
//     .then(value => console.log("Hey!", value), value => console.log(value, "GET OUT!"))
    
// partyHard("Snoopy", 10000).then(value => console.log("Hey!", value))
// partyHard("Beyonce", 2000).then(value => console.log("Hey!", value))


function giveItBackLater(value, callback) {
    setTimeout (function() {
        callback(value)
    }, 100)
};

function promiseToGiveItBackLater(value) {
    return new Promise((resolve, reject) => {
        giveItBackLater(value)
        resolve(value)
    })
};

function addSomePromises(somePromise) {
    return somePromise
        .then(string => string.repeat(2))
        .catch(string => string.repeat(3))
};


module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater };
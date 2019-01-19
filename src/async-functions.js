

const giveItBackLater = (value, callback) => {
    setTimeout (() => {
        callback(value);
    }, 100);
};

const promiseToGiveItBackLater = (value) => {
    return new Promise((resolve, reject) => {
        giveItBackLater(value);
        resolve(value);
        reject('Whoopsie!');
    })
};

const addSomePromises = (somePromise) => {
    return somePromise
        .then(string => string.repeat(2))
        .catch(string => string.repeat(3));
};

module.exports = { giveItBackLater, promiseToGiveItBackLater, addSomePromises };


//////////////////////////////////////////////////////
//       FUNCTIONS BEFORE I CLEANED UP CODE         //
//////////////////////////////////////////////////////
//                                                  //
// function giveItBackLater(value, callback) {      //
//     setTimeout (function() {                     //
//         callback(value)                          //
//     }, 100)                                      //
// };                                               //
//                                                  //
// function promiseToGiveItBackLater(value) {       //
//     return new Promise((resolve, reject) => {    //
//         giveItBackLater(value)                   //
//         resolve(value)                           //
//         reject('Whoopsie!')                      //
//     })                                           //
// };                                               //
//                                                  //
// function addSomePromises(somePromise) {          //
//     return somePromise                           //
//         .then(string => string.repeat(2))        //
//         .catch(string => string.repeat(3))       //
// };                                               //
//////////////////////////////////////////////////////
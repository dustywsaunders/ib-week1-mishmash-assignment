// ### Assignment 2: transform

// 1.  You must create a module named `transform` that exports a function named `groupAdultsByAgeRange`. The test imports it like this:
//     ```js
//     const groupAdultsByAgeRange = require("./transform").groupAdultsByAgeRange
//     ```
//     _Note: This is a named export_
// 1.  The exported `groupAdultsByAgeRange` should be a function.
// 1.  The function will be called with an array of objects as its argument. The objects represent people, with a property `name` and a property `age`. Your function should group each person **over the age of 18** into age ranges. Here are a few examples:
//     ```js
//     // Example 1
//     groupAdultsByAgeRange([{name: "Henry", age: 9}, {name: "John", age: 20}])
//     // Should result in:
//     const result = { '20 and younger': [ { name: 'John', age: 20 } ] }

//     // Example 2
//     groupAdultsByAgeRange([{name: "Anna", age: 31}, {name: "John", age: 32}, {name: "Hank", age: 60}])
//     // Should result in:
//     const result2 = { 
//       '31-40': [ { name: 'Anna', age: 31 }, { name: 'John', age: 32 } ],
//       '51 and older': [ { name: 'Hank', age: 60 } ] 
//     }
//     ```
// 1. Notice that the groups are only added to the resulting object if they are not empty. Make sure your function does the same.
// 1. You should use a combination of `filter` and `reduce`. If your solution uses `for`-loops instead of `reduce` for creating the **final object**, you will receive partial points. The use of `for`-loops is allowed, but try to construct the returned "grouping" object using `reduce`.
// 1. These are the groups that your code needs to return. Use the text as the name of the property:
//     - `20 and younger`
//     - `21-30`
//     - `31-40`
//     - `41-50`


// function groupAdultsByAgeRange(peopleArray) {
    
//     const ageRanges = {
//         '20 and younger': [],
//         '21-30': [],
//         '31-40': [],
//         '41-50': []
//     };
   
//     for (let i = 0; i < peopleArray.length; i++) {
//         if (peopleArray[i].age >= 41) {
//             ageRanges['41-50'].push(peopleArray[i])
//         } else if (peopleArray[i].age >= 31) {
//             ageRanges['31-40'].push(peopleArray[i])
//         } else if (peopleArray[i].age >= 21) {
//             ageRanges['21-30'].push(peopleArray[i])
//         } else if (peopleArray[i].age < 21) {
//             ageRanges['20 and younger'].push(peopleArray[i])
//         };
//     };

//     if (ageRanges['41-50'].length === 0) {
//         delete ageRanges['41-50']
//     } else if (ageRanges['31-40'].length === 0) {
//         delete ageRanges['31-40']
//     } else if (ageRanges['21-30'].length === 0) {
//         delete ageRanges['21-30']
//     } else if (ageRanges['20 and younger'].length === 0) {
//         delete ageRanges['20 and younger']
//     };

//     return ageRanges
// }

const groupAdultsByAgeRange = peopleArray => {


    return peopleArray
        .filter(person => person.age >=18)
        .reduce((obj, person) => {
        if (person.age >= 51) {
            ageGroup = '51 and older'
        } else if (person.age >= 41) {
            ageGroup = '41-50'
            //  = obj['41-50'].push(person)
        } else if (person.age >= 31) {
            ageGroup = '31-40'
            //  = obj['31-40'].push(person)
        } else if (person.age >= 21) {
            ageGroup = '21-30'
            //  = obj['21-30'].push(person)
        } else {
            ageGroup = '20 and younger'
            //  = obj['20 and younger'].push(person)
        };
        obj[ageGroup] = person;
        return obj
    }, {});
};

module.exports = { groupAdultsByAgeRange };


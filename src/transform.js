
const groupAdultsByAgeRange = peopleArray => {
    return peopleArray
        .filter(person => person.age >=18)
        .reduce((obj, person) => {
        if (person.age >= 51) {
            ageGroup = '51 and older'
        } else if (person.age >= 41) {
            ageGroup = '41-50'
        } else if (person.age >= 31) {
            ageGroup = '31-40'
        } else if (person.age >= 21) {
            ageGroup = '21-30'
        } else if (person.age < 21) {
            ageGroup = '20 and younger'
        };
        obj[ageGroup] = [person]
        obj[ageGroup] = [...obj[ageGroup], person]
        return obj
    }, {});
};

module.exports = { groupAdultsByAgeRange };


// PLANNING OF FUNCTIONS BEFORE RE-WRITING
//                                                                       
// const ageRanges = {
//     '20 and younger': [],
//     '21-30': [],
//     '31-40': [],
//     '41-50': []};
//
// for (let i = 0; i < peopleArray.length; i++) {
//     if (person.age >= 51) {
//         ageRanges['51 and older'].push(peopleArray[i])
//     } else if(peopleArray[i].age >= 41) {
//         ageRanges['41-50'].push(peopleArray[i])
//     } else if (peopleArray[i].age >= 31) {
//         ageRanges['31-40'].push(peopleArray[i])
//     } else if (peopleArray[i].age >= 21) {
//         ageRanges['21-30'].push(peopleArray[i])
//     } else if (peopleArray[i].age < 21 && peopleArray[i].age > 18) {
//         ageRanges['20 and younger'].push(peopleArray[i])
//     };};
//
// if (ageRanges['51 and older'].length === 0) {
//     delete ageRanges['51 and older']
// } else if (ageRanges['41-50'].length === 0) {
//     delete ageRanges['41-50']
// } else if (ageRanges['31-40'].length === 0) {
//     delete ageRanges['31-40']
// } else if (ageRanges['21-30'].length === 0) {
//     delete ageRanges['21-30']
// } else if (ageRanges['20 and younger'].length === 0) {
//     delete ageRanges['20 and younger']
// };
// return ageRanges

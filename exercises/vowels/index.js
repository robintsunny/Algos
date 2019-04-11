// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    // returns array if matches exists or null if no matches were made
    // g option captures all instances, not just the first
    // i is for case insensitive

    return matches ? matches.length : 0
}
// function vowels(str) {
//     let res = 0;

//     str.toLowerCase().split('').forEach(letter => {
//         if (
//             letter === 'a' ||
//             letter === 'e' ||
//             letter === 'i' ||
//             letter === 'o' ||
//             letter === 'u'
//         ) {
//             res++
//         }
//     })

//     return res
// }

module.exports = vowels;

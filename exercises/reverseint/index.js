// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let rev = n.toString().split('').reverse().join('');
    return parseInt(rev) * Math.sign(n)
}

// function reverseInt(n) {
//     let rev;
//     if (n < 0) {
//         rev = (n*-1).toString().split('').reverse();
        
//         let i = 0;
//         while (rev[i] === '0') {
//             i++
//         }

//         return -1  * parseInt(rev.slice(i).join(''));
        
//     } else {
//         rev = n.toString().split('').reverse();
//         let i;
//         while (rev[i] === '0') {
//             i++
//         }
        
//         return parseInt(rev.slice(i).join(''));
//     }
// }

module.exports = reverseInt;

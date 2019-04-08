// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger; 
    return str.split('').reduce((acc, i) => {
        return i + acc;
    },'')
}


// function reverse(str) {
//     let rev = '';

//     for (let i of str) {
//         rev = i + rev;
//     }

//     return rev
// }

// function reverse(str) {
//     let rev = '';

//     for (let i=0; i < str.length; i++) {
//         rev = str[i] + rev;
//     }

//     return rev
// }

reverse('asdf')


module.exports = reverse;

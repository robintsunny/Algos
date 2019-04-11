// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    // RECURSIVE
    
    // end of rows (reached bottom step)
    if (n === row) {
        return
    }

    // end of stair length (n = 5, stair = '# # _ _ _')
    if (n === stair.length) {
        console.log(stair)
        steps(n, row+1);
        return;
    }

    // building a stair length
    if (stair.length <= row) {
        stair += '#';
    } else {
        stair += ' ';
    }

    steps(n, row, stair)
}

// function steps(n) {

//     // 1. iterate thru n
//     // 2 console n number of # with n-i spaces
//     let step = new Array(n+1).join(' ');
    
//     for (let i = 0; i<n; i++) {
//         step = step.split('')
//         step[i] = '#';
//         step = step.join('')
//         console.log(step)
//     }
// }

module.exports = steps;

// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let row = new Array(n*2).join(' ');
    const mid = n-1;
    // row[mid] = '#';

    let i;

    for (i = 0; i<n; i++) {
        row = row.split('')
        row[mid+i] = '#';
        row[mid-i] = '#';
        row = row.join('')
        console.log(row)
    }

}

module.exports = pyramid;

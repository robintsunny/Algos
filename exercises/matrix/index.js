// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    res = sqMatrix(n)
    
    let row = 0;
    let col = 0;
    let rowMin = -1
    let colMin = -1
    let rowMax = n
    let colMax = n;
    let counter = 1;
    const counterMax = n*n;

    // while counter 
        // iterate over first row while col < colMax
        // check counter (break)
        // set rowMin++


        // iterate down last colum while row < rowMax
        // check counter (break?)
        // set colMax--
        
        // rev iterate last row while col > colMin
        // check counter (break?)
        // rowMax--
        
        // rev iterate first column while row > rowMin
        // check counter (break?)
        // set colMin++

    while (counter) {
        // go L-R top row
        for (let i = colMin+1; i<colMax; i++) {
            console.log(res)
            res[rowMin+1][i] = counter;
            counter++
        }
        
        if (counter > counterMax) {break}
        rowMin++
        
        
        // go T-D right column
        for (let i = rowMin+1; i<rowMax; i++) {
            console.log(res)
            res[i][colMax-1] = counter;
            counter++
        }
        
        if (counter > counterMax) {break}
        colMax--
        
        // go R-L bottom row
        for (let i = colMax-1; i>colMin; i--) {
            console.log(res)
            res[rowMax-1][i] = counter;
            counter++
        }
        
        if (counter > counterMax) {break}
        rowMax--
        
        // go B-T left column
        for (let i = rowMax-1; i>rowMin; i--) {
            console.log(res)
            res[i][colMin+1] = counter;
            counter++;
        }
        
        if (counter > counterMax) {break}
        colMin++
    }
    console.log(res)
    return res


}


function sqMatrix(n) {
    const rows = new Array(n)

    for (let i = 0; i<n; i++) {
        rows[i] = [];
    }

    return rows
}

matrix(7)
module.exports = matrix;

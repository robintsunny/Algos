// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let res = [];
    let i = 0;

    while (i < array.length) {
        res.push(array.slice(i,i+size));
        i += size;
    }

    return res;
}
// function chunk(array, size) {

//     /*
//         1. while shrinking array has length:
//         2. push a chunk into res
//         3. if arrayRemainder.length < size, return res.push(array)
//     */

//     let res = [];

//     while (array.length) {
//         if (array.length < size) {
//             res.push(array)
//             return res
//         }

//         let chunk = array.slice(0,size);
//         res.push(chunk);
//         array = array.splice(size)
//     }

//     return res;
// }

chunk([0,1,2,3,4,5,6,7,8,9],3)

module.exports = chunk;

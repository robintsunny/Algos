// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    const cache = {};

    return function(...args) {
        if (cache[args]) {
            return cache[args]
        } 

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}



function slowFib(n) {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    }

    return fib(n-2) + fib(n-1) //slowfib has to call the memoized version
}
    
const fib = memoize(slowFib)

// function fib(n) {
//     const res = [0,1]

//     while (res.length <= n) {
//         res.push(res[res.length-1] + res[res.length-2])
//     }

//     return res[n]
// }

module.exports = fib;

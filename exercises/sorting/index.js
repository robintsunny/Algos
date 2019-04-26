// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let sorted = false;

    while (!sorted) {
        sorted = true
        for (let i = 0; i<arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                sorted = false;
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
            }
        }
    }

    return arr
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

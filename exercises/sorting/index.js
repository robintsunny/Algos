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
    let indexOfMin;
    
    for (let i = 0; i < arr.length; i++) {
        indexOfMin = i
        for (let j = i+1; j<arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j
            }
        }

        if (indexOfMin !== i) {
            [arr[i], arr[indexOfMin]] = [arr[indexOfMin], arr[i]]
        }
    }

    return arr
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

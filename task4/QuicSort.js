function quickSort(arr) {
    let len = arr.length;
    if (len <= 1) {
        return arr;
    }

    const pivot = arr[len - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < len - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

let unsortedArray3 = [64, 34, 25, 12, 22, 11, 90];
console.log("Quick Sort:", quickSort(unsortedArray3.slice()));

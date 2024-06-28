function quickSort(arr) {
    // let len = arr.lenght;
    if (arr.lenght <= 1) {
        return arr;
    }
// mean n-1 for the last element of the array as like given below is las element is 90 that is the pivot 
    const pivot = arr[arr.length - 1];
    // these two array are created due to the partion of main array into two parts left array and right array left array will get that elements which will be less than of pivott push pivot towards left array and which will be greater than pivot they will be push towards right in right 
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
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
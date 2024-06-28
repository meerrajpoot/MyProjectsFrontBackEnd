function mergeSort(arr) {
    // this is for when gievn array become 1 or equal to 1 mean there is no more need to change anything
    // if array length is 1 or less than 1 then return the array
    let len = arr.length;
    if (len <= 1) {
        return arr;
    }

    const middle = Math.floor(len / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}
// Base Case
// this merege funcation show the whole size of array elements from start to end
function merge(left, right) {
    // to store the value made empty array  result is that empty array to store arranged value
    let result = [];


    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            // push will add a new item at the end of array
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

let unsortedArray2 = [64, 34, 25, 22, 11, 90];
console.log("Merge Sort:", mergeSort(unsortedArray2.slice()));

function removeDuplicates(arr) {
    return [...new Set(arr)];
}


// let numbers = [1, 2, 3,3,6,7,7,8,8, 4, 5];

let numbers = [1, 2, 3, 4, 5];

console.log("Unique Elements:", removeDuplicates(numbers));
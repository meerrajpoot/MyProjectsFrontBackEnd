function findMaxAndMin(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
}

let numbers = [1, 2, 3, 4, 5];
console.log("Max and Min:", findMaxAndMin(numbers));
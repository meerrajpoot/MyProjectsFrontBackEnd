function sumOfElements(arr) {
    let Array = arr.reduce((sum, current) => sum + current);
    return Array;
    // here is ment by this that accumolater means sum will be start from 0
    // sum[0]+current[1] = 1 than sum will be sum[1]  sum[1]+current[2]  in current array value run

    // return arr.reduce((sum, current) => sum + current, 4);
    // here is ment by this that accumolater means sum will be start from 4 
    // sum[4]+current[1] = 5 than sum will be sum[5]
}
let numbers = [1, 2, 3, 4, 5];
console.log("Sum:", sumOfElements(numbers));
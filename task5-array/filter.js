function filterOddNumbers(arr) {
    let odd = arr.filter(num => num % 2 !== 0);
    let even = arr.filter(num => num % 2 == 0);


    return {odd,even};
}

let numbers = [1, 2, 3, 4, 5];

console.log("Odd & Even Numbers:", filterOddNumbers(numbers));
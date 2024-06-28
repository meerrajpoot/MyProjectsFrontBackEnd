// Aggregate Information: Given an array of person objects, write a function that calculates the average age and returns it.

function calculateAverageAge(people) {
    const totalAge = people.reduce((sum, person) => sum + person.age, 0);
    return totalAge / people.length;
}

const people =[
    {name: 'Hamza' , age: 20},
    {name: 'Abigail' , age: 21},
    {name: 'John' , age: 22}
]

const averageAge = calculateAverageAge(people);
console.log(`The average age is ${averageAge}.`);

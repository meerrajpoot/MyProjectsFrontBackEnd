// Filter Objects in Array: Given an array of person objects, write a function that filters out people under a specified age and returns a new array.

function filterPeopleByAge(people, age) {
    return people.filter(person => person.age >= age);
}

const people = [
    { name: 'John', age: 30 },
    { name: 'Harry', age: 29.5 },
    { name: 'Poter', age: 31 },
    { name: 'Cheeguara', age: 34 },
    { name: 'Alice', age: 35 }
];

const filteredPeople = filterPeopleByAge(people, 29);
console.log(filteredPeople);

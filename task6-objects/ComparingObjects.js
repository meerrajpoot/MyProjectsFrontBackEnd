function getOlderPerson(Haroon, Safyan) {
    return (Haroon.age > Safyan.age ? Haroon.name : Safyan.name);
}

const olderPersonName = getOlderPerson({ name: 'John', age: 70 }, { name: 'Jane', age: 35 });
console.log(`The older person is ${olderPersonName}.`);

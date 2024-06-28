function createObjectFromUserInput() {
    const obj = {};
    while (true) {
        const key = prompt('Enter key (or type "done" to finish):');
        if (key === 'done') {
            break;
        }
        const value = prompt('Enter value:');
        obj[key] = value;
    }
    return obj;
}

const userObject = createObjectFromUserInput();
console.log(userObject);

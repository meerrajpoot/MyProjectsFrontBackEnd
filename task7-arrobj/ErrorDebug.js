
// Error Handling and Debugging: Include comprehensive error handling in all functions, ensuring that they handle unexpected inputs gracefully. Use console logs to debug and track the flow of the functions.

function interactiveArrayManipulation(arr) {
    while (true) {
      try {
        const operation = prompt(
          'Choose an operation:\n' +
          '1. Add new item\n' +
          '2. Remove item\n' +
          '3. Modify item\n' +
          '4. Print array\n' +
          '5. Exit'
        );
  
        switch (operation) {
          case '1':
            const newItem = prompt('Enter the new item:');
            if (!newItem) {
              throw new Error('Invalid input: newItem cannot be empty');
            }
            arr.push(newItem);
            console.log(arr);
            break;
          case '2':
            const indexToRemove = parseInt(prompt('Enter the index to remove:'));
            if (isNaN(indexToRemove) || indexToRemove < 0 || indexToRemove >= arr.length) {
              throw new Error('Invalid input: indexToRemove must be a valid index');
            }
            arr.splice(indexToRemove, 1);
            console.log(arr);
            break;
          case '3':
            const indexToModify = parseInt(prompt('Enter the index to modify:'));
            if (isNaN(indexToModify) || indexToModify < 0 || indexToModify >= arr.length) {
              throw new Error('Invalid input: indexToModify must be a valid index');
            }
            const newValue = prompt('Enter the new value:');
            if (!newValue) {
              throw new Error('Invalid input: newValue cannot be empty');
            }
            arr[indexToModify] = newValue;
            console.log(arr);
            break;
          case '4':
            console.log(arr);
            break;
          case '5':
            return;
          default:
            console.log('Invalid operation');
        }
      } catch (error) {
        console.error(error.message);
      }
    }
  }
  
  
  const array = ['apple', 'banana', 'cherry'];
  interactiveArrayManipulation(array);
  
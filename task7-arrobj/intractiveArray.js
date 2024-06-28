// Interactive Array Manipulation: Develop a function that allows users to input values to add to an array, providing options to add new items, remove items, or modify existing items in the array.



function interactiveArrayManipulation(arr) {
    while (true) {
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
          arr.push(newItem);
          break;
        case '2':
          const indexToRemove = prompt('Enter the index to remove:');
          if (indexToRemove >= 0 && indexToRemove < arr.length) {
            arr.splice(indexToRemove, 1);
          } else {
            console.log('Invalid index');
          }
          break;
        case '3':
          const indexToModify = prompt('Enter the index to modify:');
          if (indexToModify >= 0 && indexToModify < arr.length) {
            const newValue = prompt('Enter the new value:');
            arr[indexToModify] = newValue;
          } else {
            console.log('Invalid index');
          }
          break;
        case '4':
          console.log(arr);
          break;
        case '5':
          return;
        default:
          console.log('Invalid operation');
      }
    }
  }
  
  // Example usage
  const array = ['apple', 'banana', 'cherry'];
  interactiveArrayManipulation(array);
  
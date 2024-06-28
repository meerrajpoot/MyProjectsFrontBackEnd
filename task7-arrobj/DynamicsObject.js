// Dynamic Object Creation: Write a function that dynamically creates an object based on user input. The function should prompt the user to enter key-value pairs and construct an object from these inputs. Include error handling for invalid inputs, such as non-string keys or empty values.

function createDynamicObject() {
    const obj = {};
    while (true) {
      const key = prompt('Enter key (or type "done" to finish):');
      if (key === 'done') {
        break;
      }
      if (typeof key !== 'string') {
        alert('Invalid input. Key must be a string.');
        continue;
      }
      const value = prompt('Enter value:');
      if (value === '') {
        alert('Invalid input. Value cannot be empty.');
        continue;
      }
      obj[key] = value;
    }
    return obj;
  }
  const dynamicobj = createDynamicObject();
  console.log(dynamicobj)
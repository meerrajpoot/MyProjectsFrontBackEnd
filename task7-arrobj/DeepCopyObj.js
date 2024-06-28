// Deep Copy of Object: Write a function to perform a deep copy of a nested object. This function should be able to handle nested objects of arbitrary depth and complexity.

function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    const copy = Array.isArray(obj) ? [] : {};
  
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        copy[key] = deepCopy(obj[key]);
      }
    }
  
    return copy;
  }
  
  
  const obj = [
  {a: 1,
    b: {
      c: 2,
      d: {
        e: 3
      }
    }
  }
  ];
  
  
  const copiedObj = deepCopy(obj);
  
  
  console.log('Original Object:', obj);
  console.log('Copied Object:', copiedObj);
  
  
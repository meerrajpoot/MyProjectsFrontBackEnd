// Manipulating Array of Objects: Write a function to sort an array of objects based on a specific property, such as sorting books by their year of publication.

function sortByProperty(arr, property) {

const demo = arr.sort((a, b) => a[property] - b[property]);

    return demo;
  }
  
  
  const books = [
    { title: 'Book 1', year: 2005 },
    { title: 'Book 2', year: 1998 },
    { title: 'Book 3', year: 2010 }
  ];
  
  
  const sortedBooks = sortByProperty(books, 'title');
  
  
  console.log(sortedBooks);
  
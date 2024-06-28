// Advanced Filtering and Reduction: Implement a function that filters an array of objects based on multiple criteria. Create a function that uses the reduce method to aggregate information from an array of objects for example finding the total number of pages across a collection of books.


function filterByCriteria(arr, criteria) {
    return arr.filter(item => {
      for (let key in criteria) {
        if (item[key] !== criteria[key]) {
          return false;
        }
      }
      return true;
    });
  }
  

  function aggregateTotal(arr, property) {
    return arr.reduce((total, item) => total + item[property], 0);
  }
  
  
  const books = [
    { title: 'Book 1', pages: 100, author: 'Author 1' },
    { title: 'Book 2', pages: 200, author: 'Author 2' },
    { title: 'Book 3', pages: 150, author: 'Author 1' },
  ];
  
  
  const filteredBooks = filterByCriteria(books, { author: 'Author 2' });
  console.log('Filtered Books:', filteredBooks);
  
  
  const totalPages = aggregateTotal(books, 'pages');
  console.log('Total Pages:', totalPages);
  
const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    console.log(response.data);
    // Use the data as needed
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

const axios = require('axios');

const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log(response.data);
    // Use the data as needed
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();

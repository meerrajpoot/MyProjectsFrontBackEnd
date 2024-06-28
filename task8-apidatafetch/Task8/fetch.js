fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => 
    // for making json object
    response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

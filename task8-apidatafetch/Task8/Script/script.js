const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      const todoList = document.getElementById('todo-list');
  
      data.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        todoList.appendChild(li);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  fetchData();
  
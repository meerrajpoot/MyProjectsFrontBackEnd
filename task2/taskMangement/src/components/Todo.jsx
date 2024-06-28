import React, { useState } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks([...tasks, { id: tasks.length + 1, title, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1>Task Mangement</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const title = e.target.title.value;
          if (title.trim()) {
            addTask(title);
            e.target.title.value = '';
          }
        }}
      >
        <input type="text" name="title" placeholder="Add Task" />
        <button type="submit">Add </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.title}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => editTask(task.id)}>Edit</button>
            <button onClick={() => updateTask(task.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

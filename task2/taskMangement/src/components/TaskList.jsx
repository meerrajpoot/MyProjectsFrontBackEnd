import React, { useState } from 'react';

const TaskManagementApp = () => {
  const [tasks, setTasks] = useState([
    
  ]);

  const addTask = () => {
    const newTask = { id: tasks.length + 1, title: `Task ${tasks.length + 1}`, completed: false };
    setTasks([...tasks, newTask]);
    // Show a notification for the successful action
    // You can use a library like react-toastify for this
    // Example: toast.success('Task added successfully');
  };

  const updateTask = (id, title) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, title } : task)));
    // Show a notification for the successful action
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
    // Show a notification for the successful action
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span>
            <button onClick={() => updateTask(task.id, prompt('Enter new task title', task.title))}>Edit</button>
            <button onClick={() => updateTask(task.id, prompt('Enter new task title', task.title))}>Update</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManagementApp;


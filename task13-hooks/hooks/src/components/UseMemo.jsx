import React, { useState, useMemo } from 'react';

const UseMemo = () => {
  const [tasks, setTasks] = useState([
    'Buy groceries',
    'Complete project report',
    'Clean the house',
    'Read a book',
  ]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const totalTasks = useMemo(() => {
    console.log('Calculating total tasks...');
    return tasks.length;
  }, [tasks]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Task List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          className="p-2 border rounded mr-2"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Add Task
        </button>
      </div>
      <ul className="space-y-2 mb-4">
        {tasks.map((task, index) => (
          <li key={index} className="p-2 border rounded">
            {task}
          </li>
        ))}
      </ul>
      <p className="text-xl">Total Tasks: {totalTasks}</p>
    </div>
  );
};

export default UseMemo;

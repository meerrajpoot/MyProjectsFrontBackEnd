import React, { useState, useEffect } from "react";
import axios from "axios";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

function MyCrud() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:5000/tasks");
    setTasks(response.data);
  };

  const handleSubmit = async () => {
    if (newTask.trim() === "") return;

    if (editingTaskId) {
      // Update existing task
      const response = await axios.put(
        `http://localhost:5000/tasks/${editingTaskId}`,
        {
          title: newTask,
        }
      );

      setTasks(
        tasks.map((task) => (task._id === editingTaskId ? response.data : task))
      );
      setEditingTaskId(null);
    } else {
      // Add new task
      const response = await axios.post("http://localhost:5000/tasks", {
        title: newTask,
        completed: false,
      });
      setTasks([...tasks, response.data]);
    }

    setNewTask("");
  };

  const updateTask = async (id, completed) => {
    const response = await axios.put(`http://localhost:5000/tasks/${id}`, {
      completed: !completed,
    });
    setTasks(tasks.map((task) => (task._id === id ? response.data : task)));
  };

  const startEditing = (task) => {
    setNewTask(task.title);
    setEditingTaskId(task._id);
  };

  const cancelEditing = () => {
    setEditingTaskId(null);
    setNewTask("");
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "incompleted") return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
        <div className="flex mb-6">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={editingTaskId ? "Edit task" : "Add a new task"}
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {editingTaskId ? "Update" : "Add Task"}
          </button>
          {editingTaskId && (
            <button
              onClick={cancelEditing}
              className="ml-2 bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          )}
        </div>
        <div className="flex mb-4 border-b">
          <button
            onClick={() => setFilter("all")}
            className={`py-2 px-4 font-medium ${
              filter === "all"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`py-2 px-4 font-medium ${
              filter === "completed"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter("incompleted")}
            className={`py-2 px-4 font-medium ${
              filter === "incompleted"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Incompleted
          </button>
        </div>
        <ul>
          {filteredTasks.map((task) => (
            <li
              key={task._id}
              className="flex items-center justify-between p-3 border-b border-gray-200"
            >
              <div className="flex items-center flex-grow">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => updateTask(task._id, task.completed)}
                  className="w-5 h-5 mr-3 text-blue-500 rounded cursor-pointer focus:ring-blue-500"
                />
                <span
                  className={`flex-grow ${
                    task.completed
                      ? "line-through text-gray-500"
                      : "text-gray-700"
                  }`}
                >
                  {task.title}
                </span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => startEditing(task)}
                  disabled={editingTaskId !== null}
                  className={`flex items-center bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    editingTaskId !== null
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  <PencilIcon className="h-4 w-4 mr-1" /> Edit
                </button>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="flex items-center bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <TrashIcon className="h-4 w-4 mr-1" /> Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyCrud;

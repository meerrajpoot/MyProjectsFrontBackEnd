import React, { useState, useEffect } from "react";
import axios from "axios";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

function MyCrud() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  // Clear message after 3 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  // Clear error after 3 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/tasks");
      if (response.data.success) {
        setTasks(response.data.data);
        setSuccess(response.data.message);
      } else {
        setError("Failed to load tasks. Please try again.");
      }
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError(
        err.response?.data?.message || "Failed to load tasks. Please try again."
      );
    }
  };

  const handleSubmit = async () => {
    if (newTask.trim() === "") {
      setError("Task cannot be empty!");
      return;
    }

    try {
      if (editingTaskId) {
        // Update existing task
        const response = await axios.put(
          `http://localhost:5000/tasks/${editingTaskId}`,
          {
            title: newTask,
          }
        );

        if (response.data.success) {
          setTasks(
            tasks.map((task) =>
              task._id === editingTaskId ? response.data.data : task
            )
          );
          setEditingTaskId(null);
          setSuccess(response.data.message);
        } else {
          setError(response.data.message);
        }
      } else {
        // Add new task
        const response = await axios.post("http://localhost:5000/tasks", {
          title: newTask,
          completed: false,
        });

        if (response.data.success) {
          setTasks([...tasks, response.data.data]);
          setSuccess(response.data.message);
        } else {
          setError(response.data.message);
        }
      }

      setNewTask("");
    } catch (err) {
      console.error("Error submitting task:", err);
      setError(
        err.response?.data?.message ||
          (editingTaskId ? "Failed to update task." : "Failed to add task.")
      );
    }
  };

  const updateTask = async (id, completed) => {
    try {
      const response = await axios.put(`http://localhost:5000/tasks/${id}`, {
        completed: !completed,
      });

      if (response.data.success) {
        setTasks(
          tasks.map((task) => (task._id === id ? response.data.data : task))
        );
        setSuccess(response.data.message);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error("Error updating task:", err);
      setError(err.response?.data?.message || "Failed to update task status.");
    }
  };

  const startEditing = (task) => {
    setNewTask(task.title);
    setEditingTaskId(task._id);
    setSuccess("Ready to edit task!");
  };

  const cancelEditing = () => {
    setEditingTaskId(null);
    setNewTask("");
    setSuccess("Edit cancelled.");
  };

  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/tasks/${id}`);

      if (response.data.success) {
        setTasks(tasks.filter((task) => task._id !== id));
        setSuccess(response.data.message);
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      console.error("Error deleting task:", err);
      setError(err.response?.data?.message || "Failed to delete task.");
    }
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

        {/* Success Message */}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">{success}</span>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

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

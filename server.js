import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(morgan("dev"));

app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/taskmanager")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Task Schema
const taskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

const Task = mongoose.model("Task", taskSchema);

// Routes
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/tasks", async (req, res) => {
  const newTask = new Task(req.body);
  await newTask.save();
  res.json(newTask);
});

app.put("/tasks/:id", async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updatedTask);
});

app.delete("/tasks/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

app.get("/tasks/filter", async (req, res) => {
  const filter = req.query.filter;
  let tasks;

  if (filter === "completed") {
    tasks = await Task.find({ completed: true });
  } else if (filter === "incomplete") {
    tasks = await Task.find({ completed: false });
  } else {
    tasks = await Task.find();
  }

  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

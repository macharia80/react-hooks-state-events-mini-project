import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";

// Sample data (replace with your actual data)
const TASKS = [
  { id: 1, text: "Buy groceries", category: "Shopping" },
  { id: 2, text: "Clean the house", category: "Home" },
  { id: 3, text: "Read a book", category: "Personal" },
];

const CATEGORIES = ["All", "Shopping", "Home", "Personal"];

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Delete a task
  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Filter tasks by category
  function handleFilter(category) {
    setSelectedCategory(category);
  }

  // Add a new task
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  // Filter tasks based on selected category
  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div>
      <h1>Task List</h1>
      <CategoryFilter categories={CATEGORIES} onFilter={handleFilter} />
      <NewTaskForm categories={CATEGORIES.slice(1)} onTaskFormSubmit={handleAddTask} />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
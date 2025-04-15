import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = { id: Date.now(), text, category };
    onTaskFormSubmit(newTask); // Pass the new task to the parent
    setText(""); // Reset form fields
    setCategory(categories[0]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
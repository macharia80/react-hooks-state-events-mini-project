import React from "react";

function Task({ task, onDelete }) {
  return (
    <li>
      <span>{task.text}</span>
      <span>{task.category}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}

export default Task;
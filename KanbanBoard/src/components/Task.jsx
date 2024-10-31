import React from "react";
import "../styles/Task.css";

export default function Task({ items, onDelete }) {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="kanban-item">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>
            <strong>Assignee:</strong> {item.assignee}
          </p>
          <p>
            <strong>Priority:</strong> {item.priority}
          </p>
          <p>
            <strong>Due Date:</strong> {item.dueDate}
          </p>
          <button id="delete-button" onClick={() => onDelete(item.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

import { useState } from 'react';
import '../styles/KanbanBoard.css';
import data from "../assets/kanban.json";

export default function KanbanBoard() {
  const initialBoards = {
    todo: {
      title: "To Do",
      items: data.filter(task => task.status === "To Do"),
    },
    inProgress: {
      title: "In Progress",
      items: data.filter(task => task.status === "In Progress"),
    },
    done: {
      title: "Done",
      items: data.filter(task => task.status === "Done"),
    },
  };

  const [boards] = useState(initialBoards);

  return (
    <div id='overlay-lower'>
      <div id="kanban-container">
        {boards.todo && (
          <div className="kanban-column">
            <h2>{boards.todo.title}</h2>
            <div className="kanban-items">
              {boards.todo.items.map(item => (
                <div key={item.id} className="kanban-item">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p><strong>Assignee:</strong> {item.assignee}</p>
                  <p><strong>Priority:</strong> {item.priority}</p>
                  <p><strong>Due Date:</strong> {item.dueDate}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {boards.inProgress && (
          <div className="kanban-column">
            <h2>{boards.inProgress.title}</h2>
            <div className="kanban-items">
              {boards.inProgress.items.map(item => (
                <div key={item.id} className="kanban-item">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p><strong>Assignee:</strong> {item.assignee}</p>
                  <p><strong>Priority:</strong> {item.priority}</p>
                  <p><strong>Due Date:</strong> {item.dueDate}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {boards.done && (
          <div className="kanban-column">
            <h2>{boards.done.title}</h2>
            <div className="kanban-items">
              {boards.done.items.map(item => (
                <div key={item.id} className="kanban-item">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p><strong>Assignee:</strong> {item.assignee}</p>
                  <p><strong>Priority:</strong> {item.priority}</p>
                  <p><strong>Due Date:</strong> {item.dueDate}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
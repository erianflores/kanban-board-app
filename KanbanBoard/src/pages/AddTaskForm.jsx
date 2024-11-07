import { useState } from "react";

export default function AddTaskForm({ onClose, onAddTask }) {
  const [addTask, setAddTask] = useState({
    title: "",
    description: "",
    assignee: "",
    priority: "",
    dueDate: "",
    status: "To Do",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({
      ...addTask,
    });
    onClose();
  };

  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit} className="task-form">
        <h2>Add Task</h2>

        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={addTask.title}
            onChange={(e) => setAddTask({ ...addTask, title: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={addTask.description}
            onChange={(e) =>
              setAddTask({ ...addTask, description: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="assignee">Assignee:</label>
          <input
            type="text"
            id="assignee"
            value={addTask.assignee}
            onChange={(e) =>
              setAddTask({ ...addTask, assignee: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            value={addTask.priority}
            onChange={(e) =>
              setAddTask({ ...addTask, priority: e.target.value })
            }
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            value={addTask.dueDate}
            onChange={(e) =>
              setAddTask({ ...addTask, dueDate: e.target.value })
            }
            required
          />
        </div>

        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Add Task
          </button>
          <button type="button" className="cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

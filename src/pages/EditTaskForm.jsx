import {useState } from "react";

export default function EditTaskForm({task, onUpdateTask, onClose}) {
    const [editedTask, setEditedTask] = useState({
        id: task.id,
        title: task.title,
        description: task.description,
        assignee: task.assignee,
        priority: task.priority,
        dueDate: task.dueDate,
        status: task.status
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateTask(editedTask);
        onClose();
    }

    return (
        <div className="task-form-container">
          <form onSubmit={handleSubmit} className="task-form">
            <h2>Edit Task</h2>
            
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="edit-title">Title:</label>
                <input
                  type="text"
                  id="edit-title"
                  defaultValue={editedTask.title}
                  onChange={(e) => setEditedTask({...editedTask, title: e.target.value})}
                  required
                />
              </div>
      
              <div className="form-group">
                <label htmlFor="edit-description">Description:</label>
                <textarea
                  id="edit-description"
                  defaultValue={editedTask.description}
                  onChange={(e) => setEditedTask({...editedTask, description: e.target.value})}
                  required
                />
              </div>
      
              <div className="form-group">
                <label htmlFor="edit-assignee">Assignee:</label>
                <input
                  type="text"
                  id="edit-assignee"
                  defaultValue={editedTask.assignee}
                  onChange={(e) => setEditedTask({...editedTask, assignee: e.target.value})}
                  required
                />
              </div>
      
              <div className="form-group">
                <label htmlFor="edit-priority">Priority:</label>
                <select
                  id="edit-priority"
                  defaultValue={editedTask.priority}
                  onChange={(e) => setEditedTask({...editedTask, priority: e.target.value})}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
      
              <div className="form-group">
                <label htmlFor="edit-dueDate">Due Date:</label>
                <input
                  type="date"
                  id="edit-dueDate"
                  defaultValue={editedTask.dueDate}
                  onChange={(e) => setEditedTask({...editedTask, dueDate: e.target.value})}
                  required
                />
              </div>
      
              <div className="form-buttons">
                <button type="submit" className="submit-button">Update Task</button>
                <button type="button" className="cancel-button" onClick={onClose}>
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
    );
}
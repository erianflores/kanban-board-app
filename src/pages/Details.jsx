import { useParams, Link } from "react-router-dom";

export default function Details({ tasks }) {
  const { id } = useParams();
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return (
      <div className="page-container">
        <div className="content-overlay">
          <div className="details-content">
            <div className="details-header">
              <Link to="/" className="back-button">← Back to the Dashboard</Link>
              <h1>Task Not Found</h1>
            </div>
            <p>The task you're looking for doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="content-overlay">
        <div className="details-content">
          <div className="details-header">
            <Link to="/" className="back-button">← Back to the Dashboard</Link>
            <h1>{task.title}</h1>
          </div>
          <div className="details-section">
            <div className="detail-row">
              <label>Description:</label>
              <p>{task.description}</p>
            </div>

            <div className="detail-row">
              <label>Status:</label>
              <p>{task.status}</p>
            </div>

            <div className="detail-row">
              <label>Assignee:</label>
              <p>{task.assignee}</p>
            </div>

            <div className="detail-row">
              <label>Priority:</label>
              <p>{task.priority}</p>
            </div>

            <div className="detail-row">
              <label>Due Date:</label>
              <p>{task.dueDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
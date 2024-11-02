import { useParams, Link } from "react-router-dom";
import data from "../assets/kanban.json";

export default function Details() {
  const { id } = useParams();
  const task = data.find((task) => task.id === parseInt(id) || task.id === id);
  return (
    <div className="page-container">
      <div className="content-overlay">
        <div className="details-content">
          <h1>{task.assignee}</h1>
          {/* Add your details content here */}
        </div>
      </div>
    </div>
  );
}

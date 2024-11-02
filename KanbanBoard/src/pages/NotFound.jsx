import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page-container">
      <div className="content-overlay">
        <div className="not-found-content">
          <div className="not-found-section">
            <h1>404 - Page Not Found</h1>
            <Link to="/" className="home-button">Return to Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
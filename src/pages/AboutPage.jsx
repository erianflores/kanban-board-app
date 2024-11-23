export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="content-overlay">
        <div className="about-content">
          <div className="about-section">
            <h1>About TaskCanvas</h1>
            <p>
              TaskCanvas is a modern project management tool built to help organise workflows efficiently and intuitively. Inspired by agile methodologies, our Kanban board system allows users to visualise their work, limit work-in-progress, and maximise efficiency. Whether you're working solo or as part of a team, TaskCanvas helps bring clarity to your projects through a simple drag-and-drop interface and real-time task management. Created by developers for developers, our platform emphasises simplicity and functionality, helping you focus on what matters most - getting things done.
            </p>
          </div>

          <div className="about-section">
            <h2>Team Member</h2>
            <div className="member-info">
              <h3>Erian Flores</h3>
              <p>Full Stack Developer</p>
              <div className="social-links">
                <a href="https://github.com/erianflores" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
            <h2>Team Member</h2>
            <div className="member-info">
              <h3>Luke Farrell</h3>
              <p>Full Stack Developer</p>
              <div className="social-links">
                <a href="https://github.com/rephlax" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
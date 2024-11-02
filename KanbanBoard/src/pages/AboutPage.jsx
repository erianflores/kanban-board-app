export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="content-overlay">
        <div className="about-content">
          <div className="about-section">
            <h1>About TaskCanvas</h1>
            <p>
              TaskCanvas is a Kanban board application built with React. 
              It helps users organize and track their tasks using a visual board interface.
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
          </div>
        </div>
      </div>
    </div>
  );
}
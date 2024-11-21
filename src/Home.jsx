import './home.css';

const ComponentLibrary = () => {
  // This array can be expanded as new components are added
  const components = [
    {
      id: 'profile-card',
      name: 'Profile Card',
      description: 'A versatile card component for displaying user profiles',
      path: '/profile-card'
    }
    // Add more components here as needed
  ];

  return (
    <div className="library-container">
      {/* Header */}
      <header className="library-header">
        <div className="header-content">
          <div className="header-icon">📚</div>
          <div className="header-text">
            <h1>Component Library</h1>
            <p>A collection of React components</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="library-main">
        <div className="component-grid">
        {components.map((component) => (
          <a 
            key={component.id} 
            href={component.path} 
            className="component-card"
          >
            <div className="component-card-content">
              <h2>{component.name}</h2>
              <p>{component.description}</p>
            </div>
          </a>
        ))}

          {/* Upcoming Component Card */}
          <div className="component-card upcoming-component">
            <div className="component-card-content">
              <div className="add-icon">+</div>
              <h3>Add New Component</h3>
              <p>Create and add more components to your library</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="library-footer">
        <p>Built with React and CSS</p>
      </footer>
    </div>
  );
};

export default ComponentLibrary;
import './home.css';
const ComponentLibrary = () => {
  const components = [
    {
      id: 'profile-card',
      name: 'Profile Card',
      description: 'A versatile card component for displaying user profiles',
      path: '/profile-card'
    },
    {
      id: 'footer',
      name: 'Footer',
      description: 'A component for displaying a footer for a website/company site',
      path: '/footer'
    },
    {
      id: 'masonry',
      name: 'Masonry',
      description: 'A gallery component for displaying a masonry gallery with pictureName, pictureURL, and altText as props',
      path: '/gallery/masonry'
    },
    {
      id: 'carousel',
      name: 'Carousel',
      description: 'A gallery component for displaying a image carousel with pictureName, pictureURL, and altText as props',
      path: '/gallery/carousel'
    }
    
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)]">
      {/* Header */}
      <header className="bg-[var(--color-primary)] text-white py-6">
        <div className="max-w-screen-xl mx-auto px-6 flex items-center gap-4">
          <div className="text-4xl">📚</div>
          <div>
            <h1 className='m-0 text-2xl'>Component Library</h1>
            <p className='mt-1 text-sm'>A collection of React components</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-8 px-6 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-lg gap-6">
        {components.map((component) => (
          <a 
            key={component.id} 
            href={component.path} 
            className="bg-white rounded-lg border-[1px] border-solid border-[var(--color-border)] no-underline transition-all ease-linear hover:border-[var(--color-primary)] hover:shadow-md hover:-translate-y-0.5px animate-fade-in"
          >
            <div className="p-6">
              <h2 className='mb-2 text-xl'>{component.name}</h2>
              <p className='text-sm'>{component.description}</p>
            </div>
          </a>
        ))}

          {/* Upcoming Component Card */}
          <div className="bg-white rounded-lg border-[2px] border-dashed border-[var(--color-border)] no-underline transition-all ease-linear hover:border-[var(--color-primary)] hover:shadow-md hover:-translate-y-0.5px cursor-pointer animate-fade-in">
            <div className="p-6">
              <div className="text-3xl">🚧</div>
              <h3 className='mb-2 text-xl'>Coming Soon</h3>
              <p>More components are on their way. Stay tuned!</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-secondary)] py-6 text-center">
        <p className='m-0 text-white text-sm'>Built with React and CSS</p>
      </footer>
    </div>
  );
};

export default ComponentLibrary;
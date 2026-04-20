import { useState, useEffect } from 'react';
import { LanguageProvider } from './LanguageContext';
import InteractiveBackground from './InteractiveBackground';
import Navbar from './Navbar';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
import ProjectView from './ProjectView';

function App() {
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    // Create a dedicated portal layer for sparks (above everything)
    const layer = document.createElement('div');
    layer.id = 'spark-layer';
    layer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:99999;overflow:visible;';
    document.body.appendChild(layer);

    const handleClick = (e) => {
      const numStars = Math.floor(Math.random() * 4) + 4;
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');

        const angle = Math.random() * Math.PI * 2;
        const velocity = 30 + Math.random() * 45;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        const size = 8 + Math.random() * 10;
        const hue = Math.random() > 0.5 ? '#DCA4A6' : '#F2C7CB';
        const rotation = Math.floor(Math.random() * 360);

        // Standard styles via cssText
        star.style.cssText = `
          position: absolute;
          left: ${e.clientX}px;
          top: ${e.clientY}px;
          width: ${size}px;
          height: ${size}px;
          background: ${hue};
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          pointer-events: none;
          transform: translate(-50%, -50%) rotate(${rotation}deg);
          animation: sparkAnim 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        `;
        // CSS custom properties MUST be set separately (cssText strips them)
        star.style.setProperty('--tx', `${tx}px`);
        star.style.setProperty('--ty', `${ty}px`);

        layer.appendChild(star);
        setTimeout(() => star.remove(), 750);
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      layer.remove();
    };
  }, []);


  const openProject = (project) => {
    setCurrentProject(project);
  };

  const closeProject = () => {
    setCurrentProject(null);
  };

  return (
    <LanguageProvider>
      <InteractiveBackground />
      {!currentProject && <Navbar />}
      <main>
        {currentProject ? (
          <ProjectView project={currentProject} goBack={closeProject} />
        ) : (
          <>
            <Hero />
            <Portfolio onOpenProject={openProject} />
            <Experience />
            <Contact />
          </>
        )}
      </main>
    </LanguageProvider>
  );
}

export default App;


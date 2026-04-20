import { useEffect } from 'react';

export default function InteractiveBackground() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate percentage
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      
      // Update global CSS variables for the background
      document.documentElement.style.setProperty('--x', `${x}%`);
      document.documentElement.style.setProperty('--y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div className="interactive-bg" />;
}

import { useEffect, useState, useRef } from 'react';

export default function InteractiveBackground() {
  const [diamonds, setDiamonds] = useState([]);
  const requestRef = useRef();
  
  // Configuration
  const MAX_SETTLED = 60;
  const SPAWN_CHANCE = 0.02; // Chance per frame (roughly 1.2 per second at 60fps)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--x', `${x}%`);
      document.documentElement.style.setProperty('--y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const update = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const viewportTop = window.scrollY;

    setDiamonds(prev => {
      let next = [...prev];
      
      // 1. Spawn logic
      if (Math.random() < SPAWN_CHANCE && next.filter(d => !d.settled).length < 20) {
        next.push({
          id: Math.random(),
          x: Math.random() * 100, // percentage
          y: viewportTop - 50,    // start slightly above current view
          speed: 1.2 + Math.random() * 2.0, // Slightly slower for more elegance
          size: 25 + Math.random() * 30,    // Increased size (25px to 55px)
          rotation: Math.random() * 360,
          rotSpeed: (Math.random() - 0.5) * 2,
          type: Math.random() > 0.5 ? 'glass' : 'linear',
          settled: false
        });
      }

      // 2. Update existing
      next = next.map(d => {
        if (d.settled) return d;
        
        const newY = d.y + d.speed;
        const newRot = d.rotation + d.rotSpeed;
        
        // Check if hit the floor (with a bit of random offset to look like a pile)
        const floor = scrollHeight - (10 + Math.random() * 40);
        
        if (newY >= floor) {
          return { ...d, y: floor, settled: true, rotation: d.rotation };
        }
        
        return { ...d, y: newY, rotation: newRot };
      }).filter(d => {
        // Garbage collection: remove settled if over limit (oldest first)
        if (d.settled) {
          const settledCount = next.filter(s => s.settled).length;
          if (settledCount > MAX_SETTLED) {
             const settledOnes = next.filter(s => s.settled);
             return d.id !== settledOnes[0].id;
          }
        }
        return true;
      });

      return next;
    });

    requestRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="interactive-bg">
      <div className="diamond-layer">
        {diamonds.map(d => (
          <div
            key={d.id}
            className={`diamond-particle diamond-${d.type} ${d.settled ? 'diamond-settled' : 'diamond-falling'}`}
            style={{
              left: `${d.x}%`,
              top: `${d.y}px`,
              width: `${d.size}px`,
              height: `${d.size}px`,
              transform: `rotate(${d.rotation}deg)`,
              opacity: d.settled ? 0.3 : 1
            }}
          />
        ))}
      </div>
    </div>
  );
}


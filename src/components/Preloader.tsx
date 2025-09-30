import { useEffect, useState } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (isComplete) {
    return null;
  }

  return (
    <div className={`preloader ${progress >= 100 ? 'fade-out' : ''}`}>
      <div className="flex flex-col items-center">
        <div className="orbit-container mb-8">
          <div className="orbit orbit-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="sphere bg-gradient-neon"></div>
          </div>
          <div className="orbit orbit-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="sphere bg-gradient-neon"></div>
          </div>
          <div className="orbit orbit-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="sphere bg-gradient-neon"></div>
          </div>
        </div>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-text-primary mb-2">Code Spheres</h2>
          <p className="text-text-secondary">Loading your connection...</p>
        </div>
        
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="mt-4 text-text-muted font-mono text-sm">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default Preloader;
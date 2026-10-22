import React, { useState, useEffect } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress-container"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        zIndex: 9999,
        background: 'rgba(255, 255, 255, 0.03)',
        pointerEvents: 'none'
      }}
    >
      <div
        className="scroll-progress-bar"
        style={{
          height: '100%',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #00f0ff 0%, #38bdf8 50%, #a855f7 100%)',
          boxShadow: '0 0 10px rgba(0, 240, 255, 0.7), 0 0 20px rgba(168, 85, 247, 0.4)',
          transition: 'width 0.1s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      />
    </div>
  );
};

import React, { useState, useEffect } from 'react';

interface ScrollHUDProps {
  currentPage: 'home' | 'creator' | 'standalone';
}

export const ScrollHUD: React.FC<ScrollHUDProps> = ({ currentPage }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('');
  const [showHud, setShowHud] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, Math.round(progress))));
      setShowHud(window.scrollY > 220);

      // Detect active section on home/creator page
      const sectionIds =
        currentPage === 'creator'
          ? ['creator-profile', 'youtube-spotlight', 'music-player', 'bts-gallery', 'daw-setup']
          : ['hero', 'ecosystem-deck', 'castdrive', 'screenshots', 'fdroid-repo', 'changelog', 'ecosystem'];

      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= 100) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const getSectionLabel = (id: string): string => {
    switch (id) {
      case 'hero':
        return 'Overview';
      case 'ecosystem-deck':
        return 'Software Stack';
      case 'castdrive':
        return 'CastDrive Engine';
      case 'screenshots':
        return 'Interface Gallery';
      case 'fdroid-repo':
        return 'F-Droid Hub';
      case 'changelog':
        return 'Release History';
      case 'ecosystem':
        return 'Ecosystem';
      case 'creator-profile':
        return 'Profile';
      case 'youtube-spotlight':
        return 'YouTube Releases';
      case 'music-player':
        return 'Audio Studio';
      case 'bts-gallery':
        return 'Behind The Scenes';
      case 'daw-setup':
        return 'DAW & Equipment';
      default:
        return 'RSR Portal';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SVG circular progress calculation
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Top Neon Laser Scroll Bar */}
      <div className="scroll-progress-container" aria-hidden="true">
        <div
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        >
          <span className="scroll-progress-laser-tip"></span>
        </div>
      </div>

      {/* Floating Interactive Scroll HUD (Bottom Right) */}
      <div
        className={`scroll-hud-widget ${showHud ? 'visible' : ''}`}
        aria-label="Scroll position and back to top controls"
      >
        {activeSection && (
          <div className="scroll-hud-section-badge">
            <span className="scroll-hud-pulse-dot"></span>
            <span className="scroll-hud-section-name">
              {getSectionLabel(activeSection)}
            </span>
          </div>
        )}

        <button
          className="scroll-hud-btn"
          onClick={scrollToTop}
          title="Scroll smoothly back to top"
          aria-label="Back to top"
        >
          <svg className="scroll-hud-circle-svg" width="46" height="46" viewBox="0 0 46 46">
            <circle
              className="scroll-hud-circle-bg"
              cx="23"
              cy="23"
              r={radius}
            />
            <circle
              className="scroll-hud-circle-progress"
              cx="23"
              cy="23"
              r={radius}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <div className="scroll-hud-icon-wrap">
            <svg
              className="scroll-hud-arrow"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
            <span className="scroll-hud-pct">{scrollProgress}%</span>
          </div>
        </button>
      </div>
    </>
  );
};

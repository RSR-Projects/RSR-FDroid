import React, { useState } from 'react';

export type PageType = 'home' | 'knockdock' | 'creator' | 'standalone';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType, hash?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileOpen(prev => !prev);
  };

  const handleNavClick = (page: PageType, hash?: string) => {
    setMobileOpen(false);
    onNavigate(page, hash);
  };

  const getBrandTag = () => {
    if (currentPage === 'creator') return 'Creator';
    if (currentPage === 'knockdock') return 'KnockDock';
    return 'F-Droid';
  };

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <div className="header-brand-wrap">
          <a
            href={currentPage === 'home' ? '#hero' : './index.html'}
            className="brand-logo"
            aria-label="RSR-Projects Home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home', '#hero');
            }}
          >
            <div className="brand-mark" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>
            <span className="brand-name">RSR-Projects</span>
            <span className="brand-tag">{getBrandTag()}</span>
          </a>

          {/* Top Option to Select KnockDock (when not already on KnockDock page) */}
          {currentPage !== 'knockdock' && (
            <a
              href="./knockdock.html"
              className="header-creator-link header-knockdock-link"
              title="Open KnockDock — Acoustic Desk Macro Controller Webpage"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('knockdock');
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
              <span>KnockDock</span>
            </a>
          )}

          {/* Top Option to Select CastDrive (when on KnockDock or Creator page) */}
          {currentPage !== 'home' && (
            <a
              href="./index.html"
              className="header-creator-link"
              title="Open CastDrive — Multi-Screen Mirroring & Repository Webpage"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              <span>CastDrive</span>
            </a>
          )}

          {/* Top Option to Select Creator & Music (Preserved!) */}
          {currentPage !== 'creator' && (
            <a
              href="./creator.html"
              className="header-creator-link"
              title="Creator, Original Music & Studio Showcase"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('creator');
              }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
              <span>Creator &amp; Music</span>
            </a>
          )}
        </div>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="primary-nav"
          onClick={toggleMobileNav}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <nav
          id="primary-nav"
          className={`nav-menu ${mobileOpen ? 'open' : ''}`}
          role="navigation"
          aria-label="Primary Navigation"
        >
          {currentPage === 'home' && (
            <>
              <a href="#hero" className="nav-link" onClick={() => handleNavClick('home', '#hero')}>Overview</a>
              <a href="#ecosystem-deck" className="nav-link" onClick={() => handleNavClick('home', '#ecosystem-deck')}>Card Deck</a>
              <a href="#castdrive" className="nav-link" onClick={() => handleNavClick('home', '#castdrive')}>CastDrive</a>
              <a href="#screenshots" className="nav-link" onClick={() => handleNavClick('home', '#screenshots')}>Screenshots</a>
              <a href="#fdroid-repo" className="nav-link" onClick={() => handleNavClick('home', '#fdroid-repo')}>F-Droid Repo</a>
              <a href="#downloads" className="nav-link" onClick={() => handleNavClick('home', '#downloads')}>Downloads</a>
              <a href="#changelog" className="nav-link" onClick={() => handleNavClick('home', '#changelog')}>Changelog</a>
              <a href="#ecosystem" className="nav-link" onClick={() => handleNavClick('home', '#ecosystem')}>Ecosystem</a>
              <a
                href="./knockdock.html"
                className="nav-link nav-creator-pill"
                title="Switch to KnockDock Webpage"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('knockdock');
                }}
              >
                KnockDock &rarr;
              </a>
              <a
                href="./creator.html"
                className="nav-link nav-creator-pill"
                title="Creator & Music Showcase"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('creator');
                }}
              >
                Creator &amp; Music &rarr;
              </a>
            </>
          )}

          {currentPage === 'knockdock' && (
            <>
              <a href="#hero" className="nav-link" onClick={() => handleNavClick('knockdock', '#hero')}>Overview</a>
              <a href="#ecosystem-deck" className="nav-link" onClick={() => handleNavClick('knockdock', '#ecosystem-deck')}>Card Deck</a>
              <a href="#knockdock" className="nav-link" onClick={() => handleNavClick('knockdock', '#knockdock')}>KnockDock</a>
              <a href="#screenshots" className="nav-link" onClick={() => handleNavClick('knockdock', '#screenshots')}>Screenshots</a>
              <a href="#fdroid-repo" className="nav-link" onClick={() => handleNavClick('knockdock', '#fdroid-repo')}>F-Droid Repo</a>
              <a href="#downloads" className="nav-link" onClick={() => handleNavClick('knockdock', '#downloads')}>Downloads</a>
              <a href="#changelog" className="nav-link" onClick={() => handleNavClick('knockdock', '#changelog')}>Changelog</a>
              <a href="#ecosystem" className="nav-link" onClick={() => handleNavClick('knockdock', '#ecosystem')}>Ecosystem</a>
              <a
                href="./index.html"
                className="nav-link nav-creator-pill"
                title="Switch to CastDrive Webpage"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
              >
                CastDrive &rarr;
              </a>
              <a
                href="./creator.html"
                className="nav-link nav-creator-pill"
                title="Creator & Music Showcase"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('creator');
                }}
              >
                Creator &amp; Music &rarr;
              </a>
            </>
          )}

          {currentPage === 'creator' && (
            <>
              <a href="#about" className="nav-link" onClick={() => handleNavClick('creator', '#about')}>About</a>
              <a href="#youtube" className="nav-link" onClick={() => handleNavClick('creator', '#youtube')}>YouTube Releases</a>
              <a href="#music-player" className="nav-link" onClick={() => handleNavClick('creator', '#music-player')}>Music Player</a>
              <a href="#bts-section" className="nav-link" onClick={() => handleNavClick('creator', '#bts-section')}>Studio &amp; Visualizers</a>
              <a href="#tools" className="nav-link" onClick={() => handleNavClick('creator', '#tools')}>Production Tools</a>
              <a
                href="./index.html"
                className="nav-link nav-creator-pill"
                title="Switch to CastDrive Webpage"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
              >
                CastDrive &rarr;
              </a>
              <a
                href="./knockdock.html"
                className="nav-link nav-creator-pill"
                title="Switch to KnockDock Webpage"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('knockdock');
                }}
              >
                KnockDock &rarr;
              </a>
            </>
          )}

          {currentPage === 'standalone' && (
            <>
              <a href="./index.html" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>CastDrive</a>
              <a href="./knockdock.html" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('knockdock'); }}>KnockDock</a>
              <a href="./creator.html" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('creator'); }}>Creator &amp; Music</a>
              <a href="#screenshots" className="nav-link" onClick={() => handleNavClick('standalone', '#screenshots')}>Screenshots</a>
              <a href="#fdroid-repo" className="nav-link" onClick={() => handleNavClick('standalone', '#fdroid-repo')}>Repository</a>
              <a href="#music-player" className="nav-link" onClick={() => handleNavClick('standalone', '#music-player')}>Music Player</a>
            </>
          )}
        </nav>

        <div className="header-actions">
          {currentPage === 'creator' ? (
            <a href="https://www.youtube.com/@RSR_Spectrum?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="btn btn-youtube btn-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 22c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73z" />
              </svg>
              <span>Subscribe</span>
            </a>
          ) : (
            <>
              <a
                href={currentPage === 'knockdock' ? 'https://github.com/RSR-Projects/KnockDock' : 'https://github.com/RSR-Projects'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-sm"
                aria-label="RSR-Projects on GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="#fdroid-repo"
                className="btn btn-primary btn-sm"
                onClick={() =>
                  handleNavClick(
                    currentPage === 'standalone'
                      ? 'standalone'
                      : currentPage === 'knockdock'
                      ? 'knockdock'
                      : 'home',
                    '#fdroid-repo'
                  )
                }
              >
                <span>Get Repository</span>
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

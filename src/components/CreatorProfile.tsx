import React from 'react';

interface CreatorProfileProps {
  onNavigateHome: () => void;
  onNavigateToSection: (hash: string) => void;
}

export const CreatorProfile: React.FC<CreatorProfileProps> = ({ onNavigateHome, onNavigateToSection }) => {
  return (
    <>
      {/* Creator Hero */}
      <section className="hero" style={{ paddingBottom: '30px' }}>
        <div className="hero-glow" aria-hidden="true"></div>
        <div className="container">
          <div className="hero-badge-wrap" data-reveal>
            <div className="hero-badge">
              <span className="hero-badge-dot" style={{ background: '#a855f7', boxShadow: '0 0 10px #a855f7' }}></span>
              <span>Independent Music Production &bull; Creative Coding &bull; Systems Development</span>
            </div>
          </div>

          <h1 className="hero-title" data-reveal data-reveal-delay="1">
            Sound &amp; Code.<br />
            <span className="hero-title-gradient">Crafted to Resonate.</span>
          </h1>

          <p className="hero-lead" data-reveal data-reveal-delay="2">
            Welcome to the creative showcase of <strong>RSR Spectrum</strong>. Alongside developing open-source applications like CastDrive for Android and Windows, I compose original electronic synth tracks, explore vintage Casio MIDI hardware, and engineer real-time audio visualizers.
          </p>

          <div className="hero-cta" data-reveal data-reveal-delay="3">
            <a
              href="#youtube"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToSection('#youtube');
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span>Watch Music Releases</span>
            </a>
            <a
              href="./index.html"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              <span>Explore CastDrive &amp; F-Droid</span>
            </a>
          </div>
        </div>
      </section>

      {/* Creator Profile Section */}
      <section id="about" className="creator-section">
        <div className="container">
          {/* Profile Card */}
          <div className="creator-profile-card" data-reveal>
            <div className="creator-avatar-wrap">
              <img src="./assets/rsr-spectrum-logo.png" alt="RSR Spectrum Channel Logo" className="creator-avatar" loading="lazy" />
            </div>
            <div className="creator-info">
              <h3>RSR Spectrum</h3>
              <a href="https://www.youtube.com/@RSR_Spectrum" target="_blank" rel="noopener noreferrer" className="creator-handle">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span>@RSR_Spectrum</span>
              </a>
              <p className="creator-bio">
                Independent software developer, music creator, and technology enthusiast. When I am not building low-latency screen mirroring solutions like CastDrive or managing the RSR-Projects F-Droid repository, I focus on original music production, rhythmic sound design, Casio keyboard synthesis, and audio-reactive visuals.
              </p>
              <div className="creator-badges">
                <span className="badge badge-accent">Android &amp; Windows Software</span>
                <span className="badge badge-subtle">Open-Source Creator</span>
                <span className="badge badge-subtle">Music Production &amp; Sound Design</span>
                <span className="badge badge-subtle">MIDI Technology &amp; Hardware</span>
                <span className="badge badge-subtle">FL Studio &amp; GarageBand</span>
              </div>
            </div>
          </div>

          {/* 5 Focus Areas / Pillars */}
          <div className="creator-interests-grid">
            <div className="interest-card" data-reveal data-reveal-delay="1">
              <div className="interest-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>
              <h4>Original Music</h4>
              <p>Composing original electronic, retro synthwave, heavy bass, and cultural fusion tracks under the RSR Spectrum moniker.</p>
            </div>

            <div className="interest-card" data-reveal data-reveal-delay="2">
              <div className="interest-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="22"></line>
                </svg>
              </div>
              <h4>Music Production</h4>
              <p>Layering polyrhythmic drums, sub-bass textures, and melodic sound design using digital audio workstations including FL Studio and GarageBand.</p>
            </div>

            <div className="interest-card" data-reveal data-reveal-delay="3">
              <div className="interest-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <line x1="6" y1="5" x2="6" y2="13"></line>
                  <line x1="10" y1="5" x2="10" y2="13"></line>
                  <line x1="14" y1="5" x2="14" y2="13"></line>
                  <line x1="18" y1="5" x2="18" y2="13"></line>
                </svg>
              </div>
              <h4>MIDI Experiments</h4>
              <p>Connecting physical hardware synthesizers, vintage Casio keyboards (MT-35), and custom controllers into modern digital production workflows.</p>
            </div>

            <div className="interest-card" data-reveal data-reveal-delay="4">
              <div className="interest-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h4>Software Projects</h4>
              <p>Architecting independent Android and Windows tools such as CastDrive for low-latency screen mirroring, multi-touch input, and audio streaming.</p>
            </div>

            <div className="interest-card" data-reveal data-reveal-delay="5">
              <div className="interest-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <h4>Creative Technology</h4>
              <p>Bridging generative visual synthesis (ZGameEditor, Vizzy) with audio waveforms to craft synchronized music visualizer experiences.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

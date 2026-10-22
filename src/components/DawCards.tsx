import React from 'react';

export const DawCards: React.FC = () => {
  return (
    <div id="tools" className="daw-cards-grid">
      <div className="daw-card" data-reveal data-reveal-delay="1">
        <div className="daw-icon-box" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        </div>
        <div className="daw-info">
          <h5>FL Studio</h5>
          <p>Primary digital audio workstation used for beat programming, synthesizer sound design, MIDI sequencing, and final track mastering.</p>
          <div className="daw-disclaimer">FL Studio is a registered trademark of Image-Line Software. Mentioned for technical production transparency.</div>
        </div>
      </div>

      <div className="daw-card" data-reveal data-reveal-delay="2">
        <div className="daw-icon-box" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="10 8 16 12 10 16 10 8"></polygon>
          </svg>
        </div>
        <div className="daw-info">
          <h5>GarageBand</h5>
          <p>Complementary DAW used for rapid mobile sketchpad ideation, portable melody tracking, and multi-track draft arrangements.</p>
          <div className="daw-disclaimer">GarageBand is a trademark of Apple Inc. Mentioned for technical production transparency.</div>
        </div>
      </div>
    </div>
  );
};

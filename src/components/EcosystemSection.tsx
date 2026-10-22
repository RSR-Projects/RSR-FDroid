import React from 'react';
import { ecosystemProjects } from '../data/castdrive';

interface EcosystemSectionProps {
  onNavigateToCreator: () => void;
}

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({ onNavigateToCreator }) => {
  return (
    <section id="ecosystem">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="section-pretitle">Organization Portfolio</span>
          <h2 className="section-title">RSR-Projects Ecosystem</h2>
          <p className="section-desc">
            Projects actively maintained or under development within the RSR-Projects open-source organization.
          </p>
        </div>

        <div className="ecosystem-grid">
          {ecosystemProjects.map((proj, idx) => (
            <div
              key={idx}
              className="project-card"
              data-reveal
              data-reveal-delay={(idx % 2 + 1).toString()}
            >
              <div className="project-card-header">
                <div
                  className="project-icon"
                  aria-hidden="true"
                  style={
                    proj.accent
                      ? {
                          color: '#a855f7',
                          background: 'rgba(168, 85, 247, 0.1)',
                          borderColor: 'rgba(168, 85, 247, 0.25)'
                        }
                      : undefined
                  }
                >
                  {proj.title === 'CastDrive' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  )}
                  {proj.title === 'RSR-FDroid' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  )}
                  {proj.title === 'Ecosystem Companion Tools' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  )}
                  {proj.title === 'Creator & Music' && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18V5l12-2v13"></path>
                      <circle cx="6" cy="18" r="3"></circle>
                      <circle cx="18" cy="16" r="3"></circle>
                    </svg>
                  )}
                </div>
                <span className={`badge ${proj.accent ? 'badge-accent' : proj.badge.includes('Active') ? 'badge-stable' : 'badge-experimental'}`}>
                  {proj.badge}
                </span>
              </div>
              <h4>{proj.title}</h4>
              <p>{proj.description}</p>
              <div className="project-card-footer">
                <span className="project-status">{proj.status}</span>
                {proj.isExternal ? (
                  <a href={proj.linkUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                    <span>{proj.linkText}</span>
                  </a>
                ) : proj.accent ? (
                  <a
                    href="./creator.html"
                    className="btn btn-secondary btn-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateToCreator();
                    }}
                  >
                    <span>{proj.linkText}</span>
                  </a>
                ) : (
                  <span className="badge badge-license">{proj.linkText}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

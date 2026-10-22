import React from 'react';
import { changelogData } from '../data/castdrive';

export const ChangelogSection: React.FC = () => {
  return (
    <section id="changelog" className="changelog-section">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="section-pretitle">Version History</span>
          <h2 className="section-title">Release Notes &amp; Changelog</h2>
          <p className="section-desc">
            Documented release history and verified updates for CastDrive and repository components.
          </p>
        </div>

        <div className="changelog-cards">
          {changelogData.map((release, idx) => (
            <div
              key={idx}
              className={`changelog-card ${release.isLatest ? 'latest' : ''}`}
              data-reveal
              data-reveal-delay={(idx + 1).toString()}
            >
              <div className="changelog-header">
                <div className="changelog-version-wrap">
                  <span className="changelog-version">{release.version}</span>
                  <span className={`badge ${release.isLatest ? 'badge-stable' : 'badge-license'}`}>
                    {release.versionCodeBadge}
                  </span>
                  {release.isLatest && (
                    <span className="badge badge-stable" style={{ background: 'rgba(0, 240, 255, 0.15)', borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)' }}>
                      Active Release
                    </span>
                  )}
                </div>
                <span className="changelog-date">{release.dateLabel}</span>
              </div>
              <ul className="changelog-list">
                {release.items.map((item, iIdx) => (
                  <li key={iIdx} className="changelog-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      {item.title ? <strong>{item.title} </strong> : null}
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

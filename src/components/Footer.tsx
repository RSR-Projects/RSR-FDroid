import React from 'react';

interface FooterProps {
  currentPage: 'home' | 'creator' | 'standalone';
  onNavigate: (page: 'home' | 'creator' | 'standalone', hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentPage, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="brand-mark" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <span className="brand-name">RSR-Projects</span>
            </div>
            <p>
              {currentPage === 'creator'
                ? 'Open-source Android & Windows software ecosystem and original music production by RSR Spectrum.'
                : 'Open-source Android software ecosystem dedicated to practical connectivity, zero telemetry, and independent distribution.'}
            </p>
          </div>

          <div className="footer-col">
            <h5>CastDrive &amp; Repo</h5>
            <ul className="footer-links">
              <li><a href="https://github.com/RSR-Projects/CastDrive" target="_blank" rel="noopener noreferrer">Source Code</a></li>
              <li><a href="https://github.com/RSR-Projects/CastDrive/releases/tag/v2.0.0" target="_blank" rel="noopener noreferrer">Releases (v2.0.0)</a></li>
              <li><a href="https://github.com/RSR-Projects/CastDrive/issues" target="_blank" rel="noopener noreferrer">Issue Tracker</a></li>
              <li><a href="./fdroid/repo/CastDrive.apk" download>CastDrive.apk (Android)</a></li>
              <li><a href="https://github.com/RSR-Projects/CastDrive/releases/download/v2.0.0/CastDrivePC.exe">CastDrivePC.exe (Windows)</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Creator &amp; Music</h5>
            <ul className="footer-links">
              <li><a href="./creator.html" onClick={(e) => { e.preventDefault(); onNavigate('creator'); }}>About the Creator</a></li>
              <li><a href="https://www.youtube.com/@RSR_Spectrum" target="_blank" rel="noopener noreferrer">RSR Spectrum (YouTube)</a></li>
              <li><a href="./creator.html#bts-section" onClick={(e) => { e.preventDefault(); onNavigate('creator', '#bts-section'); }}>Studio &amp; Visualizers</a></li>
              <li><a href="https://www.youtube.com/@RSR_Spectrum/videos" target="_blank" rel="noopener noreferrer">Original Releases</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Repository &amp; Legal</h5>
            <ul className="footer-links">
              <li><a href="#fdroid-repo" onClick={() => onNavigate(currentPage === 'creator' ? 'home' : currentPage, '#fdroid-repo')}>Add Repository</a></li>
              <li><a href="https://github.com/RSR-Projects/RSR-FDroid" target="_blank" rel="noopener noreferrer">RSR-FDroid Source</a></li>
              <li><a href="https://github.com/RSR-Projects/RSR-FDroid/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT License</a></li>
            </ul>
          </div>
        </div>

        {/* Third-party Disclaimer Notice */}
        <div className="footer-disclaimer-box">
          <p>
            {currentPage === 'creator' ? (
              <>
                <strong>Disclaimer:</strong> RSR-Projects and RSR Spectrum are independent projects. FL Studio is a trademark of Image-Line Software. GarageBand and macOS are trademarks of Apple Inc. Android is a trademark of Google LLC. YouTube is a trademark of Google LLC.
              </>
            ) : (
              <>
                <strong>Disclaimer:</strong> RSR-Projects F-Droid repository is a third-party software repository operated independently by RSR-Projects. It is not affiliated with, sponsored by, or officially endorsed by the F-Droid project, the F-Droid maintainers, or Google LLC. Android is a trademark of Google LLC.
              </>
            )}
          </p>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; RSR-Projects &bull; RSR Spectrum. Released under the MIT License.
          </div>
          <button className="back-to-top" aria-label="Scroll back to top" onClick={scrollToTop}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

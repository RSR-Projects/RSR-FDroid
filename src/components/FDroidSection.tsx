import React, { useState } from 'react';

interface FDroidSectionProps {
  onCopyText: (text: string, successLabel?: string) => void;
}

export const FDroidSection: React.FC<FDroidSectionProps> = ({ onCopyText }) => {
  const [clientTab, setClientTab] = useState<'fdroid' | 'neostore' | 'droidify' | 'aurora'>('fdroid');
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [copiedQrUrl, setCopiedQrUrl] = useState(false);

  const REPO_URL = 'https://rsr-projects.github.io/RSR-FDroid/fdroid/repo';

  const handleCopyRepo = () => {
    onCopyText(REPO_URL, 'Repository URL copied to clipboard!');
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2200);
  };

  const handleCopyQrRepo = () => {
    onCopyText(REPO_URL, 'Repository address copied to clipboard!');
    setCopiedQrUrl(true);
    setTimeout(() => setCopiedQrUrl(false), 2200);
  };

  return (
    <section id="fdroid-repo" className="fdroid-section">
      <div className="container">
        <div className="section-header" data-reveal>
          <span className="section-pretitle">Distribution &amp; Updates</span>
          <h2 className="section-title">Install Through F-Droid</h2>
          <p className="section-desc">
            RSR-Projects operates an independent F-Droid repository. Adding this repository to your client provides automated updates, cryptographic index verification, and seamless installation.
          </p>
        </div>

        <div className="fdroid-grid">
          {/* Setup Instructions Card */}
          <div className="fdroid-card" data-reveal data-reveal-delay="1">
            {/* Third Party Disclaimer Notice */}
            <div className="fdroid-disclaimer" role="note">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <p>
                <strong>Third-Party Repository:</strong> This is a dedicated, self-hosted repository operated directly by RSR-Projects. It is independent of the default upstream F-Droid catalogue.
              </p>
            </div>

            {/* Repository URL Copy Box */}
            <div className="repo-copy-box">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="repo-copy-label">Official Repository URL</span>
                <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: '#34d399', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', display: 'inline-block' }}></span>
                  Signed &amp; Active
                </span>
              </div>
              <div className="repo-copy-row">
                <code id="repo-url-text" className="repo-url-display">{REPO_URL}</code>
                <button
                  className={`btn btn-primary btn-sm ${copiedUrl ? 'btn-copied' : ''}`}
                  onClick={handleCopyRepo}
                  aria-label="Copy F-Droid Repository URL to clipboard"
                >
                  {copiedUrl ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                      <span>Copy URL</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Client Selector Tabs */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }} role="tablist" aria-label="Client Installation Guide">
              <button
                className={`btn btn-sm ${clientTab === 'fdroid' ? 'btn-primary' : 'btn-secondary'}`}
                role="tab"
                aria-selected={clientTab === 'fdroid'}
                onClick={() => setClientTab('fdroid')}
              >
                Official F-Droid
              </button>
              <button
                className={`btn btn-sm ${clientTab === 'neostore' ? 'btn-primary' : 'btn-secondary'}`}
                role="tab"
                aria-selected={clientTab === 'neostore'}
                onClick={() => setClientTab('neostore')}
              >
                Neo Store
              </button>
              <button
                className={`btn btn-sm ${clientTab === 'droidify' ? 'btn-primary' : 'btn-secondary'}`}
                role="tab"
                aria-selected={clientTab === 'droidify'}
                onClick={() => setClientTab('droidify')}
              >
                Droid-ify
              </button>
              <button
                className={`btn btn-sm ${clientTab === 'aurora' ? 'btn-primary' : 'btn-secondary'}`}
                role="tab"
                aria-selected={clientTab === 'aurora'}
                onClick={() => setClientTab('aurora')}
              >
                Aurora Droid
              </button>
            </div>

            {/* Steps for F-Droid */}
            {clientTab === 'fdroid' && (
              <div>
                <ol className="install-steps">
                  <li className="install-step-item">
                    <span className="step-num">1</span>
                    <div className="step-content">
                      <h5>Open F-Droid Settings</h5>
                      <p>Launch the F-Droid app on your Android device and navigate to <strong>Settings &rarr; Repositories</strong>.</p>
                    </div>
                  </li>
                  <li className="install-step-item">
                    <span className="step-num">2</span>
                    <div className="step-content">
                      <h5>Add Repository</h5>
                      <p>Tap the <strong>+ (Add)</strong> button in the top right or scan the QR code directly using your phone's camera.</p>
                    </div>
                  </li>
                  <li className="install-step-item">
                    <span className="step-num">3</span>
                    <div className="step-content">
                      <h5>Paste Repository Address</h5>
                      <p>Paste the copied address <code>{REPO_URL}</code> and confirm.</p>
                    </div>
                  </li>
                  <li className="install-step-item">
                    <span className="step-num">4</span>
                    <div className="step-content">
                      <h5>Sync and Install CastDrive</h5>
                      <p>Refresh your repository index. Search for <strong>CastDrive</strong> to install and receive future updates automatically.</p>
                    </div>
                  </li>
                </ol>
              </div>
            )}

            {/* Steps for Neo Store */}
            {clientTab === 'neostore' && (
              <div>
                <ol className="install-steps">
                  <li className="install-step-item">
                    <span className="step-num">1</span>
                    <div className="step-content">
                      <h5>Open Sources / Repositories</h5>
                      <p>In Neo Store, tap <strong>Manage Repositories</strong> in the settings menu.</p>
                    </div>
                  </li>
                  <li className="install-step-item">
                    <span className="step-num">2</span>
                    <div className="step-content">
                      <h5>Add New Source</h5>
                      <p>Tap <strong>Add Repository</strong>, enter a label (e.g. &quot;RSR-Projects&quot;), and paste the repository URL.</p>
                    </div>
                  </li>
                  <li className="install-step-item">
                    <span className="step-num">3</span>
                    <div className="step-content">
                      <h5>Save &amp; Sync</h5>
                      <p>Save the new source. Neo Store will automatically verify the signed metadata index and fetch CastDrive.</p>
                    </div>
                  </li>
                </ol>
              </div>
            )}

            {/* Steps for Droid-ify */}
            {clientTab === 'droidify' && (
              <div>
                <ol className="install-steps">
                  <li className="install-step-item">
                    <span className="step-num">1</span>
                    <div className="step-content">
                      <h5>Open Droid-ify Repositories</h5>
                      <p>From the bottom bar, select <strong>Repositories</strong> and tap the <strong>+</strong> floating action button.</p>
                    </div>
                  </li>
                  <li className="install-step-item">
                    <span className="step-num">2</span>
                    <div className="step-content">
                      <h5>Paste URL</h5>
                      <p>Paste <code>{REPO_URL}</code> or tap the QR scanner icon to capture the QR code on this screen.</p>
                    </div>
                  </li>
                  <li className="install-step-item">
                    <span className="step-num">3</span>
                    <div className="step-content">
                      <h5>Synchronize &amp; Install</h5>
                      <p>Pull down to refresh repository packages, then install CastDrive with fast background updates.</p>
                    </div>
                  </li>
                </ol>
              </div>
            )}

            {/* Steps for Aurora Droid */}
            {clientTab === 'aurora' && (
              <div>
                <ol className="install-steps">
                  <li className="install-step-item">
                    <span className="step-num">1</span>
                    <div className="step-content">
                      <h5>Access Repositories</h5>
                      <p>Open Aurora Droid, open the left drawer, and choose <strong>Repositories</strong>.</p>
                    </div>
                  </li>
                  <li className="install-step-item">
                    <span className="step-num">2</span>
                    <div className="step-content">
                      <h5>Add Custom Repo</h5>
                      <p>Tap <strong>Add Custom Repository</strong>, paste the URL and tap <strong>Add</strong>.</p>
                    </div>
                  </li>
                  <li className="install-step-item">
                    <span className="step-num">3</span>
                    <div className="step-content">
                      <h5>Sync Index</h5>
                      <p>Sync repository indices to browse and install verified releases with zero telemetry.</p>
                    </div>
                  </li>
                </ol>
              </div>
            )}

            {/* Direct Download Cards for Android & Windows PC */}
            <div id="downloads" className="platform-download-grid">
              {/* Android Download Card */}
              <div className="platform-card">
                <div className="platform-card-header">
                  <div className="platform-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                  </div>
                  <div className="platform-meta">
                    <h5>CastDrive for Android</h5>
                    <p>v2.0.0 &bull; versionCode 3</p>
                  </div>
                </div>
                <div className="platform-details">
                  Direct APK package for smartphones, tablets, and automotive head units without requiring F-Droid.
                </div>
                <div className="platform-actions">
                  <a href="./fdroid/repo/CastDrive.apk" className="btn btn-secondary btn-sm" download>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span>Download APK</span>
                  </a>
                  <a href="https://github.com/RSR-Projects/CastDrive/releases/tag/v2.0.0" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                    <span>Release Notes</span>
                  </a>
                </div>
              </div>

              {/* Windows PC Download Card */}
              <div className="platform-card">
                <div className="platform-card-header">
                  <div className="platform-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <div className="platform-meta">
                    <h5>CastDrive for Windows PC</h5>
                    <p>v2.0.0 &bull; CastDrivePC.exe</p>
                  </div>
                </div>
                <div className="platform-details">
                  Dual-mode desktop client for Windows 10/11: receive phone mirrors or use phone as an extended PC second display (Spacedesk style).
                </div>
                <div className="platform-actions">
                  <a href="https://github.com/RSR-Projects/CastDrive/releases/download/v2.0.0/CastDrivePC.exe" className="btn btn-secondary btn-sm">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span>Download PC Client</span>
                  </a>
                  <a href="https://github.com/RSR-Projects/CastDrive/releases/tag/v2.0.0" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                    <span>Release Notes</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Sidecard */}
          <div className="qr-card" data-reveal data-reveal-delay="2">
            <div className="qr-frame" style={{ position: 'relative', overflow: 'hidden' }}>
              <img src="./assets/qr-code.svg" alt="QR Code to add RSR-Projects F-Droid repository" width="200" height="200" />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #00f0ff, transparent)',
                boxShadow: '0 0 8px #00f0ff',
                animation: 'packetSlide 3s ease-in-out infinite alternate'
              }}></div>
            </div>

            <div className="qr-caption">
              <h4>Scan to Add Repository</h4>
              <p>Point your F-Droid client scanner or camera to add the repository automatically on your device.</p>
              <button
                className={`btn btn-secondary btn-sm ${copiedQrUrl ? 'btn-copied' : ''}`}
                onClick={handleCopyQrRepo}
              >
                {copiedQrUrl ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    <span>Copy Repo Address</span>
                  </>
                )}
              </button>
            </div>

            <div className="supported-clients">
              <span>Compatible Clients</span>
              <div className="client-pills">
                <span className="client-pill">F-Droid</span>
                <span className="client-pill">Neo Store</span>
                <span className="client-pill">Droid-ify</span>
                <span className="client-pill">Aurora Droid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

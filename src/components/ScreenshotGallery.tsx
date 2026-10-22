import React, { useState, useEffect, useCallback } from 'react';
import { androidScreenshots, pcScreenshots } from '../data/screenshots';

export const ScreenshotGallery: React.FC = () => {
  const [category, setCategory] = useState<'android' | 'pc'>('android');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentList = category === 'android' ? androidScreenshots : pcScreenshots;
  const currentItem = currentList[currentIndex] || currentList[0];

  const handleCategorySwitch = (cat: 'android' | 'pc') => {
    if (cat === category) return;
    setCategory(cat);
    setCurrentIndex(0);
  };

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev <= 0 ? currentList.length - 1 : prev - 1));
  }, [currentList.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev >= currentList.length - 1 ? 0 : prev + 1));
  }, [currentList.length]);

  // Keyboard navigation when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, handleNext, handlePrev]);

  const platformLabel = category === 'pc' ? 'Windows PC App' : 'Android App';

  return (
    <section id="screenshots" className="screenshots-section">
      <div className="container">
        <div className="section-header text-center" data-reveal>
          <span className="section-pretitle">Interface &amp; Capabilities</span>
          <h2 className="section-title">Verified App Screenshots</h2>
          <p className="section-desc">
            Direct captures from active CastDrive builds running on Android hardware and Windows PCs.
          </p>
        </div>

        {/* Gallery Category Switcher (Android & PC) */}
        <div className="gallery-tabs-wrap" role="tablist" aria-label="Screenshot Categories" data-reveal data-reveal-delay="1">
          <button
            className={`gallery-tab-btn ${category === 'android' ? 'active' : ''}`}
            role="tab"
            aria-selected={category === 'android'}
            onClick={() => handleCategorySwitch('android')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
            <span>Android App</span>
            <span className="gallery-tab-badge">8 Captures</span>
          </button>
          <button
            className={`gallery-tab-btn ${category === 'pc' ? 'active' : ''}`}
            role="tab"
            aria-selected={category === 'pc'}
            onClick={() => handleCategorySwitch('pc')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            <span>Windows PC App</span>
            <span className="gallery-tab-badge">4 Captures</span>
          </button>
        </div>

        <div className="gallery-container" data-reveal data-reveal-delay="2">
          <div className="gallery-main-view">
            {/* Interactive Preview Frame - Click to Zoom preserved */}
            <div
              className={`gallery-preview-frame ${category === 'pc' ? 'frame-pc' : ''}`}
              onClick={() => setIsModalOpen(true)}
              style={{ cursor: 'pointer' }}
            >
              <img
                id="gallery-preview-img"
                src={currentItem.src}
                alt={`CastDrive Screenshot: ${currentItem.title}`}
                width={category === 'pc' ? 680 : 320}
                height={category === 'pc' ? 420 : 693}
              />
            </div>

            <div className="gallery-info-pane">
              <span id="gallery-counter" className="gallery-counter">
                {platformLabel} &bull; Screenshot {currentIndex + 1} of {currentList.length}
              </span>
              <h3 id="gallery-title" className="gallery-title">{currentItem.title}</h3>
              <p id="gallery-desc" className="gallery-desc">
                {currentItem.desc}
              </p>

              <div className="gallery-nav-buttons">
                <button
                  id="gallery-prev-btn"
                  className="btn btn-secondary btn-sm"
                  aria-label="Previous screenshot"
                  onClick={handlePrev}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                  <span>Previous</span>
                </button>
                <button
                  id="gallery-next-btn"
                  className="btn btn-secondary btn-sm"
                  aria-label="Next screenshot"
                  onClick={handleNext}
                >
                  <span>Next</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={() => setIsModalOpen(true)}
                  aria-label="Expand image to fullscreen"
                  title="Expand to Fullscreen"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '8px 12px' }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <polyline points="9 21 3 21 3 15"></polyline>
                    <line x1="21" y1="3" x2="14" y2="10"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnails Strip */}
          <div id="gallery-thumb-strip" className="thumb-strip" role="tablist" aria-label="CastDrive Screenshots">
            {currentList.map((item, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={`${category}-${index}`}
                  className={`thumb-btn ${category === 'pc' ? 'thumb-pc' : ''} ${isActive ? 'active' : ''}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`View ${category === 'pc' ? 'PC' : 'Android'} screenshot ${index + 1}: ${item.title}`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img src={item.src} alt="" loading="lazy" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Lightbox Modal */}
        {isModalOpen && (
          <div
            className="bts-modal active"
            role="dialog"
            aria-modal="true"
            aria-label={currentItem.title}
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="bts-modal-content"
              style={{ maxWidth: category === 'pc' ? '920px' : '480px' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="bts-modal-close"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close image modal"
              >
                &times;
              </button>
              <img
                src={currentItem.src}
                alt={currentItem.title}
                style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
              />
              <div style={{ marginTop: '16px' }}>
                <span className="gallery-counter">
                  {platformLabel} &bull; Screenshot {currentIndex + 1} of {currentList.length}
                </span>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginTop: '6px' }}>
                  {currentItem.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '6px' }}>
                  {currentItem.desc}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

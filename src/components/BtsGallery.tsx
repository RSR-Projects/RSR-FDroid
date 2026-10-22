import React, { useState } from 'react';
import { btsGalleryItems } from '../data/music';
import { BtsItem } from '../types';
import { BtsModal } from './BtsModal';

export const BtsGallery: React.FC = () => {
  const [activeItem, setActiveItem] = useState<BtsItem | null>(null);

  return (
    <>
      <div id="bts-section" className="bts-section-wrap" data-reveal>
        <div className="section-header" style={{ marginBottom: '28px' }}>
          <span className="section-pretitle">Studio &amp; Visuals</span>
          <h3 className="section-title" style={{ fontSize: '1.8rem' }}>Behind the Music &amp; Visualizers</h3>
          <p className="section-desc">
            Direct screen captures from FL Studio sequencing sessions and real-time audio visualizer engineering (ZGameEditor and Vizzy). Click any image to view in full resolution.
          </p>
        </div>

        <div className="bts-gallery-grid">
          {btsGalleryItems.map((item, idx) => (
            <div
              key={item.id}
              className="bts-card"
              data-reveal
              data-reveal-delay={(idx % 3 + 1).toString()}
            >
              <div
                className="bts-card-img-wrap"
                data-bts-img={item.src}
                data-bts-caption={item.caption}
                onClick={() => setActiveItem(item)}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <div className="bts-zoom-badge" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </div>
              </div>
              <div className="bts-card-body">
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
                <div className="bts-tags">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bts-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BtsModal item={activeItem} onClose={() => setActiveItem(null)} />
    </>
  );
};

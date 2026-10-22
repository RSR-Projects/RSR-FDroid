import React, { useEffect } from 'react';
import { BtsItem } from '../types';

interface BtsModalProps {
  item: BtsItem | null;
  onClose: () => void;
}

export const BtsModal: React.FC<BtsModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      id="bts-lightbox-modal"
      className="bts-modal active"
      role="dialog"
      aria-modal="true"
      aria-label="Studio Screenshot Lightbox"
      onClick={onClose}
    >
      <div className="bts-modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          id="bts-modal-close-btn"
          className="bts-modal-close"
          aria-label="Close dialog"
          onClick={onClose}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <img
          id="bts-modal-image"
          className="bts-modal-img"
          src={item.src}
          alt={item.alt}
        />
        <p id="bts-modal-caption" className="bts-modal-caption">
          {item.caption}
        </p>
      </div>
    </div>
  );
};

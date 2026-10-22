import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Layers } from 'lucide-react';

export interface PeelingCardItem {
  id: string;
  tag: string;
  badge?: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
  footerActions?: React.ReactNode;
}

interface PeelingDeckProps {
  id?: string;
  deckTitle?: string;
  deckSubtitle?: string;
  cards: PeelingCardItem[];
  className?: string;
}

export const PeelingDeck: React.FC<PeelingDeckProps> = ({
  id,
  deckTitle = 'Architecture Deck',
  deckSubtitle,
  cards,
  className = ''
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const totalCards = cards.length;

  // Pure Global Page Scroll synchronization (passive, zero lag, zero scroll trapping)
  useEffect(() => {
    let animId: number;

    const handleGlobalScroll = () => {
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollableDistance = track.offsetHeight - viewportHeight;

      if (totalScrollableDistance <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollableDistance));

      const targetIndex = Math.min(totalCards - 1, Math.floor(progress * totalCards));
      setActiveIndex(targetIndex);
    };

    const onScroll = () => {
      cancelAnimationFrame(animId);
      animId = requestAnimationFrame(handleGlobalScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleGlobalScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animId);
    };
  }, [totalCards]);

  // Smooth scroll to card's corresponding window position
  const scrollToCard = useCallback((targetIndex: number) => {
    const track = trackRef.current;
    if (!track) {
      setActiveIndex(targetIndex);
      return;
    }
    const rect = track.getBoundingClientRect();
    const currentScrollY = window.scrollY;
    const trackTop = currentScrollY + rect.top;
    const viewportHeight = window.innerHeight;
    const totalDistance = track.offsetHeight - viewportHeight;

    if (totalDistance > 0 && totalCards > 1) {
      const cardProgress = (targetIndex + 0.25) / totalCards;
      const targetY = trackTop + cardProgress * totalDistance;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    } else {
      setActiveIndex(targetIndex);
    }
  }, [totalCards]);

  const handleNext = useCallback(() => {
    const nextIdx = Math.min(activeIndex + 1, totalCards - 1);
    scrollToCard(nextIdx);
  }, [activeIndex, totalCards, scrollToCard]);

  const handlePrev = useCallback(() => {
    const prevIdx = Math.max(activeIndex - 1, 0);
    scrollToCard(prevIdx);
  }, [activeIndex, scrollToCard]);

  // Natural scroll pacing based on card count
  const trackHeight = `calc(100vh + ${(totalCards - 1) * 55}vh)`;

  return (
    <div
      id={id}
      ref={trackRef}
      className={`global-peeling-track ${className}`}
      style={{ minHeight: trackHeight }}
    >
      <div className="global-peeling-sticky">
        {/* Ultra-Compact Unified Command Header Bar (Fits on Any Screen Without Pushing Cards Off) */}
        <div className="peeling-deck-command-bar">
          {/* Left: Deck Pill & Counter */}
          <div className="peeling-deck-brand">
            <span className="peeling-brand-pill">
              <Layers className="w-3.5 h-3.5 text-violet-400" />
              <span className="peeling-brand-name">{deckTitle}</span>
            </span>
            <span className="peeling-index-counter">
              <strong>0{activeIndex + 1}</strong>
              <span className="text-slate-500">/</span>
              <span>0{totalCards}</span>
            </span>
          </div>

          {/* Center: Quick Jump Pills */}
          <div className="peeling-pills-row" role="tablist" aria-label="Deck cards tabs">
            {cards.map((card, idx) => (
              <button
                key={card.id || idx}
                type="button"
                className={`peeling-chip-btn ${idx === activeIndex ? 'active' : ''} ${idx < activeIndex ? 'peeled' : ''}`}
                onClick={() => scrollToCard(idx)}
                role="tab"
                aria-selected={idx === activeIndex}
                title={card.title}
              >
                <span className="peeling-chip-num">{idx + 1}</span>
                <span className="peeling-chip-text">{card.title.split(/[:—&•]/)[0].trim().slice(0, 18)}</span>
              </button>
            ))}
          </div>

          {/* Right: Prev & Next Navigation Buttons */}
          <div className="peeling-controls-group">
            <button
              type="button"
              className="peeling-ctrl-btn"
              disabled={activeIndex === 0}
              onClick={handlePrev}
              aria-label="Previous card in stack"
              title="Previous card"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              className="peeling-ctrl-btn"
              disabled={activeIndex === totalCards - 1}
              onClick={handleNext}
              aria-label="Next card (peels top card)"
              title="Next card"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3D Physical Stacked Cards Stage - Viewport Safe */}
        <div className="peeling-cards-stage">
          {cards.map((card, index) => {
            const isRemoved = index < activeIndex;
            const isActive = index === activeIndex;
            const offset = index - activeIndex;

            let cardClass = 'peel-card-frame';
            let transform = '';
            let opacity = 1;
            let zIndex = totalCards - index;
            let pointerEvents: 'auto' | 'none' = isActive ? 'auto' : 'none';

            if (isRemoved) {
              cardClass += ' is-removed';
              // When removed on scroll: lifts smoothly up, rotates slightly, scales down, and fades away
              transform = 'translate3d(0, -95px, 60px) rotate(-4.5deg) scale(0.93)';
              opacity = 0;
              pointerEvents = 'none';
            } else if (isActive) {
              cardClass += ' is-active';
              // Upright, prominent, solid opacity
              transform = 'translate3d(0, 0, 0) scale(1) rotate(0deg)';
              opacity = 1;
              zIndex = totalCards + 10;
              pointerEvents = 'auto';
            } else {
              cardClass += ' is-stacked';
              // Physical stack behind: progressive vertical offset, depth, slight rotation, scale
              const yOffset = offset * 16;
              const zOffset = -offset * 30;
              const scale = 1 - offset * 0.035;
              const rotate = offset % 2 === 1 ? offset * 1.4 : -offset * 1.1;
              transform = `translate3d(0, ${yOffset}px, ${zOffset}px) scale(${scale}) rotate(${rotate}deg)`;
              opacity = offset > 3 ? 0 : 1 - offset * 0.16;
              zIndex = totalCards - offset;
            }

            return (
              <div
                key={card.id || index}
                className={cardClass}
                style={{
                  transform,
                  opacity,
                  zIndex,
                  pointerEvents,
                  transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onClick={() => {
                  if (!isActive) {
                    scrollToCard(index);
                  }
                }}
              >
                <div className="peel-card-inner">
                  {/* Card Top Banner */}
                  <div className="peel-card-header">
                    <div className="peel-card-header-left">
                      {card.icon && <div className="peel-card-icon-box">{card.icon}</div>}
                      <div className="min-w-0">
                        <div className="peel-card-tag-row">
                          <span className="peel-card-tag">{card.tag}</span>
                          {card.badge && <span className="peel-card-badge">{card.badge}</span>}
                        </div>
                        <h4 className="peel-card-title">{card.title}</h4>
                        {card.subtitle && <p className="peel-card-subtitle">{card.subtitle}</p>}
                      </div>
                    </div>

                    {isActive && index < totalCards - 1 && (
                      <button
                        type="button"
                        className="peel-action-chip"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleNext();
                        }}
                        title="Scroll down page or click to peel off this card"
                      >
                        <span>Next Card &rarr;</span>
                      </button>
                    )}
                  </div>

                  {/* Card Interactive Content Area with internal scrollbar if needed */}
                  <div className="peel-card-content-area">{card.content}</div>

                  {/* Card Optional Footer Actions */}
                  {card.footerActions && (
                    <div className="peel-card-footer">{card.footerActions}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

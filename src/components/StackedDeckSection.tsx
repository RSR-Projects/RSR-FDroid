import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Smartphone, 
  Monitor, 
  ShieldCheck, 
  Music, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface DeckCardItem {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
  ctaDownload?: boolean;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  isExternalSecondary?: boolean;
  icon: React.ReactNode;
  gradient: string;
  borderGlow: string;
  image?: string;
}

interface StackedDeckSectionProps {
  onNavigateToSection: (hash: string) => void;
  onNavigateToCreator?: () => void;
}

export const StackedDeckSection: React.FC<StackedDeckSectionProps> = ({
  onNavigateToSection,
  onNavigateToCreator
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number>(0);
  const touchStartYRef = useRef<number>(0);

  const deckCards: DeckCardItem[] = [
    {
      id: 'castdrive-android',
      tag: 'FLAGSHIP APPLICATION',
      title: 'CastDrive for Android',
      subtitle: 'Low-Latency Mirroring & Reverse Touch Hub',
      badge: 'v2.0.0 (versionCode 3)',
      description:
        'Transform your Android smartphone into a high-framerate transmitter or secondary receiver. Mirror directly to car head units, secondary tablets, or desktop browsers with hardware-accelerated H.265 encoding and bi-directional touch input.',
      highlights: [
        'Bi-directional reverse touch feedback for automotive head units',
        'Hardware MediaCodec H.264 & H.265 encoding at up to 60 FPS',
        'Direct Wi-Fi hotspot, LAN, and USB tethering support without root'
      ],
      ctaLabel: 'Download APK Package',
      ctaHref: './fdroid/repo/CastDrive.apk',
      ctaDownload: true,
      secondaryCtaLabel: 'View Architecture',
      secondaryCtaHref: '#castdrive',
      icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
      gradient: 'linear-gradient(180deg, #102438 0%, #0a1422 100%)',
      borderGlow: 'rgba(6, 182, 212, 0.7)',
      image: './assets/screenshots/1.png'
    },
    {
      id: 'castdrive-pc',
      tag: 'DESKTOP COMPANION',
      title: 'CastDrive for Windows PC',
      subtitle: 'Extended Second Display (Spacedesk Style)',
      badge: 'CastDrivePC.exe',
      description:
        'Extend your Windows 10/11 desktop onto your Android phone or tablet wirelessly or via USB. Use your mobile device as an ultra-portable secondary monitor with full touchscreen, stylus, and mouse pointer synchronization.',
      highlights: [
        'Spacedesk-style virtual display extension with uncropped aspect ratios',
        'Dual mode: Phone-as-PC-monitor or stream phone screen to Windows desktop',
        'Ultra-low ~16ms latency with synchronized audio routing'
      ],
      ctaLabel: 'Download PC Client (Win 10/11)',
      ctaHref: 'https://github.com/RSR-Projects/CastDrive/releases/download/v2.0.0/CastDrivePC.exe',
      secondaryCtaLabel: 'Source Code',
      secondaryCtaHref: 'https://github.com/RSR-Projects/CastDrive',
      isExternalSecondary: true,
      icon: <Monitor className="w-6 h-6 text-indigo-400" />,
      gradient: 'linear-gradient(180deg, #131e36 0%, #0c1324 100%)',
      borderGlow: 'rgba(99, 102, 241, 0.7)',
      image: './assets/pc-screenshots/pc-seconddisplay.png'
    },
    {
      id: 'fdroid-repo',
      tag: 'AUTOMATED DISTRIBUTION',
      title: 'RSR-FDroid Repository',
      subtitle: 'Cryptographically Verified Independent Hub',
      badge: 'Zero Telemetry & Automated Updates',
      description:
        'Our dedicated F-Droid-compatible software repository allows Android users to receive continuous verified updates directly through F-Droid, Neo Store, Droid-ify, and Aurora Droid with strict SHA-256 integrity verification.',
      highlights: [
        'Automated GitHub Actions continuous compilation and cryptographic signing',
        'Zero tracking scripts, zero ads, zero telemetry data collection',
        '1-click instant integration with standard F-Droid protocol'
      ],
      ctaLabel: 'Add Repository',
      ctaHref: '#fdroid-repo',
      secondaryCtaLabel: 'View Changelog',
      secondaryCtaHref: '#changelog',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      gradient: 'linear-gradient(180deg, #0f2722 0%, #091717 100%)',
      borderGlow: 'rgba(16, 185, 129, 0.7)'
    },
    {
      id: 'rsr-spectrum',
      tag: 'CREATIVE AUDIO & CODE',
      title: 'RSR Spectrum Studio',
      subtitle: 'Original Synth Music & Audio-Reactive Visuals',
      badge: 'YouTube @RSR_Spectrum',
      description:
        'Explore the creative sound synthesis arm of RSR-Projects. Original retro electronic compositions, hardware Casio MT-35 MIDI experiments, and real-time GPU-rendered audio visualizers created with ZGameEditor and Vizzy.',
      highlights: [
        'Original electronic & synthwave releases with studio project breakdowns',
        'Vintage synthesizer MIDI integration and hardware controller workflows',
        'Real-time audio visualizers matching bass transients & frequency spectrums'
      ],
      ctaLabel: 'Explore Creator & Music',
      ctaHref: './creator.html',
      secondaryCtaLabel: 'YouTube Channel',
      secondaryCtaHref: 'https://www.youtube.com/@RSR_Spectrum',
      isExternalSecondary: true,
      icon: <Music className="w-6 h-6 text-purple-400" />,
      gradient: 'linear-gradient(180deg, #241438 0%, #110a1c 100%)',
      borderGlow: 'rgba(168, 85, 247, 0.7)',
      image: './assets/rsr-spectrum-logo.png'
    }
  ];

  const totalCards = deckCards.length;

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  // Keyboard navigation when user is focused within the section
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        nextCard();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevCard();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextCard, prevCard]);


  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diffX = e.changedTouches[0].clientX - touchStartXRef.current;
    const diffY = e.changedTouches[0].clientY - touchStartYRef.current;
    // If predominantly horizontal swipe
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX < 0) {
        nextCard();
      } else {
        prevCard();
      }
    }
  };

  return (
    <section 
      id="ecosystem-deck" 
      className="deck-section-wrap"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="container">
        {/* Section Header */}
        <div className="deck-header text-center" data-reveal>
          <div className="deck-eyebrow">
            <Layers className="w-4 h-4 text-violet-400" />
            <span>Interactive Software Stack</span>
          </div>
          <h2 className="deck-title">
            Explore the <span className="text-gradient-purple">Ecosystem</span>
          </h2>
          <p className="deck-subtitle">
            An interconnected suite of open-source applications, desktop companion utilities, and automated repository infrastructure. Swipe, scroll, or click to explore each layer.
          </p>
        </div>

        {/* Deck Control Bar */}
        <div className="deck-controls-bar" data-reveal data-reveal-delay="1">
          {/* Progress Indicator */}
          <div className="deck-progress-indicator">
            <span className="deck-counter-current">0{activeIndex + 1}</span>
            <span className="deck-counter-divider">/</span>
            <span className="deck-counter-total">0{totalCards}</span>
            <div className="deck-progress-track">
              <div 
                className="deck-progress-fill" 
                style={{ width: `${((activeIndex + 1) / totalCards) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Quick Tab Selectors */}
          <div className="deck-tabs-pills">
            {deckCards.map((card, idx) => (
              <button
                key={card.id}
                type="button"
                className={`deck-tab-pill ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Jump to ${card.title}`}
              >
                <span className="deck-tab-dot"></span>
                <span className="deck-tab-text">{card.title.replace('CastDrive for ', '').replace('RSR-', '')}</span>
              </button>
            ))}
          </div>

          {/* Arrows Navigation */}
          <div className="deck-nav-buttons">
            <button
              type="button"
              className="deck-nav-btn"
              onClick={prevCard}
              title="Previous card"
              aria-label="Previous card in deck"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="deck-nav-btn"
              onClick={nextCard}
              title="Next card"
              aria-label="Next card in deck"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3D Stacked Card Deck Container */}
        <div className="deck-stage-container" data-reveal data-reveal-delay="2">
          <div className="deck-stage">
            {deckCards.map((card, idx) => {
              // Calculate positional offset relative to active card
              // Cards wrap around or stack behind
              const offset = (idx - activeIndex + totalCards) % totalCards;
              const isActive = offset === 0;

              // Compute 3D stacked transform properties
              // Stacked behind with vertical offset, scale reduction, and subtle rotation
              let translateY = offset * 22;
              let translateZ = -offset * 50;
              let scale = 1 - offset * 0.045;
              let rotate = offset === 0 ? 0 : offset % 2 === 1 ? offset * 1.5 : -offset * 1.2;
              let opacity = offset > 3 ? 0 : 1 - offset * 0.16;
              let pointerEvents: 'auto' | 'none' = isActive ? 'auto' : 'auto';
              let zIndex = 20 - offset;

              // If it's the active card, keep it at normal transform
              const transformStyle = {
                transform: `translate3d(0, ${translateY}px, ${translateZ}px) scale(${scale}) rotate(${rotate}deg)`,
                zIndex,
                opacity,
                pointerEvents,
                transition: 'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease',
                background: card.gradient,
                borderColor: isActive ? card.borderGlow : 'rgba(255, 255, 255, 0.08)'
              };

              return (
                <div
                  key={card.id}
                  className={`deck-card ${isActive ? 'is-active' : 'is-stacked'}`}
                  style={transformStyle}
                  onClick={() => {
                    if (!isActive) {
                      setActiveIndex(idx);
                    }
                  }}
                  role="group"
                  aria-roledescription="card"
                  aria-label={card.title}
                >
                  {/* Subtle Card Glow Sheen */}
                  <div className="deck-card-sheen" aria-hidden="true"></div>

                  <div className="deck-card-inner">
                    {/* Card Header */}
                    <div className="deck-card-top">
                      <div className="deck-card-tag-row">
                        <div className="deck-card-icon-wrap">
                          {card.icon}
                        </div>
                        <span className="deck-card-tag">{card.tag}</span>
                      </div>
                      <span className="deck-card-badge">{card.badge}</span>
                    </div>

                    {/* Card Content Grid */}
                    <div className="deck-card-body">
                      <div className="deck-card-text-col">
                        <h3 className="deck-card-title">{card.title}</h3>
                        <div className="deck-card-subtitle">{card.subtitle}</div>
                        <p className="deck-card-description">{card.description}</p>

                        {/* Feature Highlights */}
                        <ul className="deck-card-highlights">
                          {card.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="deck-highlight-item">
                              <span className="deck-highlight-bullet"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Visual Preview Frame (if available) */}
                      {card.image && (
                        <div className="deck-card-visual-col">
                          <div className="deck-visual-frame">
                            <img 
                              src={card.image} 
                              alt={`${card.title} interface preview`} 
                              className="deck-visual-img"
                              loading="lazy"
                              onError={(e) => {
                                const target = e.currentTarget;
                                if (!target.src.includes('1.png')) {
                                  target.src = './assets/screenshots/1.png';
                                }
                              }}
                            />
                            <div className="deck-visual-gloss"></div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Actions Footer */}
                    <div className="deck-card-footer">
                      <div className="deck-actions-group">
                        {card.ctaDownload ? (
                          <a 
                            href={card.ctaHref} 
                            className="btn btn-primary deck-cta-btn" 
                            download
                          >
                            <Download className="w-4 h-4" />
                            <span>{card.ctaLabel}</span>
                          </a>
                        ) : card.ctaHref.startsWith('#') ? (
                          <button
                            type="button"
                            className="btn btn-primary deck-cta-btn"
                            onClick={() => onNavigateToSection(card.ctaHref)}
                          >
                            <span>{card.ctaLabel}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        ) : (
                          <a 
                            href={card.ctaHref} 
                            className="btn btn-primary deck-cta-btn"
                            onClick={(e) => {
                              if (onNavigateToCreator && card.ctaHref.includes('creator')) {
                                e.preventDefault();
                                onNavigateToCreator();
                              }
                            }}
                          >
                            <span>{card.ctaLabel}</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        )}

                        {card.secondaryCtaLabel && (
                          card.isExternalSecondary ? (
                            <a
                              href={card.secondaryCtaHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-secondary deck-secondary-btn"
                            >
                              <span>{card.secondaryCtaLabel}</span>
                              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                            </a>
                          ) : (
                            <button
                              type="button"
                              className="btn btn-secondary deck-secondary-btn"
                              onClick={() => card.secondaryCtaHref && onNavigateToSection(card.secondaryCtaHref)}
                            >
                              <span>{card.secondaryCtaLabel}</span>
                            </button>
                          )
                        )}
                      </div>

                      <div className="deck-card-counter-pill">
                        <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                        <span>Layer {idx + 1} of {totalCards}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="deck-mobile-hint">
          <span>&larr; Swipe left/right or tap back cards &rarr;</span>
        </div>
      </div>
    </section>
  );
};

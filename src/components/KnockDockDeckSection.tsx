import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Activity,
  Cpu,
  Sliders,
  ShieldCheck,
  Sparkles,
  Download,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers,
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

interface KnockDockDeckSectionProps {
  onNavigateToSection: (hash: string) => void;
  onNavigateToCastDrive?: () => void;
  onNavigateToCreator?: () => void;
}

export const KnockDockDeckSection: React.FC<KnockDockDeckSectionProps> = ({
  onNavigateToSection,
  onNavigateToCastDrive
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number>(0);
  const touchStartYRef = useRef<number>(0);

  const deckCards: DeckCardItem[] = [
    {
      id: 'knockdock-core',
      tag: 'FLAGSHIP ACOUSTIC CONTROLLER',
      title: 'KnockDock for Android',
      subtitle: 'Turn Any Desk Surface Into a Smart Knock Macro Pad',
      badge: 'v1.0 (versionCode 1) • Apache-2.0',
      description:
        'Place your Android smartphone on your desk and knock 1, 2, 3, or 4+ times on the table surface to control media, trigger multi-step conditional macros, launch apps like CastDrive, or control your PC over Wi-Fi.',
      highlights: [
        '200 Hz 6-Axis IMU sensor fusion with High-Pass Gravity Strip (α = 0.82)',
        '4 Surface Material Presets: Wood Desk, Glass Table, Metal Frame, Soft Desk Mat',
        'Gyroscope Pick-Up Rejection prevents false triggers while holding your phone'
      ],
      ctaLabel: 'Download KnockDock.apk',
      ctaHref: './fdroid/repo/KnockDock.apk',
      ctaDownload: true,
      secondaryCtaLabel: 'Inspect DSP Pipeline',
      secondaryCtaHref: '#knockdock',
      icon: <Activity className="w-6 h-6 text-cyan-400" />,
      gradient: 'linear-gradient(180deg, #102438 0%, #0a1422 100%)',
      borderGlow: 'rgba(6, 182, 212, 0.7)',
      image: './assets/knockdock-screenshots/1.png'
    },
    {
      id: 'knockdock-sensor-lab',
      tag: 'REAL-TIME TELEMETRY & CALIBRATION',
      title: '60 FPS Sensor Lab & Trainer',
      subtitle: 'Live Impulse Oscilloscope & 3-Trial Auto-Calibration',
      badge: 'Hardware Canvas • Synthetic Injector',
      description:
        'Visualize real-time high-pass filtered vibration impulses against the dynamic adaptive threshold and ambient EMA noise floor. Record any custom knock rhythm 3 times to auto-compute optimal millisecond interval bounds.',
      highlights: [
        '60 FPS live waveform plotting peak acceleration (m/s²) and 3-axis gyro (rad/s)',
        'Built-in Synthetic Knock Signal Injector to test macros without tapping',
        '3-Trial Gesture Trainer with 0–100% rhythm consistency scoring'
      ],
      ctaLabel: 'Explore Sensor Lab',
      ctaHref: '#knockdock',
      secondaryCtaLabel: 'View Screenshots',
      secondaryCtaHref: '#screenshots',
      icon: <Sliders className="w-6 h-6 text-emerald-400" />,
      gradient: 'linear-gradient(180deg, #0d2824 0%, #091718 100%)',
      borderGlow: 'rgba(16, 185, 129, 0.7)',
      image: './assets/knockdock-screenshots/2.png'
    },
    {
      id: 'knockdock-action-studio',
      tag: 'AUTOMATION & PC BRIDGE',
      title: 'Action Studio & PC Bridge',
      subtitle: '30 Built-In Actions, Conditional Macros & Wi-Fi PC Control',
      badge: '10 Categories • Dry-Run Simulator',
      description:
        'Map single, double, triple, quadruple, or custom knock rhythms to 30 built-in actions across 10 categories, chain multi-step conditional macros with loop protection, or dispatch commands to your computer over LAN.',
      highlights: [
        '30 built-in actions: Pomodoro Focus, Voice Memo, DAW/Media Transport, App Launch',
        'Conditional Macro Engine with cycle detection, retries & dry-run simulation',
        'Authenticated Wi-Fi PC Control Bridge & Local Smart Home HTTP Webhooks'
      ],
      ctaLabel: 'Explore Action Studio',
      ctaHref: '#knockdock',
      secondaryCtaLabel: 'Source Code',
      secondaryCtaHref: 'https://github.com/RSR-Projects/KnockDock',
      isExternalSecondary: true,
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      gradient: 'linear-gradient(180deg, #131e36 0%, #0c1324 100%)',
      borderGlow: 'rgba(99, 102, 241, 0.7)',
      image: './assets/knockdock-screenshots/4.png'
    },
    {
      id: 'knockdock-liquid-glass',
      tag: 'OPTICAL UI ARCHITECTURE',
      title: 'Kyant0 Liquid Glass UI',
      subtitle: 'Real-Time GPU Blur, Lens Refraction & 12 Settings Folders',
      badge: 'Android 7.0 – 16+ • Jetpack Compose',
      description:
        'Crafted with Kotlin 2.0, Jetpack Compose, and Kyant0 Backdrop/Shapes for real-time GPU blur, lens refraction, and chromatic dispersion—with independent optical sliders for Container Cards vs. the Floating Bottom Navigation Bar.',
      highlights: [
        'Stationary non-wobbling container cards with elastic touch physics on controls',
        '12 collapsible settings folders with JSON profile export & import',
        'Android 10+ background service with transparent 1×1 overlay launch bridge'
      ],
      ctaLabel: 'View Interface Gallery',
      ctaHref: '#screenshots',
      secondaryCtaLabel: 'Release Notes (v1.0)',
      secondaryCtaHref: '#changelog',
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      gradient: 'linear-gradient(180deg, #241438 0%, #110a1c 100%)',
      borderGlow: 'rgba(168, 85, 247, 0.7)',
      image: './assets/knockdock-screenshots/6.png'
    },
    {
      id: 'knockdock-fdroid',
      tag: 'AUTOMATED DISTRIBUTION',
      title: 'RSR-FDroid Repository',
      subtitle: 'Cryptographically Verified Installation & Updates',
      badge: 'Signed APK • SHA-256 Verified',
      description:
        'Install KnockDock alongside CastDrive through the official RSR-Projects F-Droid repository. Receive signed updates automatically in Official F-Droid, Neo Store, Droid-ify, or Aurora Droid.',
      highlights: [
        'Signed release APK (com.rsrprojects.knockdock, versionCode 1, v1.0)',
        '100% local processing with zero tracking scripts or cloud telemetry',
        'Seamless companion workflow with CastDrive multi-screen ecosystem'
      ],
      ctaLabel: 'Add F-Droid Repository',
      ctaHref: '#fdroid-repo',
      secondaryCtaLabel: 'Switch to CastDrive',
      secondaryCtaHref: './index.html',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      gradient: 'linear-gradient(180deg, #0f2722 0%, #091717 100%)',
      borderGlow: 'rgba(16, 185, 129, 0.7)',
      image: './assets/knockdock-screenshots/5.png'
    }
  ];

  const totalCards = deckCards.length;

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diffX = e.changedTouches[0].clientX - touchStartXRef.current;
    const diffY = e.changedTouches[0].clientY - touchStartYRef.current;
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
            <span>Interactive KnockDock Stack</span>
          </div>
          <h2 className="deck-title">
            Explore <span className="text-gradient-purple">KnockDock</span> Architecture
          </h2>
          <p className="deck-subtitle">
            A 10-stage acoustic &amp; structural vibration pipeline paired with a 60 FPS Sensor Lab, 30 built-in actions, and Kyant0 Liquid Glass UI. Swipe, scroll, or click to inspect each layer.
          </p>
        </div>

        {/* Deck Control Bar */}
        <div className="deck-controls-bar" data-reveal data-reveal-delay="1">
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
                <span className="deck-tab-text">{card.title.replace('KnockDock for ', '').replace('RSR-', '')}</span>
              </button>
            ))}
          </div>

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
              const offset = (idx - activeIndex + totalCards) % totalCards;
              const isActive = offset === 0;

              const translateY = offset * 22;
              const translateZ = -offset * 50;
              const scale = 1 - offset * 0.045;
              const rotate = offset === 0 ? 0 : offset % 2 === 1 ? offset * 1.5 : -offset * 1.2;
              const opacity = offset > 3 ? 0 : 1 - offset * 0.16;
              const pointerEvents: 'auto' | 'none' = 'auto';
              const zIndex = 20 - offset;

              const transformStyle = {
                transform: `translate3d(0, ${translateY}px, ${translateZ}px) scale(${scale}) rotate(${rotate}deg)`,
                zIndex,
                opacity,
                pointerEvents,
                transition:
                  'transform 0.85s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease',
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
                  <div className="deck-card-sheen" aria-hidden="true"></div>

                  <div className="deck-card-inner">
                    <div className="deck-card-top">
                      <div className="deck-card-tag-row">
                        <div className="deck-card-icon-wrap">{card.icon}</div>
                        <span className="deck-card-tag">{card.tag}</span>
                      </div>
                      <span className="deck-card-badge">{card.badge}</span>
                    </div>

                    <div className="deck-card-body">
                      <div className="deck-card-text-col">
                        <h3 className="deck-card-title">{card.title}</h3>
                        <div className="deck-card-subtitle">{card.subtitle}</div>
                        <p className="deck-card-description">{card.description}</p>

                        <ul className="deck-card-highlights">
                          {card.highlights.map((item, hIdx) => (
                            <li key={hIdx} className="deck-highlight-item">
                              <span className="deck-highlight-bullet"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {card.image && (
                        <div className="deck-card-visual-col">
                          <div className="deck-visual-frame">
                            <img
                              src={card.image}
                              alt={`${card.title} interface preview`}
                              className="deck-visual-img"
                              loading="lazy"
                            />
                            <div className="deck-visual-gloss"></div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="deck-card-footer">
                      <div className="deck-actions-group">
                        {card.ctaDownload ? (
                          <a href={card.ctaHref} className="btn btn-primary deck-cta-btn" download>
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
                          <a href={card.ctaHref} className="btn btn-primary deck-cta-btn">
                            <span>{card.ctaLabel}</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        )}

                        {card.secondaryCtaLabel &&
                          (card.isExternalSecondary ? (
                            <a
                              href={card.secondaryCtaHref}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-secondary deck-secondary-btn"
                            >
                              <span>{card.secondaryCtaLabel}</span>
                              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                            </a>
                          ) : card.secondaryCtaHref?.includes('index.html') && onNavigateToCastDrive ? (
                            <button
                              type="button"
                              className="btn btn-secondary deck-secondary-btn"
                              onClick={onNavigateToCastDrive}
                            >
                              <span>{card.secondaryCtaLabel}</span>
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="btn btn-secondary deck-secondary-btn"
                              onClick={() => card.secondaryCtaHref && onNavigateToSection(card.secondaryCtaHref)}
                            >
                              <span>{card.secondaryCtaLabel}</span>
                            </button>
                          ))}
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

        <div className="deck-mobile-hint">
          <span>&larr; Swipe left/right or tap back cards &rarr;</span>
        </div>
      </div>
    </section>
  );
};

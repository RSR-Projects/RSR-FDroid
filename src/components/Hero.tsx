import React from 'react';
import { 
  Smartphone, 
  Monitor, 
  ArrowRight, 
  Shield, 
  Radio, 
  Activity, 
  Layers,
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onNavigateToSection: (hash: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToSection }) => {
  return (
    <section id="hero" className="hero-cinematic">
      {/* Dynamic Ambient Background Illumination */}
      <div className="hero-atmospheric-bloom" aria-hidden="true">
        <div className="bloom-circle bloom-primary"></div>
        <div className="bloom-circle bloom-secondary"></div>
      </div>

      <div className="container hero-content-grid">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="hero-intro-col">
          <div className="hero-pill-badge" data-reveal>
            <span className="hero-pill-dot"></span>
            <span className="hero-pill-text">CastDrive v2.0.0 Released &bull; Dual Android &amp; PC Engine</span>
          </div>

          <h1 className="hero-headline" data-reveal data-reveal-delay="1">
            Next-Generation <br />
            <span className="text-gradient-hero">Connectivity.</span>
          </h1>

          <p className="hero-description" data-reveal data-reveal-delay="2">
            Practical, privacy-first software bridging Android devices, automotive head units, and Windows PCs. Turn any mobile device into an extended PC secondary monitor (Spacedesk style), mirror screens with reverse touch control, and distribute verified builds through an automated F-Droid repository.
          </p>

          <div className="hero-actions-row" data-reveal data-reveal-delay="3">
            <a
              href="#ecosystem-deck"
              className="btn btn-primary btn-hero-primary"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToSection('#ecosystem-deck');
              }}
            >
              <span>Explore Software Stack</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#fdroid-repo"
              className="btn btn-secondary btn-hero-secondary"
              onClick={(e) => {
                e.preventDefault();
                onNavigateToSection('#fdroid-repo');
              }}
            >
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Add F-Droid Repository</span>
            </a>
          </div>

          {/* Quick Credibility Checklist */}
          <div className="hero-checklist" data-reveal data-reveal-delay="4">
            <div className="hero-check-item">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>100% Free &amp; Open Source</span>
            </div>
            <div className="hero-check-item">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              <span>Zero Trackers or Telemetry</span>
            </div>
            <div className="hero-check-item">
              <CheckCircle2 className="w-4 h-4 text-violet-400" />
              <span>Automated F-Droid Signing</span>
            </div>
          </div>
        </div>

        {/* Right Column: Layered 3D Software Showcase Centerpiece */}
        <div className="hero-centerpiece-col" data-reveal data-reveal-delay="2">
          <div className="hero-3d-stage">
            {/* Background Windows PC Secondary Display Frame */}
            <div className="hero-device-pc">
              <div className="pc-screen-header">
                <div className="pc-window-controls">
                  <span className="win-dot dot-red"></span>
                  <span className="win-dot dot-yellow"></span>
                  <span className="win-dot dot-green"></span>
                </div>
                <span className="pc-window-title">CastDrivePC &bull; Secondary Virtual Display Active</span>
              </div>
              <div className="pc-screen-canvas">
                <img 
                  src="./assets/pc-screenshots/pc-seconddisplay.png" 
                  alt="CastDrive PC Host Interface" 
                  className="pc-screen-img"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('pc-castphone')) {
                      target.src = './assets/pc-screenshots/pc-castphone.png';
                    }
                  }}
                />
                <div className="pc-screen-overlay">
                  <div className="pc-overlay-chip">
                    <Monitor className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Windows Host Extended Workspace</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Foreground Android Mobile Transmitter Phone Frame */}
            <div className="hero-device-phone">
              <div className="phone-notch"></div>
              <div className="phone-screen-canvas">
                <img 
                  src="./assets/screenshots/1.png" 
                  alt="CastDrive Android Transmitter" 
                  className="phone-screen-img"
                  loading="eager"
                />
                <div className="phone-live-indicator">
                  <span className="phone-live-dot"></span>
                  <span>TRANSMITTING &bull; 60 FPS</span>
                </div>
              </div>
            </div>

            {/* Floating Telemetry Glass Chip 1 (Top Left) */}
            <div className="hero-floating-chip chip-left">
              <div className="chip-icon-box bg-cyan-glow">
                <Radio className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="chip-text">
                <span className="chip-label">Latency Profile</span>
                <span className="chip-val">~16ms Hardware Decode</span>
              </div>
            </div>

            {/* Floating Telemetry Glass Chip 2 (Bottom Right) */}
            <div className="hero-floating-chip chip-right">
              <div className="chip-icon-box bg-violet-glow">
                <Zap className="w-4 h-4 text-violet-400" />
              </div>
              <div className="chip-text">
                <span className="chip-label">Reverse Touch Control</span>
                <span className="chip-val">Bi-Directional Input</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

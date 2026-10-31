import React from 'react';
import {
  Activity,
  ArrowRight,
  Shield,
  Zap,
  CheckCircle2,
  Cpu,
  Download
} from 'lucide-react';

interface KnockDockHeroProps {
  onNavigateToSection: (hash: string) => void;
}

export const KnockDockHero: React.FC<KnockDockHeroProps> = ({ onNavigateToSection }) => {
  return (
    <section id="hero" className="hero-cinematic">
      {/* Dynamic Ambient Background Illumination */}
      <div className="hero-atmospheric-bloom" aria-hidden="true">
        <div className="bloom-circle bloom-primary"></div>
        <div className="bloom-circle bloom-secondary"></div>
      </div>

      <div className="container hero-content-grid">
        {/* Left Column: Editorial Headline & Actions (Next-Gen Connectivity Style) */}
        <div className="hero-intro-col">
          <div className="hero-pill-badge" data-reveal>
            <span className="hero-pill-dot"></span>
            <span className="hero-pill-text">KnockDock v1.0 &bull; Acoustic &amp; Surface Macro Suite</span>
          </div>

          <h1 className="hero-headline" data-reveal data-reveal-delay="1">
            Next-Generation <br />
            <span className="text-gradient-hero">Surface Control.</span>
          </h1>

          <p className="hero-description" data-reveal data-reveal-delay="2">
            Turn any physical desk or table into an intelligent, touch-free acoustic and structural vibration macro pad. Place your Android phone on your desk and knock 1, 2, 3, or 4+ times to trigger <strong>30 built-in actions</strong>, multi-step conditional macros, or desktop commands via the <strong>Wi-Fi PC Control Bridge</strong>.
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
              <span>Explore KnockDock Stack</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="./fdroid/repo/KnockDock.apk"
              download
              className="btn btn-secondary btn-hero-secondary"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download APK (v1.0)</span>
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
              <span>Add F-Droid Repo</span>
            </a>
          </div>

          {/* Quick Credibility Checklist */}
          <div className="hero-checklist" data-reveal data-reveal-delay="4">
            <div className="hero-check-item">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>200 Hz 6-Axis IMU DSP</span>
            </div>
            <div className="hero-check-item">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              <span>100% Local &bull; Zero Telemetry</span>
            </div>
            <div className="hero-check-item">
              <CheckCircle2 className="w-4 h-4 text-violet-400" />
              <span>Kyant0 Liquid Glass UI</span>
            </div>
          </div>
        </div>

        {/* Right Column: Layered 3D Software Showcase Centerpiece */}
        <div className="hero-centerpiece-col" data-reveal data-reveal-delay="2">
          <div className="hero-3d-stage">
            {/* Background Acoustic DSP & Sensor Lab Console Frame */}
            <div className="hero-device-pc">
              <div className="pc-screen-header">
                <div className="pc-window-controls">
                  <span className="win-dot dot-red"></span>
                  <span className="win-dot dot-yellow"></span>
                  <span className="win-dot dot-green"></span>
                </div>
                <span className="pc-window-title">KnockDock Sensor Lab &bull; 60 FPS Live Acoustic Oscilloscope</span>
              </div>
              <div
                className="pc-screen-canvas"
                style={{
                  background: 'linear-gradient(145deg, #070d19 0%, #0d1b2e 55%, #091322 100%)',
                  padding: '14px 16px 46px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  alignItems: 'center'
                }}
              >
                <div
                  style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1px solid rgba(6, 182, 212, 0.35)',
                    maxHeight: '195px',
                    background: '#050912'
                  }}
                >
                  <img
                    src="./assets/knockdock-screenshots/2.png"
                    alt="KnockDock 60 FPS Live Oscilloscope Sensor Lab"
                    style={{ width: '100%', height: '195px', objectFit: 'cover', objectPosition: 'top center' }}
                    loading="eager"
                  />
                </div>
                <div
                  style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1px solid rgba(139, 92, 246, 0.35)',
                    maxHeight: '195px',
                    background: '#050912'
                  }}
                >
                  <img
                    src="./assets/knockdock-screenshots/4.png"
                    alt="KnockDock Action Studio & Macro Builder"
                    style={{ width: '100%', height: '195px', objectFit: 'cover', objectPosition: 'top center' }}
                    loading="eager"
                  />
                </div>
                <div className="pc-screen-overlay">
                  <div className="pc-overlay-chip">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>6-Axis IMU Fusion &bull; 30 Actions &amp; PC Control Bridge</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Foreground Android Mobile KnockDock Liquid Glass Frame */}
            <div className="hero-device-phone">
              <div className="phone-notch"></div>
              <div className="phone-screen-canvas">
                <img
                  src="./assets/knockdock-screenshots/1.png"
                  alt="KnockDock Android Liquid Glass Home Screen"
                  className="phone-screen-img"
                  loading="eager"
                />
                <div className="phone-live-indicator">
                  <span className="phone-live-dot"></span>
                  <span>MONITORING &bull; 200 HZ IMU</span>
                </div>
              </div>
            </div>

            {/* Floating Telemetry Glass Chip 1 (Top Left) */}
            <div className="hero-floating-chip chip-left">
              <div className="chip-icon-box bg-cyan-glow">
                <Activity className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="chip-text">
                <span className="chip-label">Acoustic DSP Engine</span>
                <span className="chip-val">10-Stage Impulse Filter</span>
              </div>
            </div>

            {/* Floating Telemetry Glass Chip 2 (Bottom Right) */}
            <div className="hero-floating-chip chip-right">
              <div className="chip-icon-box bg-violet-glow">
                <Zap className="w-4 h-4 text-violet-400" />
              </div>
              <div className="chip-text">
                <span className="chip-label">Action Studio</span>
                <span className="chip-val">30 Actions &amp; PC Bridge</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

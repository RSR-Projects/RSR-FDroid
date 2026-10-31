import React, { useState } from 'react';
import {
  Activity,
  Cpu,
  Sliders,
  Zap,
  Layers,
  Sparkles,
  ExternalLink,
  Download,
  Shield,
  Smartphone,
  Monitor,
  Radio
} from 'lucide-react';
import { PeelingDeck, PeelingCardItem } from './PeelingDeck';

export const KnockDockShowcase: React.FC = () => {
  const [surfacePreset, setSurfacePreset] = useState<'wood' | 'glass' | 'metal' | 'mat'>('wood');
  const [actionCategory, setActionCategory] = useState<'workspace' | 'macros' | 'system' | 'network'>('workspace');

  const deckCards: PeelingCardItem[] = [
    // Card 1: Acoustic & Structural Vibration DSP Pipeline
    {
      id: 'knockdock-dsp-pipeline',
      tag: 'ACOUSTIC DSP ENGINE',
      badge: '200 Hz Sensor Fusion',
      title: '6-Axis Acoustic & Structural Vibration Pipeline',
      subtitle: 'Select a desk surface material preset to inspect real-time High-Pass Filtering, EMA noise floor tracking, and refractory echo suppression.',
      icon: <Activity className="w-5 h-5 text-cyan-400" />,
      content: (
        <div className="topology-card-content">
          <div className="topology-header-pills">
            <button
              type="button"
              className={`topology-tab-btn ${surfacePreset === 'wood' ? 'active' : ''}`}
              onClick={() => setSurfacePreset('wood')}
            >
              Wood Desk Preset
            </button>
            <button
              type="button"
              className={`topology-tab-btn ${surfacePreset === 'glass' ? 'active' : ''}`}
              onClick={() => setSurfacePreset('glass')}
            >
              Glass Table Preset
            </button>
            <button
              type="button"
              className={`topology-tab-btn ${surfacePreset === 'metal' ? 'active' : ''}`}
              onClick={() => setSurfacePreset('metal')}
            >
              Metal / Standing Desk
            </button>
            <button
              type="button"
              className={`topology-tab-btn ${surfacePreset === 'mat' ? 'active' : ''}`}
              onClick={() => setSurfacePreset('mat')}
            >
              Soft / Desk Mat
            </button>
          </div>

          <div className="topology-diagram-canvas" style={{ marginTop: '14px' }}>
            {/* Left Node: Sensor Fusion & High-Pass Filter */}
            <div className="topology-node-box active">
              <div className="topology-node-header">
                <div className="topology-node-icon">
                  <Smartphone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="topology-node-title">6-Axis IMU Sensor Fusion</div>
                  <div className="topology-node-role">ACCELEROMETER + GYRO • ~200 HZ</div>
                </div>
              </div>
              <div className="topology-node-metrics">
                <span className="topology-metric-pill">HPF: <strong>α = 0.82 (Gravity Strip)</strong></span>
                <span className="topology-metric-pill">
                  Surface Gain:{' '}
                  <strong>
                    {surfacePreset === 'wood' && '1.0x Balanced'}
                    {surfacePreset === 'glass' && '0.85x High-Q Damped'}
                    {surfacePreset === 'metal' && '0.90x Anti-Ring'}
                    {surfacePreset === 'mat' && '1.35x Boosted'}
                  </strong>
                </span>
                <span className="topology-metric-pill">Gyro Gate: <strong>Pick-Up Rejection</strong></span>
              </div>
            </div>

            {/* Connecting Pipeline Beam */}
            <div className="topology-connector-pipe">
              <div className="topology-pipe-line">
                <span className="topology-pulse-dot"></span>
              </div>
              <span className="topology-pipe-label">
                {surfacePreset === 'wood' && '95ms Refractory • EMA Noise Floor × 2.6'}
                {surfacePreset === 'glass' && '115ms Refractory • High-Frequency Ring Filter'}
                {surfacePreset === 'metal' && '125ms Refractory • Structural Resonance Guard'}
                {surfacePreset === 'mat' && '80ms Refractory • High-Sensitivity Envelope'}
              </span>
            </div>

            {/* Right Node: Pattern Classifier & Action Executor */}
            <div className="topology-node-box active">
              <div className="topology-node-header">
                <div className="topology-node-icon">
                  <Zap className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <div className="topology-node-title">Gesture Classifier &amp; Action Studio</div>
                  <div className="topology-node-role">TEMPORAL RHYTHM MATCHER &amp; EXECUTOR</div>
                </div>
              </div>
              <div className="topology-node-metrics">
                <span className="topology-metric-pill">Timeout: <strong>520ms Sequence Window</strong></span>
                <span className="topology-metric-pill">Confidence: <strong>≥ 65% Gate</strong></span>
                <span className="topology-metric-pill">Output: <strong>30 Actions &amp; PC Bridge</strong></span>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Card 2: Real-Time Sensor Lab & 60 FPS Live Oscilloscope
    {
      id: 'knockdock-sensor-lab',
      tag: 'REAL-TIME TELEMETRY',
      badge: '60 FPS Oscilloscope',
      title: 'Interactive Sensor Lab & Synthetic Signal Injector',
      subtitle: 'Hardware-accelerated 60 FPS Canvas waveform plotting live filtered vibration impulses against the dynamic adaptive threshold.',
      icon: <Radio className="w-5 h-5 text-indigo-400" />,
      content: (
        <div className="pc-second-display-card-content">
          <p className="deck-card-description" style={{ fontSize: '0.94rem', lineHeight: '1.62' }}>
            The built-in <strong>Sensor Lab</strong> visualizes exact acoustic energy traveling through your desk surface in real time. Inspect live peak acceleration (<code>m/s²</code>), dynamic ambient noise floor, and 3-axis gyroscope angular velocity (<code>rad/s</code>) without clipping.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
            <div className="p-3.5 bg-slate-900/80 border border-slate-700/60 rounded-xl">
              <div className="flex items-center gap-2 mb-1.5 font-bold text-cyan-400 text-sm">
                <Activity className="w-4 h-4" />
                <span>Live Impulse vs. Adaptive Threshold</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Plots high-pass filtered vibration peaks against the live adaptive trigger line and ambient EMA floor, with instant Pause/Resume freeze-frame and Peak-Hold capture.
              </p>
            </div>

            <div className="p-3.5 bg-slate-900/80 border border-slate-700/60 rounded-xl">
              <div className="flex items-center gap-2 mb-1.5 font-bold text-emerald-400 text-sm">
                <Zap className="w-4 h-4" />
                <span>Synthetic Knock Signal Replayer</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Inject deterministic sensor waveforms (<code>Single Knock</code>, <code>Double Knock</code>, <code>Triple Knock</code>, <code>Quadruple Knock</code>, <code>Rap-Pause-Rap</code>) directly into the detection pipeline to test macros without physically tapping.
              </p>
            </div>
          </div>
        </div>
      )
    },

    // Card 3: Multi-Trial Gesture Trainer & Pattern Calibration
    {
      id: 'knockdock-gesture-trainer',
      tag: 'PATTERN CALIBRATION',
      badge: '3-Trial Auto-Tune',
      title: 'Multi-Trial Gesture Trainer & Millisecond Editor',
      subtitle: 'Record custom knock rhythms 3 times in a row for automatic interval tolerance calibration, or fine-tune parameters manually.',
      icon: <Sliders className="w-5 h-5 text-emerald-400" />,
      content: (
        <div className="touch-card-content">
          <p className="deck-card-description">
            KnockDock combines an interactive <strong>3-Trial Gesture Trainer</strong> with a precision manual pattern editor so your custom desk knocks trigger reliably while ignoring accidental bumps or keyboard typing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
            <div className="p-3 bg-slate-900/80 border border-slate-700/60 rounded-xl text-center">
              <span className="font-mono font-bold text-sm text-cyan-400 block mb-1">3-TRIAL RECORDING</span>
              <p className="text-xs text-slate-300">Validates matching impact counts across 3 consecutive trials and computes a 0–100% Consistency Score.</p>
            </div>
            <div className="p-3 bg-slate-900/80 border border-slate-700/60 rounded-xl text-center">
              <span className="font-mono font-bold text-sm text-indigo-400 block mb-1">AUTO TOLERANCE</span>
              <p className="text-xs text-slate-300">Automatically derives optimal <code>minIntervalMs</code> and <code>maxIntervalMs</code> inter-knock timing bounds.</p>
            </div>
            <div className="p-3 bg-slate-900/80 border border-slate-700/60 rounded-xl text-center">
              <span className="font-mono font-bold text-sm text-violet-400 block mb-1">MANUAL SLIDERS</span>
              <p className="text-xs text-slate-300">Configure 1–6 impacts, 50–1500 ms intervals, 30–95% confidence gate, and 200–3000 ms cooldowns.</p>
            </div>
          </div>
        </div>
      )
    },

    // Card 4: Action Studio (30 Built-In Actions & Conditional Macros)
    {
      id: 'knockdock-action-studio',
      tag: 'AUTOMATION ENGINE',
      badge: '30 Actions • 10 Categories',
      title: 'Custom Action Studio & Multi-Step Conditional Macros',
      subtitle: 'Build powerful single actions or multi-step conditional sequences with loop protection, step retries, and side-effect-free dry-run testing.',
      icon: <Cpu className="w-5 h-5 text-violet-400" />,
      content: (
        <div className="encoder-card-content">
          <div className="mb-3">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
              Explore Action Studio Categories (30 Built-in Actions):
            </span>
            <div className="flex gap-2 flex-wrap">
              <button
                type="button"
                className={`btn btn-sm ${actionCategory === 'workspace' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActionCategory('workspace')}
              >
                Workspace, Focus &amp; Apps
              </button>
              <button
                type="button"
                className={`btn btn-sm ${actionCategory === 'macros' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActionCategory('macros')}
              >
                Conditional Macro Engine
              </button>
              <button
                type="button"
                className={`btn btn-sm ${actionCategory === 'system' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActionCategory('system')}
              >
                Media, Voice &amp; Utility
              </button>
              <button
                type="button"
                className={`btn btn-sm ${actionCategory === 'network' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActionCategory('network')}
              >
                Webhooks, Smart Home &amp; PC
              </button>
            </div>
          </div>

          <div className="p-4 bg-slate-900/90 border border-slate-700/70 rounded-xl">
            {actionCategory === 'workspace' && (
              <div className="space-y-1.5 text-xs text-slate-200">
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Workspace &amp; Deep Work:</span>
                  <span className="font-mono font-bold text-emerald-400">Desk Mode Toggle • 25m Pomodoro Focus (DND Restore)</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">App &amp; Ecosystem Launchers:</span>
                  <span className="font-mono">Launch Installed App (e.g., CastDrive) • Open Web URL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Productivity Shortcuts:</span>
                  <span className="font-semibold text-cyan-300">Snippet &amp; Clipboard Launcher • Quick Reminder &amp; Timer</span>
                </div>
              </div>
            )}
            {actionCategory === 'macros' && (
              <div className="space-y-1.5 text-xs text-slate-200">
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Conditional Branching:</span>
                  <span className="font-mono font-bold text-violet-400">Multi-Step Sequences • Cycle Detection (Depth 4)</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Concurrency Policies:</span>
                  <span className="font-mono">Ignore Duplicate • Restart • Queue • Cancel Toggle</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Safety Verification:</span>
                  <span className="font-semibold text-cyan-300">Side-Effect-Free Dry-Run Simulation &amp; Per-Step Retries</span>
                </div>
              </div>
            )}
            {actionCategory === 'system' && (
              <div className="space-y-1.5 text-xs text-slate-200">
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Audio &amp; Capture:</span>
                  <span className="font-mono font-bold text-sky-400">Quick Voice Memo • Music &amp; DAW Transport • Playlist Launcher</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Hardware &amp; State:</span>
                  <span className="font-mono">Reversible State Toggle • Emergency Light • Device Finder</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Modifier Chords:</span>
                  <span className="font-semibold text-cyan-300">Activate Gesture Modifiers (MOD_A, MOD_B, MOD_C)</span>
                </div>
              </div>
            )}
            {actionCategory === 'network' && (
              <div className="space-y-1.5 text-xs text-slate-200">
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">PC Control Bridge (Wi-Fi):</span>
                  <span className="font-mono font-bold text-amber-400">Authenticated LAN Bridge • Presentation Remote &amp; Desktop Control</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Smart Home &amp; HTTP:</span>
                  <span className="font-mono">Local Webhook / HTTP Request • Smart Home Scene Trigger</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Privacy Architecture:</span>
                  <span className="font-semibold text-cyan-300">100% Local Processing • Zero Cloud Telemetry</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    },

    // Card 5: Context Profiles, Chords & Background Service
    {
      id: 'knockdock-profiles-background',
      tag: 'PROFILES & BACKGROUND BRIDGE',
      badge: 'Android 10+ Ready',
      title: 'Context Profiles, Modifier Chords & Background Execution',
      subtitle: 'Switch automation profiles with JSON backup/restore while monitoring desk knocks reliably even when minimized or screen-off.',
      icon: <Layers className="w-5 h-5 text-amber-400" />,
      content: (
        <div className="audio-card-content">
          <p className="deck-card-description">
            Switch between <strong>Desk Commander</strong>, <strong>Focus Guard</strong>, <strong>Media Deck</strong>, or custom profiles. Each profile maintains independent sensitivity multipliers, gesture mappings, and conflict detection, while <code>KnockMonitoringService</code> ensures uninterrupted background execution.
          </p>

          <div className="p-3.5 bg-slate-900/90 border border-slate-700/70 rounded-xl font-mono text-xs space-y-2 text-slate-200">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <span>FOREGROUND ENGINE:</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded text-white">START_STICKY + Partial WakeLock + Overlay Launch Bridge</span>
            </div>
            <p className="text-slate-400 text-xs font-sans">
              Combines direct <code>FLAG_ACTIVITY_NEW_TASK</code> dispatch, a transient 1×1 transparent overlay bridge, and high-priority PendingIntent fallback so launching apps (like CastDrive) or URLs works seamlessly from the background.
            </p>
          </div>
        </div>
      )
    },

    // Card 6: Kyant0 Liquid Glass UI & v1.0 Release Architecture
    {
      id: 'knockdock-liquid-glass-release',
      tag: 'LIQUID GLASS & RELEASE',
      badge: 'v1.0 Stable',
      title: 'Kyant0 Liquid Glass Optics & Official Release v1.0',
      subtitle: 'Independent optical controls for Cards vs. Floating Bottom Navigation Bar, 12 collapsible settings folders, and Apache-2.0 open-source licensing.',
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      content: (
        <div className="architecture-card-content">
          <div className="flex items-center gap-3.5 mb-3">
            <img
              src="./assets/knockdock-icon.png"
              alt="KnockDock App Icon"
              className="w-12 h-12 rounded-xl border border-white/15 shadow-lg"
            />
            <div>
              <h5 className="text-white font-bold text-sm">KnockDock • Acoustic Desk Macro Controller</h5>
              <p className="text-xs text-slate-400 font-mono">Package ID: com.rsrprojects.knockdock • Signed Release APK</p>
            </div>
          </div>

          <p className="deck-card-description">
            Powered by <code>io.github.kyant0:backdrop</code> and <code>shapes</code> with real-time GPU blur, lens refraction, chromatic dispersion, stationary container cards, and hardware-layer elastic touch physics on interactive controls—organized into 12 collapsible settings folders.
          </p>

          <div className="flex flex-wrap gap-2 my-3">
            <span className="badge badge-stable">Version 1.0 (versionCode 1)</span>
            <span className="badge badge-license">Apache-2.0 License</span>
            <span className="badge badge-license">Android 7.0+ (Min SDK 24 / Target SDK 36)</span>
            <span className="badge badge-license">Kotlin 2.0 • Jetpack Compose</span>
          </div>

          <div className="flex gap-3 mt-4 flex-wrap">
            <a
              href="./fdroid/repo/KnockDock.apk"
              download
              className="btn btn-primary btn-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download KnockDock.apk (v1.0)</span>
            </a>
            <a
              href="https://github.com/RSR-Projects/KnockDock"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <span>GitHub Repository</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/RSR-Projects/KnockDock/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              <span>Release Notes (v1.0)</span>
            </a>
            <a
              href="#fdroid-repo"
              className="btn btn-ghost btn-sm"
            >
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Install via RSR F-Droid</span>
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="knockdock" className="castdrive-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" data-reveal>
          <span className="section-pretitle">Acoustic Desk Macro Controller</span>
          <h2 className="section-title">KnockDock &bull; Architecture &amp; Deep-Dive</h2>
          <p className="section-desc">
            Transform physical desk knocks and vibrations into configurable gestures, 30 built-in actions, multi-step conditional macros, and PC control workflows inside a real-time Kyant0 Liquid Glass interface.
          </p>
        </div>

        {/* Master Peeling Card Deck */}
        <PeelingDeck
          id="knockdock-details-deck"
          deckTitle="KnockDock Architecture &amp; Action Studio Deck"
          deckSubtitle="Scroll naturally down the page to peel cards and explore KnockDock's acoustic DSP, Sensor Lab, and 30-action macro engine"
          cards={deckCards}
        />
      </div>
    </section>
  );
};

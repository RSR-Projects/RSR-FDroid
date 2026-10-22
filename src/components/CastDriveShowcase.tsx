import React, { useState } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Cpu, 
  Radio, 
  Volume2, 
  RotateCw, 
  Activity, 
  Zap, 
  Layers, 
  ShieldCheck, 
  ExternalLink,
  CheckCircle2,
  Sliders,
  Tv
} from 'lucide-react';
import { PeelingDeck, PeelingCardItem } from './PeelingDeck';
import { castDriveFeatures } from '../data/castdrive';

export const CastDriveShowcase: React.FC = () => {
  const [topologyMode, setTopologyMode] = useState<'pc' | 'car' | 'p2p'>('pc');
  const [selectedMode, setSelectedMode] = useState<'performance' | 'balanced' | 'highend'>('performance');

  const deckCards: PeelingCardItem[] = [
    // Card 1: Interactive Multi-Screen Topology Simulator
    {
      id: 'topology-simulator',
      tag: 'LIVE TOPOLOGY ENGINE',
      badge: 'Interactive Pipeline',
      title: 'Multi-Screen Network & Hardware Pipeline',
      subtitle: 'Switch connection architectures to simulate hardware-accelerated video decode and touch routing.',
      icon: <Radio className="w-5 h-5 text-cyan-400" />,
      content: (
        <div className="topology-card-content">
          <div className="topology-header-pills">
            <button
              type="button"
              className={`topology-tab-btn ${topologyMode === 'pc' ? 'active' : ''}`}
              onClick={() => setTopologyMode('pc')}
            >
              PC Secondary Display Mode
            </button>
            <button
              type="button"
              className={`topology-tab-btn ${topologyMode === 'car' ? 'active' : ''}`}
              onClick={() => setTopologyMode('car')}
            >
              Car Head Unit Mode
            </button>
            <button
              type="button"
              className={`topology-tab-btn ${topologyMode === 'p2p' ? 'active' : ''}`}
              onClick={() => setTopologyMode('p2p')}
            >
              P2P Mobile Device
            </button>
          </div>

          <div className="topology-diagram-canvas" style={{ marginTop: '16px' }}>
            {/* Left Node: Transmitter */}
            <div className="topology-node-box active">
              <div className="topology-node-header">
                <div className="topology-node-icon">
                  <Smartphone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="topology-node-title">
                    {topologyMode === 'pc' ? 'Android Phone / Tablet' : 'Android Smartphone'}
                  </div>
                  <div className="topology-node-role">
                    {topologyMode === 'pc' ? 'VIRTUAL DISPLAY SINK' : 'SCREEN TRANSMITTER'}
                  </div>
                </div>
              </div>
              <div className="topology-node-metrics">
                <span className="topology-metric-pill">FPS: <strong>60 FPS</strong></span>
                <span className="topology-metric-pill">Codec: <strong>H.265 / HEVC</strong></span>
                <span className="topology-metric-pill">Engine: <strong>MediaCodec</strong></span>
              </div>
            </div>

            {/* Connecting Pipeline Beam */}
            <div className="topology-connector-pipe">
              <div className="topology-pipe-line">
                <span className="topology-pulse-dot"></span>
              </div>
              <span className="topology-pipe-label">
                {topologyMode === 'pc' && 'Wi-Fi / USB • Spacedesk Virtual Bus'}
                {topologyMode === 'car' && 'Wi-Fi Direct / USB • Touch Feedback Bus'}
                {topologyMode === 'p2p' && 'Low-Latency Socket • P2P Stream'}
              </span>
            </div>

            {/* Right Node: Receiver */}
            <div className="topology-node-box active">
              <div className="topology-node-header">
                <div className="topology-node-icon">
                  {topologyMode === 'pc' ? (
                    <Monitor className="w-5 h-5 text-indigo-400" />
                  ) : topologyMode === 'car' ? (
                    <Tv className="w-5 h-5 text-violet-400" />
                  ) : (
                    <Smartphone className="w-5 h-5 text-emerald-400" />
                  )}
                </div>
                <div>
                  <div className="topology-node-title">
                    {topologyMode === 'pc' && 'Windows PC (CastDrivePC)'}
                    {topologyMode === 'car' && 'Car Head Unit (Android Auto / Stereo)'}
                    {topologyMode === 'p2p' && 'Secondary Android Tablet / Screen'}
                  </div>
                  <div className="topology-node-role">
                    {topologyMode === 'pc' && 'DESKTOP HOST & DISPLAY SERVER'}
                    {topologyMode === 'car' && 'RECEIVER WITH REVERSE TOUCH'}
                    {topologyMode === 'p2p' && 'HARDWARE DECODER SINK'}
                  </div>
                </div>
              </div>
              <div className="topology-node-metrics">
                <span className="topology-metric-pill">Latency: <strong>~16ms</strong></span>
                <span className="topology-metric-pill">Touch: <strong>{topologyMode === 'car' ? 'Bi-Directional' : 'Pointer Sync'}</strong></span>
                <span className="topology-metric-pill">Status: <strong>Connected</strong></span>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Card 2: Phone as PC Second Display (Spacedesk Style) & Windows App
    {
      id: 'pc-second-display',
      tag: 'V2.0.0 FLAGSHIP CAPABILITY',
      badge: 'Windows PC Host',
      title: 'Phone as PC Second Display (Spacedesk Style)',
      subtitle: 'Transform any Android phone or tablet into an independent wireless or USB-wired secondary monitor.',
      icon: <Monitor className="w-5 h-5 text-indigo-400" />,
      content: (
        <div className="pc-second-display-card-content">
          <p className="deck-card-description" style={{ fontSize: '0.96rem', lineHeight: '1.68' }}>
            Powered by the companion <code>CastDrivePC.exe</code> client, you can extend your Windows desktop workspace with uncropped aspect ratios, ultra-low latency, and responsive touchscreen/mouse controls. No external cloud account or third-party drivers required.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
            <div className="p-3.5 bg-slate-900/80 border border-slate-700/60 rounded-xl">
              <div className="flex items-center gap-2 mb-1.5 font-bold text-sky-400 text-sm">
                <Monitor className="w-4 h-4" />
                <span>Extended Desktop Monitor</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Appears as a native additional display in Windows Display Settings. Drag windows, documents, and tools freely onto your phone or tablet screen.
              </p>
            </div>

            <div className="p-3.5 bg-slate-900/80 border border-slate-700/60 rounded-xl">
              <div className="flex items-center gap-2 mb-1.5 font-bold text-emerald-400 text-sm">
                <Zap className="w-4 h-4" />
                <span>Zero-Latency USB Tethering</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect via standard USB cable with ADB or tethering for rock-solid zero-jitter performance in crowded Wi-Fi environments.
              </p>
            </div>

            <div className="p-3.5 bg-slate-900/80 border border-slate-700/60 rounded-xl">
              <div className="flex items-center gap-2 mb-1.5 font-bold text-violet-400 text-sm">
                <Activity className="w-4 h-4" />
                <span>Touchscreen &amp; Mouse Input</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tap, drag, and draw directly on your mobile screen with full Windows touch digitization and reverse mouse coordinate mapping.
              </p>
            </div>

            <div className="p-3.5 bg-slate-900/80 border border-slate-700/60 rounded-xl">
              <div className="flex items-center gap-2 mb-1.5 font-bold text-amber-400 text-sm">
                <Volume2 className="w-4 h-4" />
                <span>Synchronized Audio &amp; Cast Mode</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Also supports Mode A: Cast your Android phone directly to your PC monitor with synchronized stereo audio output.
              </p>
            </div>
          </div>
        </div>
      )
    },

    // Card 3: Hardware-Accelerated Encoder & Latency Engine
    {
      id: 'hardware-encoder',
      tag: 'STREAMING ARCHITECTURE',
      badge: 'MediaCodec',
      title: 'Hardware-Accelerated Encoder & Latency Engine',
      subtitle: 'Native H.264/H.265 hardware encoding pipeline delivering constant 60 FPS performance.',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      content: (
        <div className="encoder-card-content">
          <p className="deck-card-description">
            CastDrive leverages the Android <code>MediaCodec</code> API directly in C++/Java, bypassing OS compositing overhead for immediate frame capture and zero-copy packetization.
          </p>

          <div className="mb-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
              Select Encoder Profile:
            </span>
            <div className="flex gap-2 flex-wrap">
              <button
                type="button"
                className={`btn btn-sm ${selectedMode === 'performance' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedMode('performance')}
              >
                Performance Mode (~16ms)
              </button>
              <button
                type="button"
                className={`btn btn-sm ${selectedMode === 'balanced' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedMode('balanced')}
              >
                Balanced Mode (~22ms)
              </button>
              <button
                type="button"
                className={`btn btn-sm ${selectedMode === 'highend' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedMode('highend')}
              >
                High-End Crisp (~32ms)
              </button>
            </div>
          </div>

          <div className="p-4 bg-slate-900/90 border border-slate-700/70 rounded-xl">
            {selectedMode === 'performance' && (
              <div className="space-y-1.5 text-xs text-slate-200">
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Target Latency:</span>
                  <span className="font-mono font-bold text-emerald-400">~16ms Glass-to-Glass</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Resolution &amp; Framerate:</span>
                  <span className="font-mono">720p @ 60 FPS Native</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Bitrate Optimization:</span>
                  <span className="font-mono">4.5 Mbps Dynamic VBR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Best For:</span>
                  <span className="font-semibold text-cyan-300">Automotive touch screens, gaming, real-time input</span>
                </div>
              </div>
            )}
            {selectedMode === 'balanced' && (
              <div className="space-y-1.5 text-xs text-slate-200">
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Target Latency:</span>
                  <span className="font-mono font-bold text-sky-400">~22ms Ultra-Stable</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Resolution &amp; Framerate:</span>
                  <span className="font-mono">1080p @ 60 FPS High Definition</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Bitrate Optimization:</span>
                  <span className="font-mono">8.0 Mbps Adaptive Rate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Best For:</span>
                  <span className="font-semibold text-cyan-300">Daily productivity, secondary workspace, media</span>
                </div>
              </div>
            )}
            {selectedMode === 'highend' && (
              <div className="space-y-1.5 text-xs text-slate-200">
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Target Latency:</span>
                  <span className="font-mono font-bold text-violet-400">~32ms Precision Focus</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Resolution &amp; Framerate:</span>
                  <span className="font-mono">1440p / Native Display @ 45-60 FPS</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-1">
                  <span className="text-slate-400">Bitrate Optimization:</span>
                  <span className="font-mono">14.0 Mbps High-Fidelity</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Best For:</span>
                  <span className="font-semibold text-cyan-300">Detailed text editing, graphic tools, high-density tablets</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )
    },

    // Card 4: Bi-Directional Touch Input & Vehicle Steering
    {
      id: 'touch-automotive',
      tag: 'CONTROL PROTOCOL',
      badge: 'Reverse Touch',
      title: 'Bi-Directional Reverse Touch & Vehicle Dashboards',
      subtitle: 'Inject touchscreen taps, gestures, and multi-touch coordinates directly back to the transmitter.',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      content: (
        <div className="touch-card-content">
          <p className="deck-card-description">
            CastDrive implements an asynchronous reverse input protocol over TCP/UDP sockets, allowing head units and receiving screens to control the source phone seamlessly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-3">
            <div className="p-3 bg-slate-900/80 border border-slate-700/60 rounded-xl text-center">
              <span className="font-mono font-bold text-sm text-cyan-400 block mb-1">FIT MODE</span>
              <p className="text-xs text-slate-300">Preserves original aspect ratio with clean matte padding.</p>
            </div>
            <div className="p-3 bg-slate-900/80 border border-slate-700/60 rounded-xl text-center">
              <span className="font-mono font-bold text-sm text-indigo-400 block mb-1">FILL MODE</span>
              <p className="text-xs text-slate-300">Maximizes screen coverage for modern wide automotive head units.</p>
            </div>
            <div className="p-3 bg-slate-900/80 border border-slate-700/60 rounded-xl text-center">
              <span className="font-mono font-bold text-sm text-violet-400 block mb-1">STRETCH MODE</span>
              <p className="text-xs text-slate-300">Full boundary stretch for custom in-dash tablet bezels.</p>
            </div>
          </div>
        </div>
      )
    },

    // Card 5: Low-Latency Audio Streaming & Zero-Install Browser Server
    {
      id: 'audio-browser',
      tag: 'AUDIO & WEB PROTOCOLS',
      badge: 'Zero-Install',
      title: 'Synchronized Audio & In-Browser Receiver Server',
      subtitle: 'System audio capture combined with a built-in micro web server for zero-install client reception.',
      icon: <Volume2 className="w-5 h-5 text-emerald-400" />,
      content: (
        <div className="audio-card-content">
          <p className="deck-card-description">
            Transmit full system sound in lock-step with video frames. Additionally, CastDrive hosts an onboard HTTP/WebSocket micro-server allowing any browser on the LAN to view the stream instantly at <code>http://&lt;phone-ip&gt;:8080</code> without downloading any APK or software.
          </p>

          <div className="p-4 bg-slate-900/90 border border-slate-700/70 rounded-xl font-mono text-xs space-y-2 text-slate-200">
            <div className="flex items-center gap-2 text-cyan-400 font-bold">
              <span>ENDPOINT:</span>
              <span className="bg-slate-800 px-2 py-0.5 rounded text-white">http://192.168.x.x:8080</span>
            </div>
            <p className="text-slate-400 text-xs font-sans">
              Works across Safari, Chrome, Edge, Linux, macOS, smart TVs, and vehicle browser systems with HTML5 Canvas / MSE decoding.
            </p>
          </div>
        </div>
      )
    },

    // Card 6: 4-Angle Screen Rotation & Version 2.0.0 Architecture
    {
      id: 'version-architecture',
      tag: 'RELEASE ARCHITECTURE',
      badge: 'v2.0.0 Stable',
      title: 'Instant 4-Angle Rotation & Release Milestones',
      subtitle: 'Official v2.0.0 build details, automated F-Droid signing, and open-source licensing.',
      icon: <RotateCw className="w-5 h-5 text-violet-400" />,
      content: (
        <div className="architecture-card-content">
          <p className="deck-card-description">
            Seamlessly toggle between 0°, 90°, 180°, and 270° orientation with instant transformation matrices, ensuring perfect alignment whether your receiver is mounted horizontally or vertically.
          </p>

          <div className="flex flex-wrap gap-2 my-3">
            <span className="badge badge-stable">Version 2.0.0 (versionCode 3)</span>
            <span className="badge badge-license">MIT License</span>
            <span className="badge badge-license">Android 8.0 - 15+</span>
            <span className="badge badge-license">Windows 10 / 11 Host</span>
          </div>

          <div className="flex gap-3 mt-4 flex-wrap">
            <a 
              href="https://github.com/RSR-Projects/CastDrive" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-sm"
            >
              <span>GitHub Repository</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com/RSR-Projects/CastDrive/releases" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-sm"
            >
              <span>Download Releases (v2.0.0)</span>
            </a>
            <a 
              href="https://github.com/RSR-Projects/CastDrive/issues" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-ghost btn-sm"
            >
              <span>Issue Tracker</span>
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="castdrive" className="castdrive-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center" data-reveal>
          <span className="section-pretitle">Featured Software Suite</span>
          <h2 className="section-title">CastDrive &bull; Architecture &amp; Deep-Dive</h2>
          <p className="section-desc">
            Explore the multi-screen topology, Windows PC second display engine, and low-latency hardware decoding pipeline.
          </p>
        </div>

        {/* Master Peeling Card Deck */}
        <PeelingDeck
          id="castdrive-details-deck"
          deckTitle="CastDrive Architecture &amp; Pipeline Deck"
          deckSubtitle="Scroll down on cards to peel off and reveal the next subsystem in the stack"
          cards={deckCards}
        />
      </div>
    </section>
  );
};

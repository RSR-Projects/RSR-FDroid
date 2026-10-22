import { FeatureItem, ChangelogRelease, EcosystemProject } from '../types';

export const castDriveFeatures: FeatureItem[] = [
  {
    iconType: 'receiver',
    title: 'Screen Mirroring & Native Receiver',
    description: 'Run CastDrive on a second Android device, tablet, or car stereo to receive real-time screen mirroring in full-screen with dedicated connection controls and low-latency delivery.',
    tags: ['App Receiver', 'Fullscreen', 'Low-Latency']
  },
  {
    iconType: 'desktop',
    title: 'Windows PC Desktop App (CastDrivePC.exe)',
    description: 'Official Windows application supporting dual workflows: mirror your phone to PC with full audio & reverse mouse control, or stream Windows to your phone as an extended second display (Spacedesk style).',
    tags: ['Windows 10/11', 'Spacedesk Style', 'Dual Mode']
  },
  {
    iconType: 'modes',
    title: 'Multiple Performance Modes',
    description: 'Choose between Performance, Balanced, and High-End modes, allowing users to tailor resolution, frame rate, and encoder load to match their device and network capacity.',
    tags: ['Performance', 'Balanced', 'High-End']
  },
  {
    iconType: 'touch',
    title: 'Touchscreen & Mouse Interaction',
    description: 'Supported through both the web-browser receiver and the dedicated app receiver. Sends taps, drags, swipes, and mouse navigation back to the host without requiring root permissions.',
    tags: ['Browser & App', 'Reverse Touch', 'No Root Required']
  },
  {
    iconType: 'audio',
    title: 'Universal Audio Support',
    description: 'Stream real-time system audio in sync with the video feed. Internal audio capture is available through both the dedicated app receiver and web-browser receiver options.',
    tags: ['Audio Stream', 'App Receiver', 'Browser Receiver']
  },
  {
    iconType: 'browser',
    title: 'Zero-Install Browser Receiver',
    description: 'Turn any computer, smart display, or laptop into a receiver simply by visiting http://<phone-ip>:8080 in any modern browser. Supports audio, reverse touch, and full-screen view.',
    tags: ['Web-Based', 'Port 8080', 'Zero Installation']
  },
  {
    iconType: 'display',
    title: 'Display & Rotation Controls',
    description: 'Optimized for automotive dashboard screens and tablets: toggle between Fit, Fill, and Fullscreen modes with instant rotation to 0°, 90°, 180°, or 270° orientation.',
    tags: ['Fit / Fill', '0° to 270°', 'Head Unit Ready']
  },
  {
    iconType: 'usb',
    title: 'Experimental USB Tethering & Android Auto',
    description: 'Direct USB tethering mode provides ultra-low latency wired connectivity when wireless channels are congested. Experimental Android Auto companion integration allows testing display casting on supported car head units.',
    tags: ['USB Tethering (Exp.)', 'Android Auto (Exp.)', 'Experimental']
  }
];

export const changelogData: ChangelogRelease[] = [
  {
    version: 'v2.0.0',
    versionCodeBadge: 'versionCode 3 • Latest Release',
    dateLabel: 'Current Production Build',
    isLatest: true,
    items: [
      {
        title: 'Phone as PC Second Display (Spacedesk Style):',
        description: 'Wirelessly or via USB, turn your Android phone or tablet into an independent secondary monitor for Windows with multi-touch and mouse interaction.'
      },
      {
        title: 'Official Windows PC Application (CastDrivePC.exe):',
        description: 'Dual-mode companion app supporting Mode A (receive phone mirror with audio and touch feedback) and Mode B (extended desktop display server).'
      },
      {
        title: 'Configurable Performance Modes:',
        description: 'Added Performance, Balanced, and High-End modes to balance latency, framerate, and hardware encoder load according to device and network conditions.'
      },
      {
        title: 'Two-Way Touchscreen & Mouse Interaction:',
        description: 'Reverse touch and mouse input supported through both the web-browser receiver and the dedicated app receiver without root permissions.'
      },
      {
        title: 'Universal Synchronized Audio:',
        description: 'System audio streaming supported across both the dedicated app receiver and web-browser receiver options.'
      },
      {
        title: 'Experimental USB Tethering:',
        description: 'Added direct wired link support for ultra-low latency in high-interference environments (labeled experimental).'
      },
      {
        title: 'Experimental Android Auto Integration:',
        description: 'Preliminary integration allowing automotive head unit display testing (labeled experimental; compatibility varies).'
      }
    ]
  },
  {
    version: 'v1.0.0',
    versionCodeBadge: 'versionCode 1 • Initial Release',
    dateLabel: 'Historical Milestone',
    isLatest: false,
    items: [
      {
        description: 'Initial release of CastDrive Android transmitter and native receiver for automotive stereos, tablets, and mobile devices.'
      },
      {
        description: 'Low-latency H.264 screen streaming over Wi-Fi and mobile hotspot with automatic UDP discovery.'
      },
      {
        description: 'Reverse touch input support via Android Accessibility Service.'
      },
      {
        description: 'Zero-install web-browser receiver server hosted on port 8080.'
      },
      {
        description: 'Launch of RSR-Projects third-party F-Droid repository with cryptographic signing.'
      }
    ]
  }
];

export const ecosystemProjects: EcosystemProject[] = [
  {
    title: 'CastDrive',
    badge: 'v2.0.0 • Active',
    description: 'Android and Windows screen mirroring and extended secondary display ecosystem (Spacedesk style) with reverse touch, multi-performance modes, and synchronized audio.',
    status: 'Primary App',
    linkText: 'View Repository →',
    linkUrl: 'https://github.com/RSR-Projects/CastDrive',
    isExternal: true
  },
  {
    title: 'RSR-FDroid',
    badge: 'Production • Active',
    description: 'Automated F-Droid third-party repository and GitHub Pages publishing workflow, featuring cryptographic index signing and APK distribution.',
    status: 'Infrastructure',
    linkText: 'View Repository →',
    linkUrl: 'https://github.com/RSR-Projects/RSR-FDroid',
    isExternal: true
  },
  {
    title: 'Ecosystem Companion Tools',
    badge: 'In Planning',
    description: 'Future companion utilities, wireless bridge helpers, and audio forwarding extensions designed to integrate with the RSR multi-screen ecosystem.',
    status: 'Planned Feature',
    linkText: 'Roadmap',
    linkUrl: '#',
    isExternal: false
  },
  {
    title: 'Creator & Music',
    badge: 'Creative Showcase',
    description: 'Original music production, YouTube uploads (@RSR_Spectrum), Casio MT-35 hardware experiments, and creative coding by the developer.',
    status: 'RSR Spectrum',
    linkText: 'Explore Music →',
    linkUrl: './creator.html',
    isExternal: false,
    accent: true
  }
];

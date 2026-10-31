import { Screenshot } from '../types';

export const androidScreenshots: Screenshot[] = [
  {
    num: 1,
    src: './assets/screenshots/1.png',
    title: 'Transmitter Control Hub',
    desc: 'Main interface on the Android phone. Shows real-time connection status, transmitter toggle, receiver IP input, port, and audio configuration.'
  },
  {
    num: 2,
    src: './assets/screenshots/2.png',
    title: 'Active Mirroring Session',
    desc: 'Live streaming session active. Low-latency H.264 stream transmitted across the local Wi-Fi, hotspot, or USB tethered connection.'
  },
  {
    num: 3,
    src: './assets/screenshots/3.png',
    title: 'Performance Modes & Resolution',
    desc: 'Configurable stream encoder settings with Performance, Balanced, and High-End modes allowing users to balance latency and image quality for head units and secondary displays.'
  },
  {
    num: 4,
    src: './assets/screenshots/4.png',
    title: 'Audio Streaming Mode',
    desc: 'Internal audio capture controls. Transmits system sound along with the screen to supported native Android receivers, Windows PC client, or web browsers.'
  },
  {
    num: 5,
    src: './assets/screenshots/5.png',
    title: 'Receiver Mode Interface',
    desc: 'The receiving Android device running CastDrive in native receiver mode, ready for one-tap pairing and reverse touchscreen input.'
  },
  {
    num: 6,
    src: './assets/screenshots/6.png',
    title: 'Display Aspect Ratio Controls',
    desc: 'Fit, Fill, and Stretch aspect-ratio modes designed specifically to match various car dashboard screens, widescreen head units, and tablets.'
  },
  {
    num: 7,
    src: './assets/screenshots/7.png',
    title: 'Multi-Angle Screen Rotation',
    desc: 'Instant rotation adjustment between 0°, 90°, 180°, and 270° orientation to fit horizontal or vertical dashboard mounts.'
  },
  {
    num: 8,
    src: './assets/screenshots/8.png',
    title: 'Automotive & Browser Connectivity',
    desc: 'Connection manager overview showing local UDP discovery, Hotspot tethering, and browser endpoint address (http://<ip>:8080).'
  }
];

export const pcScreenshots: Screenshot[] = [
  {
    num: 1,
    src: './assets/pc-screenshots/pc-seconddisplay.png',
    title: 'PC Second Display Server (Spacedesk Style)',
    desc: 'Turns your Android phone or tablet into an independent secondary monitor with touchscreen feedback. Supports extended desktop streaming at native uncropped resolution with Microsoft IddCx driver integration.'
  },
  {
    num: 2,
    src: './assets/pc-screenshots/pc-castphone.png',
    title: 'Receive Phone Mirror on PC',
    desc: 'Mirror your Android screen to Windows with low-latency streaming, synchronized audio, Fit/Fill controls, rotation, and real-time reverse mouse and touch controls.'
  },
  {
    num: 3,
    src: './assets/pc-screenshots/pc-guide.png',
    title: 'Built-in PC & Android Setup Guide',
    desc: 'Integrated interactive setup guide for Mode A (Phone to PC mirror), Mode B (Phone as second display for PC), and Zero-Latency USB Tethering.'
  },
  {
    num: 4,
    src: './assets/pc-screenshots/pc-browser.png',
    title: 'Zero-Install In-Browser Receiver Server',
    desc: 'Built-in local web server address (http://<phone-ip>:8080) allowing any computer, tablet, or smart display on the network to view the stream directly via web browser.'
  }
];

export const knockDockScreenshots: Screenshot[] = [
  {
    num: 1,
    src: './assets/knockdock-screenshots/1.png',
    title: 'Home Dock & Acoustic Monitoring Hub',
    desc: 'Main KnockDock dashboard featuring continuous acoustic desk-surface monitoring controls, interactive tap test orb, direct knock simulator buttons (1x Tap, 2x Double, 3x Triple), and active automation profile switching (Desk Commander).'
  },
  {
    num: 2,
    src: './assets/knockdock-screenshots/2.png',
    title: 'Sensor Lab & 60 FPS Live Oscilloscope',
    desc: 'Real-time filtered vibration impulse oscilloscope plotting live impulse peaks against the adaptive threshold (1.82 m/s²) and dynamic noise floor (0.08 m/s²), paired with 6-axis Accelerometer (X/Y/Z) and Gyroscope (rad/s) telemetry cards.'
  },
  {
    num: 3,
    src: './assets/knockdock-screenshots/3.png',
    title: 'Multi-Trial Gesture Trainer & Calibration',
    desc: 'Interactive Liquid Glass knock pad and acoustic signal training studio for recording custom desk knock patterns (such as Desk Triple Tap), sampling ambient noise, and calibrating gesture library tolerances.'
  },
  {
    num: 4,
    src: './assets/knockdock-screenshots/4.png',
    title: 'Action Studio & Configured Workflows',
    desc: 'Overview of configured actions and multi-step sequences (25m Pomodoro Focus, 5m Tea / Break Timer, Desk Focus Macro, Launch CastDrive) alongside instant Quick Voice Memo capture and category filters.'
  },
  {
    num: 5,
    src: './assets/knockdock-screenshots/5.png',
    title: 'Custom Action Builder & Concurrency Policies',
    desc: 'Action creation studio supporting 30 built-in action types across 10 categories (shown configuring Local App: Launch Installed App -> CastDrive), state-aware reversible toggle, macro concurrency policies, and gesture binding.'
  },
  {
    num: 6,
    src: './assets/knockdock-screenshots/6.png',
    title: 'Automation Profiles & Gesture Mappings',
    desc: 'Context profile manager (Desk Commander active default profile and custom profiles) with per-profile gesture-to-action bindings (Triple Knock → Open Web URL, Single Knock → Post Notification Macro, Double Knock → Quick Reminder & Timer).'
  },
  {
    num: 7,
    src: './assets/knockdock-screenshots/7.png',
    title: '12-Folder Collapsible Settings & Liquid Glass Optics',
    desc: 'Clean dark-mode settings organized into collapsible category folders: Background Launch & Power, Card Glass & Surface Optics (10.8 dp), Navigation Dock & Liquid Glass (1.0 dp), Acoustic Knock Detection (65% Gate), Tactile & Audio Feedback, PC Control Module, and System Diagnostics.'
  }
];

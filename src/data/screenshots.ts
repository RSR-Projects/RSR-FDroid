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

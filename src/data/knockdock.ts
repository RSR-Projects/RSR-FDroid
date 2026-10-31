import { FeatureItem, ChangelogRelease } from '../types';

export const knockDockFeatures: FeatureItem[] = [
  {
    iconType: 'sensor',
    title: 'Dual-Mode Detection Engine',
    description: 'Supports both Desk Surface Detection (acoustic and vibration waves traveling through wood, glass, metal, or composite desks) and Direct Phone Tap Detection for handheld or stand-mounted triggers.',
    tags: ['Desk Surface Mode', 'Direct Phone Tap', 'Multi-Sensor Fusion']
  },
  {
    iconType: 'oscilloscope',
    title: '10-Stage Signal Processing Pipeline',
    description: 'Processes accelerometer, gyroscope, linear acceleration, and optional microphone impulses through high-pass filtering, surface resonance profiles, dynamic noise-floor tracking, and speech/cough/footstep rejection.',
    tags: ['10-Stage DSP', 'False-Trigger Guard', '60 FPS Telemetry']
  },
  {
    iconType: 'trainer',
    title: 'Guided Calibration & Pattern Training',
    description: 'Includes a 3-step guided calibration wizard for ambient noise floor, desk tap force, and phone tap profile—plus custom 1x, 2x, 3x, and 4+ multi-knock sequence training with live test feedback.',
    tags: ['3-Step Calibration', '1x–4+ Knock Mapping', 'Live Test Mode']
  },
  {
    iconType: 'studio',
    title: 'Media, System & App Launch Actions',
    description: 'Bind knock patterns to Play/Pause, Next/Previous Track, Volume Up/Down, Mute Toggle, Flashlight Toggle, Lock Screen, Screenshot, Reread Notifications, or launching any installed Android application.',
    tags: ['Media Playback', 'System Shortcuts', 'App Launcher']
  },
  {
    iconType: 'profiles',
    title: 'Background Service & Battery Guard',
    description: 'Runs reliably with the screen off using a foreground service with charging-only or custom active time-window rules, pocket/face-down proximity pause, and call pause protection.',
    tags: ['Screen-Off Listening', 'Pocket Guard', 'Battery Rules']
  },
  {
    iconType: 'glass',
    title: 'Liquid Glass UI & 100% On-Device Privacy',
    description: 'Crafted with a modern dark Liquid Glass interface featuring customizable refraction, blur, and accent themes. All sensor and acoustic processing happens strictly on-device with zero network permissions.',
    tags: ['Liquid Glass UI', 'Zero Network Access', 'Apache-2.0']
  }
];

export const knockDockChangelogData: ChangelogRelease[] = [
  {
    version: 'v1.0',
    versionCodeBadge: 'versionCode 1 • Initial Public Release',
    dateLabel: 'Official Release (KnockDock_v_1.0.0 / KnockDock.apk)',
    isLatest: true,
    items: [
      {
        title: 'Dual-Mode Detection Engine:',
        description: 'Added Desk Surface Detection (acoustic + accelerometer vibration fusion) and Direct Phone Tap Detection modes.'
      },
      {
        title: 'Multi-Knock Gesture Mapping (1x, 2x, 3x, 4+):',
        description: 'Configurable single, double, triple, and 4+ knock gestures with custom rhythm pattern training and live testing.'
      },
      {
        title: 'Media, System & App Launch Actions:',
        description: 'Added support for Media Play/Pause, Next/Previous Track, Volume Control, Flashlight, Lock Screen, Screenshot, Notification Reader, and custom App Launchers.'
      },
      {
        title: '10-Stage Signal Processing & Anti-False-Trigger Pipeline:',
        description: 'Implemented high-pass filtering, surface resonance profiles (Wood, Glass, Metal, Plastic), dynamic noise floor adaptation, and speech/keyboard/footstep rejection.'
      },
      {
        title: '3-Step Guided Calibration Wizard:',
        description: 'Interactive calibration for ambient room noise floor, desk knock impulse profiling, and direct phone tap thresholds.'
      },
      {
        title: 'Liquid Glass Dark UI & Local-Only Privacy:',
        description: 'Customizable Liquid Glass visual engine with 100% offline, on-device sensor processing and zero internet permissions.'
      }
    ]
  }
];

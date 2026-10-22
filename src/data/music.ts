import { VideoRelease, MusicTrack, BtsItem } from '../types';

export const videoReleases: VideoRelease[] = [
  {
    id: '5-rx3Cs2Mdc',
    title: 'RSR Retro Velocity — Original Retro Electronic Music',
    url: 'https://www.youtube.com/watch?v=5-rx3Cs2Mdc',
    duration: '3:32',
    thumbnail: './assets/yt-thumbnails/5-rx3Cs2Mdc.jpg'
  },
  {
    id: 'MdFTmiHD2_k',
    title: 'RSR Desi Fusion 🇮🇳🥁 | Original Indian × Punjabi Fusion',
    url: 'https://www.youtube.com/watch?v=MdFTmiHD2_k',
    duration: '3:37',
    thumbnail: './assets/yt-thumbnails/MdFTmiHD2_k.jpg'
  },
  {
    id: 'NlQALiNqT5k',
    title: 'MT-35 Odyssey | Casio MT-35 Hardware × FL Studio',
    url: 'https://www.youtube.com/watch?v=NlQALiNqT5k',
    duration: '1:46',
    thumbnail: './assets/yt-thumbnails/NlQALiNqT5k.jpg'
  },
  {
    id: '6KGInvYU9ws',
    title: 'Advanced Bass Beats (Original Music)',
    url: 'https://www.youtube.com/watch?v=6KGInvYU9ws',
    duration: '1:17',
    thumbnail: './assets/yt-thumbnails/6KGInvYU9ws.jpg'
  },
  {
    id: 'smfY9w6SkGw',
    title: 'Chord Progression #1 (Original Music)',
    url: 'https://www.youtube.com/watch?v=smfY9w6SkGw',
    duration: '1:52',
    thumbnail: './assets/yt-thumbnails/smfY9w6SkGw.jpg'
  }
];

export const musicTracks: MusicTrack[] = [
  {
    id: '5-rx3Cs2Mdc',
    title: 'RSR Retro Velocity',
    subtitle: 'Original Retro Electronic Music',
    duration: '3:32',
    ytUrl: 'https://www.youtube.com/watch?v=5-rx3Cs2Mdc',
    artwork: './assets/yt-thumbnails/5-rx3Cs2Mdc.jpg',
    audioSrc: ''
  },
  {
    id: 'MdFTmiHD2_k',
    title: 'RSR Desi Fusion',
    subtitle: 'Original Indian × Punjabi Electronic Fusion',
    duration: '3:37',
    ytUrl: 'https://www.youtube.com/watch?v=MdFTmiHD2_k',
    artwork: './assets/yt-thumbnails/MdFTmiHD2_k.jpg',
    audioSrc: ''
  },
  {
    id: 'NlQALiNqT5k',
    title: 'MT-35 Odyssey',
    subtitle: 'Casio MT-35 Hardware Synth × FL Studio',
    duration: '1:46',
    ytUrl: 'https://www.youtube.com/watch?v=NlQALiNqT5k',
    artwork: './assets/yt-thumbnails/NlQALiNqT5k.jpg',
    audioSrc: ''
  },
  {
    id: '6KGInvYU9ws',
    title: 'Advanced Bass Beats',
    subtitle: 'Original Music & Heavy Basslines',
    duration: '1:17',
    ytUrl: 'https://www.youtube.com/watch?v=6KGInvYU9ws',
    artwork: './assets/yt-thumbnails/6KGInvYU9ws.jpg',
    audioSrc: ''
  },
  {
    id: 'smfY9w6SkGw',
    title: 'Chord Progression #1',
    subtitle: 'Harmonic Synthesis & Melodic Arrangement',
    duration: '1:52',
    ytUrl: 'https://www.youtube.com/watch?v=smfY9w6SkGw',
    artwork: './assets/yt-thumbnails/smfY9w6SkGw.jpg',
    audioSrc: ''
  }
];

export const btsGalleryItems: BtsItem[] = [
  {
    id: 'bts-1',
    src: './assets/behind-the-scenes/bts-fl-studio-desi-fusion.png',
    alt: 'FL Studio Punjabi & Indian Fusion Session',
    caption: "FL Studio 90 BPM session: Composing 'RSR Desi Fusion' with Punjabi drum patterns, Indian percussion layers, and polyphonic synth textures.",
    title: 'FL Studio — Indian × Punjabi Fusion',
    description: '90 BPM timeline view showing Punjabi rhythm sequencing, custom drum rack patterns, and layered synth arrangements.',
    tags: ['FL Studio', '90 BPM', 'Percussion']
  },
  {
    id: 'bts-2',
    src: './assets/behind-the-scenes/bts-fl-studio-italo-synth.png',
    alt: 'FL Studio Italo Synth & 808 Session',
    caption: 'FL Studio session: Vintage Italo synth progressions, resonant filter envelopes, and 808 bass patterns for retro electronic tracks.',
    title: 'FL Studio — Retro Synth & 808s',
    description: 'Arranging analog basslines, modulated cutoff automation, and 808 kit patterns inside the FL Studio playlist view.',
    tags: ['FL Studio', 'Synth Bass', '808 Drums']
  },
  {
    id: 'bts-3',
    src: './assets/behind-the-scenes/bts-retro-velocity-visualizer.png',
    alt: 'ZGameEditor 3D Wireframe Visualizer Session',
    caption: "ZGameEditor Visualizer session: Designing the 3D cyan wireframe tunnel for 'RSR Retro Velocity' synchronized with the musical beat.",
    title: 'ZGameEditor — 3D Wireframe Tunnel',
    description: 'Building real-time GPU-rendered cyber corridors reactive to bass transients and synth harmonics for RSR Retro Velocity.',
    tags: ['ZGameEditor', '3D Mesh', 'Audio Reactive']
  },
  {
    id: 'bts-4',
    src: './assets/behind-the-scenes/bts-vizzy-mt35-odyssey.png',
    alt: 'Vizzy Audio Visualizer for MT-35 Odyssey',
    caption: "Vizzy Audio Visualizer: Rendering multi-frequency circular spectrum rings and oscilloscope dynamics for 'MT-35 Odyssey'.",
    title: 'Vizzy — Casio MT-35 Visualizer',
    description: 'Concentric radial waveform visualizer reacting in real time to raw waveforms captured from the Casio MT-35 synth keyboard.',
    tags: ['Vizzy', 'Casio MT-35', 'FFT Spectrum']
  },
  {
    id: 'bts-5',
    src: './assets/behind-the-scenes/bts-vizzy-desi-fusion.png',
    alt: 'Vizzy Audio Visualizer for RSR Desi Fusion',
    caption: "Vizzy Audio Visualizer: Dual-spectrum particle emitter and neon audio bar engine for 'RSR Desi Fusion'.",
    title: 'Vizzy — Desi Fusion Spectrum',
    description: 'Frequency band analyzer with neon glow overlays capturing tabla transients, dhol attack, and lead melody frequencies.',
    tags: ['Vizzy', 'Frequency Bands', 'Transient Glow']
  }
];

import React from 'react';
import { Play, Music, Sliders, Camera, Sparkles } from 'lucide-react';
import { PeelingDeck, PeelingCardItem } from './PeelingDeck';
import { YouTubeSpotlight } from './YouTubeSpotlight';
import { MusicPlayer } from './MusicPlayer';
import { DawCards } from './DawCards';
import { BtsGallery } from './BtsGallery';

export const CreatorMusicDeck: React.FC = () => {
  const cards: PeelingCardItem[] = [
    {
      id: 'youtube-spotlight',
      tag: 'ORIGINAL VIDEO RELEASES',
      badge: 'Official Channel',
      title: 'YouTube Releases & Devlogs',
      subtitle: 'Original musical compositions, audio-reactive visualizers, and software demonstrations.',
      icon: <Play className="w-5 h-5 text-red-400" />,
      content: (
        <div className="p-1">
          <YouTubeSpotlight />
        </div>
      )
    },
    {
      id: 'original-music',
      tag: 'DISCOGRAPHY & AUDIO',
      badge: 'RSR Spectrum',
      title: 'Original Audio Discography & Interactive Player',
      subtitle: 'Atmospheric electronic, cyber-synth, and soundtrack productions with responsive waveforms.',
      icon: <Music className="w-5 h-5 text-violet-400" />,
      content: (
        <div className="p-1">
          <MusicPlayer />
        </div>
      )
    },
    {
      id: 'studio-hardware',
      tag: 'PRODUCTION ENVIRONMENT',
      badge: 'DAW & Gear',
      title: 'Digital Audio Workstation & Hardware Synthesizers',
      subtitle: 'FL Studio, Ableton Live, analog/digital sound synthesis, and spatial mixing setup.',
      icon: <Sliders className="w-5 h-5 text-cyan-400" />,
      content: (
        <div className="p-1">
          <DawCards />
        </div>
      )
    },
    {
      id: 'bts-gallery',
      tag: 'STUDIO ARCHIVES',
      badge: 'Behind The Scenes',
      title: 'Studio Setup & Development Environment Gallery',
      subtitle: 'Photographic captures from creative audio sessions, hardware setups, and workstations.',
      icon: <Camera className="w-5 h-5 text-emerald-400" />,
      content: (
        <div className="p-1">
          <BtsGallery />
        </div>
      )
    }
  ];

  return (
    <div className="creator-music-deck-wrap" data-reveal>
      <PeelingDeck
        id="creator-music-peeling-deck"
        deckTitle="Creator, Music &amp; Studio Suite Deck"
        deckSubtitle="Scroll down on cards to peel off the top card and reveal the next studio showcase"
        cards={cards}
      />
    </div>
  );
};

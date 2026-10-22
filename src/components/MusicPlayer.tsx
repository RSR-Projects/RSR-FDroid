import React, { useState, useEffect, useRef } from 'react';
import { musicTracks } from '../data/music';

export const MusicPlayer: React.FC = () => {
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.9);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const currentTrack = musicTracks[currentTrackIdx];

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;
    audio.volume = volume;

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentTrack.audioSrc) {
      audio.src = currentTrack.audioSrc;
      if (isPlaying) {
        audio.play().catch(() => setIsPlaying(false));
      }
    } else {
      audio.removeAttribute('src');
      setIsPlaying(false);
      setCurrentTime(0);
      setDuration(0);
    }
  }, [currentTrackIdx]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentTrack.audioSrc) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        audio.play().then(() => setIsPlaying(true)).catch((err) => {
          console.error('Audio play error:', err);
          setIsPlaying(false);
        });
      }
    } else {
      // If local audio file is not provided yet, scroll to the spotlight video card
      const card = document.querySelector(`.yt-video-card[data-video-id="${currentTrack.id}"]`) as HTMLElement;
      if (card) {
        card.click();
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        const link = document.createElement('a');
        link.href = currentTrack.ytUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();
      }
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration || !progressBarRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs <= 0) return '0:00';
    const mins = Math.floor(secs / 60);
    const remSecs = Math.floor(secs % 60);
    return `${mins}:${remSecs < 10 ? '0' : ''}${remSecs}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div id="music-player" className="music-player-wrapper" data-reveal>
      <div className="music-player-header">
        <div className="music-player-track-info">
          <div style={{ position: 'relative' }}>
            <img
              id="player-artwork-img"
              src={currentTrack.artwork}
              alt="Current Track Artwork"
              className="player-artwork"
              style={{
                borderRadius: isPlaying ? '50%' : '10px',
                animation: isPlaying ? 'spinDisc 10s linear infinite' : 'none',
                transition: 'border-radius 0.4s ease'
              }}
            />
          </div>
          <div className="player-track-details">
            <h4 id="player-track-title">{currentTrack.title}</h4>
            <p id="player-track-sub">{currentTrack.subtitle}</p>
          </div>
          {/* Real-time Dancing Audio Equalizer Bars */}
          <div className={`player-equalizer-bars ${isPlaying ? 'playing' : ''}`} aria-hidden="true" title={isPlaying ? 'Playing track' : 'Paused'}>
            {[14, 22, 10, 26, 18, 12, 28, 16].map((h, i) => (
              <span
                key={i}
                className="player-equalizer-bar"
                style={{
                  height: isPlaying ? undefined : '6px',
                  animationDelay: `${i * 0.12}s`,
                  animationDuration: `${0.6 + (i % 4) * 0.15}s`
                }}
              ></span>
            ))}
          </div>
        </div>
        <div className="player-actions">
          <a
            id="player-yt-listen-btn"
            href={currentTrack.ytUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 22c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73z" />
            </svg>
            <span>Listen on YouTube</span>
          </a>
          {currentTrack.audioSrc ? (
            <a
              id="player-download-btn"
              href={currentTrack.audioSrc}
              download
              className="btn btn-primary btn-sm"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download Audio</span>
            </a>
          ) : null}
        </div>
      </div>

      {/* Controls & Progress */}
      <div className="player-controls-row">
        <button
          id="player-play-btn"
          className="player-btn-play"
          aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
          onClick={togglePlay}
        >
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </button>
        <div className="player-progress-area">
          <span id="player-current-time" className="player-time">
            {formatTime(currentTime)}
          </span>
          <div
            ref={progressBarRef}
            id="player-progress-bar"
            className="player-progress-bar"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progressPercent)}
            tabIndex={0}
            onClick={handleProgressBarClick}
          >
            <div
              id="player-progress-fill"
              className="player-progress-fill"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <span id="player-duration-time" className="player-time">
            {duration > 0 ? formatTime(duration) : currentTrack.duration}
          </span>
        </div>
        <div className="player-volume-wrap">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
          <input
            type="range"
            id="player-volume-slider"
            className="player-volume-slider"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            aria-label="Volume Slider"
          />
        </div>
      </div>

      {/* Track Quick Switcher Pills */}
      <div className="track-pills-wrap" role="tablist" aria-label="Select track to play">
        {musicTracks.map((trk, idx) => {
          const isActive = idx === currentTrackIdx;
          return (
            <button
              key={trk.id}
              className={`track-pill-btn ${isActive ? 'active' : ''}`}
              role="tab"
              aria-selected={isActive}
              onClick={() => setCurrentTrackIdx(idx)}
            >
              {idx + 1}. {trk.title} ({trk.duration})
            </button>
          );
        })}
      </div>
    </div>
  );
};

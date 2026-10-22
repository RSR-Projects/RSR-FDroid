import React, { useState } from 'react';
import { videoReleases } from '../data/music';
import { VideoRelease } from '../types';

interface YouTubeSpotlightProps {
  onSelectTrackFromVideo?: (videoId: string) => void;
}

export const YouTubeSpotlight: React.FC<YouTubeSpotlightProps> = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoRelease>(videoReleases[0]);

  return (
    <>
      {/* YouTube Music Channel Showcase Card */}
      <div id="youtube" className="channel-banner-card" data-reveal>
        <div className="channel-brand-area">
          <div className="channel-icon-svg" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
          <div className="channel-brand-text">
            <h4>RSR Spectrum on YouTube</h4>
            <p>Official channel for original music uploads, synth explorations, and audio-visual experiments.</p>
          </div>
        </div>
        <a href="https://www.youtube.com/@RSR_Spectrum?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="btn btn-youtube">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 22c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73z" />
          </svg>
          <span>Subscribe to @RSR_Spectrum</span>
        </a>
      </div>

      {/* Video Spotlight & Playlist Selection */}
      <div className="video-spotlight" data-reveal data-reveal-delay="1">
        {/* Spotlight Embed Container */}
        <div className="video-player-container">
          <div className="video-player-frame">
            <iframe
              id="spotlight-video-iframe"
              src={`https://www.youtube.com/embed/${selectedVideo.id}?rel=0&enablejsapi=1`}
              title="Featured RSR Spectrum Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="video-player-meta">
            <div>
              <h4 id="spotlight-video-title">{selectedVideo.title}</h4>
              <p>Click any release on the right to switch tracks.</p>
            </div>
            <a
              id="spotlight-video-link"
              href={selectedVideo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <span>Watch on YouTube</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Video Playlist List */}
        <div className="yt-video-list" role="tablist" aria-label="RSR Spectrum Video Releases">
          {videoReleases.map((vid, idx) => {
            const isActive = vid.id === selectedVideo.id;
            return (
              <button
                key={vid.id}
                className={`yt-video-card ${isActive ? 'active' : ''}`}
                data-video-id={vid.id}
                data-reveal
                data-reveal-delay={((idx % 3) + 1).toString()}
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedVideo(vid)}
              >
                <div className="yt-video-thumb-wrap">
                  <img src={vid.thumbnail} alt={`${vid.title} Thumbnail`} loading="lazy" />
                  <span className="yt-duration-badge">{vid.duration}</span>
                </div>
                <div className="yt-video-info">
                  <div className="yt-video-title">{vid.title}</div>
                  <div className="yt-video-action-hint">{isActive ? 'Now Playing' : 'Select to Play'}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

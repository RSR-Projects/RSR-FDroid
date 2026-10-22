import React from 'react';

/**
 * Creative Cyber Ambient Background Component
 * Provides ambient glowing gradient orbs, animated grid lines,
 * and glowing drift particles to give the entire site deep visual immersion.
 */
export const AmbientBackground: React.FC = () => {
  return (
    <div className="ambient-background-wrap" aria-hidden="true">
      {/* Dynamic Cyber Grid Floor with Perspective */}
      <div className="cyber-grid-overlay"></div>

      {/* Primary Cyan Glow Orb (Parallax Top-Left) */}
      <div
        className="ambient-orb ambient-orb-cyan"
        data-parallax-speed="-0.08"
      ></div>

      {/* Secondary Synth Violet Orb (Parallax Mid-Right) */}
      <div
        className="ambient-orb ambient-orb-violet"
        data-parallax-speed="0.06"
      ></div>

      {/* Tertiary Deep Sapphire Orb (Parallax Bottom-Left) */}
      <div
        className="ambient-orb ambient-orb-blue"
        data-parallax-speed="-0.04"
      ></div>

      {/* Subtle Star Particle Canvas Dots */}
      <div className="ambient-particles"></div>
    </div>
  );
};

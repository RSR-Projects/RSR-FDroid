# Original Audio Files

This directory is designated for original audio tracks produced by RSR Spectrum.

## How to add music tracks:
1. Place your audio files here (e.g., `retro-velocity.mp3`, `desi-fusion.mp3`, `mt35-odyssey.mp3`).
2. Supported formats: `.mp3`, `.wav`, `.m4a`, `.ogg`.
3. In `web/js/main.js`, update the `audioSrc` property in the `musicTracks` array with the file path (e.g., `audioSrc: './audio/retro-velocity.mp3'`).
4. Once an audio file is present, the website's music player will automatically enable native browser audio streaming and display the "Download Track" button.
5. If no local audio file is linked, the player provides a "Listen on YouTube" button with privacy-enhanced YouTube player integration.

*Note: In compliance with copyright and distribution rules, only audio files authored and explicitly provided by the creator are hosted here.*

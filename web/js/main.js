/**
 * RSR-Projects Official Repository Website
 * Client-side script: interactions, copy-to-clipboard, screenshots carousel, client switcher
 */

document.addEventListener('DOMContentLoaded', () => {
  initCopyButtons();
  initScreenshotGallery();
  initMobileNav();
  initClientTabs();
  initBackToTop();
});

/**
 * Copy to clipboard with toast notification & accessible live updates
 */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('[data-copy-target]');
  const toastContainer = document.getElementById('toast-container');
  const liveRegion = document.getElementById('a11y-status');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const targetSelector = btn.getAttribute('data-copy-target');
      let textToCopy = '';

      if (targetSelector.startsWith('http')) {
        textToCopy = targetSelector;
      } else {
        const targetEl = document.querySelector(targetSelector);
        textToCopy = targetEl ? (targetEl.innerText || targetEl.value) : '';
      }

      if (!textToCopy) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback for older browsers or non-secure contexts
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-9999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }

        showToast('Repository URL copied to clipboard!');
        if (liveRegion) {
          liveRegion.textContent = 'Repository URL copied to clipboard';
        }

        // Temporary visual state on button
        const originalContent = btn.innerHTML;
        btn.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>Copied!</span>
        `;
        btn.classList.add('btn-copied');

        setTimeout(() => {
          btn.innerHTML = originalContent;
          btn.classList.remove('btn-copied');
        }, 2200);

      } catch (err) {
        console.error('Failed to copy text: ', err);
        showToast('Failed to copy. Please copy manually.');
      }
    });
  });

  function showToast(message) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      <span>${escapeHtml(message)}</span>
    `;

    toastContainer.appendChild(toast);
    // Trigger transition
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentElement) {
          toast.parentElement.removeChild(toast);
        }
      }, 300);
    }, 3200);
  }
}

/**
 * Screenshot Gallery with live caption updates and keyboard support
 */
function initScreenshotGallery() {
  const screenshots = [
    {
      num: 1,
      title: 'Transmitter Control Hub',
      desc: 'Main interface on the Android phone. Shows real-time connection status, transmitter toggle, receiver IP input, port, and audio configuration.'
    },
    {
      num: 2,
      title: 'Active Mirroring Session',
      desc: 'Live streaming session active. Low-latency H.264 stream transmitted across the local Wi-Fi, hotspot, or USB tethered connection.'
    },
    {
      num: 3,
      title: 'Resolution & Bitrate Settings',
      desc: 'Configurable stream encoder settings allowing users to balance latency and image quality for automotive head units or secondary displays.'
    },
    {
      num: 4,
      title: 'Audio Streaming Mode',
      desc: 'Internal audio capture controls. Transmits system sound along with the screen to supported native Android receivers or tested browsers.'
    },
    {
      num: 5,
      title: 'Receiver Mode Interface',
      desc: 'The receiving Android device running CastDrive in native receiver mode, ready for one-tap pairing and reverse touchscreen input.'
    },
    {
      num: 6,
      title: 'Display Aspect Ratio Controls',
      desc: 'Fit, Fill, and Stretch aspect-ratio modes designed specifically to match various car dashboard screens, widescreen head units, and tablets.'
    },
    {
      num: 7,
      title: 'Multi-Angle Screen Rotation',
      desc: 'Instant rotation adjustment between 0°, 90°, 180°, and 270° orientation to fit horizontal or vertical dashboard mounts.'
    },
    {
      num: 8,
      title: 'Automotive & Browser Connectivity',
      desc: 'Connection manager overview showing local UDP discovery, Hotspot tethering, and browser endpoint address (http://<ip>:8080).'
    }
  ];

  let currentIndex = 0;
  const previewImg = document.getElementById('gallery-preview-img');
  const counterEl = document.getElementById('gallery-counter');
  const titleEl = document.getElementById('gallery-title');
  const descEl = document.getElementById('gallery-desc');
  const prevBtn = document.getElementById('gallery-prev-btn');
  const nextBtn = document.getElementById('gallery-next-btn');
  const thumbBtns = document.querySelectorAll('.thumb-btn');

  if (!previewImg || !thumbBtns.length) return;

  function updateGallery(index) {
    if (index < 0) index = screenshots.length - 1;
    if (index >= screenshots.length) index = 0;
    currentIndex = index;

    const data = screenshots[currentIndex];
    previewImg.src = `./assets/screenshots/${data.num}.png`;
    previewImg.alt = `CastDrive Screenshot ${data.num}: ${data.title}`;

    if (counterEl) counterEl.textContent = `Screenshot ${currentIndex + 1} of ${screenshots.length}`;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;

    thumbBtns.forEach((btn, i) => {
      const isActive = i === currentIndex;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  }

  thumbBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => updateGallery(index));
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        const next = (index + 1) % thumbBtns.length;
        thumbBtns[next].focus();
        updateGallery(next);
      } else if (e.key === 'ArrowLeft') {
        const prev = (index - 1 + thumbBtns.length) % thumbBtns.length;
        thumbBtns[prev].focus();
        updateGallery(prev);
      }
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => updateGallery(currentIndex - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => updateGallery(currentIndex + 1));
  }
}

/**
 * Mobile navigation toggle
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.contains('open');
    navMenu.classList.toggle('open', !isOpen);
    toggleBtn.setAttribute('aria-expanded', (!isOpen).toString());
  });

  // Close nav when clicking a link
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Switcher between client instructions (F-Droid, Neo Store, Droid-ify)
 */
function initClientTabs() {
  const tabButtons = document.querySelectorAll('[data-client-tab]');
  const tabPanels = document.querySelectorAll('[data-client-panel]');

  if (!tabButtons.length || !tabPanels.length) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedClient = btn.getAttribute('data-client-tab');

      tabButtons.forEach(b => {
        const isActive = b === btn;
        b.classList.toggle('btn-primary', isActive);
        b.classList.toggle('btn-secondary', !isActive);
        b.setAttribute('aria-selected', isActive.toString());
      });

      tabPanels.forEach(panel => {
        const isMatch = panel.getAttribute('data-client-panel') === selectedClient;
        panel.style.display = isMatch ? 'block' : 'none';
      });
    });
  });
}

/**
 * Back to top smooth scroll
 */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) return;

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/**
 * Helper to escape HTML strings
 */
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

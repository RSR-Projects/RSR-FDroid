/**
 * RSR-Projects Official Repository Website
 * Client-side script: interactions, copy-to-clipboard, screenshots carousel, client switcher
 * Updated for CastDrive v2.0.0 (Android & Windows PC)
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
 * Screenshot Gallery with live caption updates, category switcher (Android & PC), and keyboard support
 */
function initScreenshotGallery() {
  const galleries = {
    android: [
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
    ],
    pc: [
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
    ]
  };

  let currentCategory = 'android';
  let currentIndex = 0;

  const previewFrame = document.querySelector('.gallery-preview-frame');
  const previewImg = document.getElementById('gallery-preview-img');
  const counterEl = document.getElementById('gallery-counter');
  const titleEl = document.getElementById('gallery-title');
  const descEl = document.getElementById('gallery-desc');
  const prevBtn = document.getElementById('gallery-prev-btn');
  const nextBtn = document.getElementById('gallery-next-btn');
  const thumbStrip = document.getElementById('gallery-thumb-strip') || document.querySelector('.thumb-strip');
  const categoryTabBtns = document.querySelectorAll('[data-gallery-tab]');

  if (!previewImg || !thumbStrip) return;

  function renderThumbnails() {
    const list = galleries[currentCategory];
    thumbStrip.innerHTML = '';

    list.forEach((item, index) => {
      const btn = document.createElement('button');
      btn.className = `thumb-btn ${currentCategory === 'pc' ? 'thumb-pc' : ''} ${index === currentIndex ? 'active' : ''}`;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', (index === currentIndex).toString());
      btn.setAttribute('aria-label', `View ${currentCategory === 'pc' ? 'PC' : 'Android'} screenshot ${index + 1}: ${item.title}`);
      
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = '';
      img.loading = 'lazy';
      btn.appendChild(img);

      btn.addEventListener('click', () => updateGallery(index));
      btn.addEventListener('keydown', (e) => {
        const total = list.length;
        if (e.key === 'ArrowRight') {
          const next = (index + 1) % total;
          updateGallery(next);
          const nextBtn = thumbStrip.children[next];
          if (nextBtn) nextBtn.focus();
        } else if (e.key === 'ArrowLeft') {
          const prev = (index - 1 + total) % total;
          updateGallery(prev);
          const prevBtn = thumbStrip.children[prev];
          if (prevBtn) prevBtn.focus();
        }
      });

      thumbStrip.appendChild(btn);
    });
  }

  function updateGallery(index) {
    const list = galleries[currentCategory];
    if (index < 0) index = list.length - 1;
    if (index >= list.length) index = 0;
    currentIndex = index;

    const data = list[currentIndex];
    previewImg.src = data.src;
    previewImg.alt = `CastDrive v2.0.0 Screenshot: ${data.title}`;

    if (previewFrame) {
      if (currentCategory === 'pc') {
        previewFrame.classList.add('frame-pc');
      } else {
        previewFrame.classList.remove('frame-pc');
      }
    }

    const platformLabel = currentCategory === 'pc' ? 'Windows PC App' : 'Android App';
    if (counterEl) counterEl.textContent = `${platformLabel} • Screenshot ${currentIndex + 1} of ${list.length}`;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;

    // Update active thumb
    Array.from(thumbStrip.children).forEach((btn, i) => {
      const isActive = i === currentIndex;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive.toString());
    });
  }

  categoryTabBtns.forEach(tabBtn => {
    tabBtn.addEventListener('click', () => {
      const cat = tabBtn.getAttribute('data-gallery-tab');
      if (cat === currentCategory) return;
      currentCategory = cat;
      currentIndex = 0;

      categoryTabBtns.forEach(b => {
        const isMatch = b === tabBtn;
        b.classList.toggle('active', isMatch);
        b.setAttribute('aria-selected', isMatch.toString());
      });

      renderThumbnails();
      updateGallery(0);
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => updateGallery(currentIndex - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => updateGallery(currentIndex + 1));
  }

  // Initial render
  renderThumbnails();
  updateGallery(0);
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

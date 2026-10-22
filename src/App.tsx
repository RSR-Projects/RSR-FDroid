import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { AmbientBackground } from './components/AmbientBackground';
import { ScrollHUD } from './components/ScrollHUD';
import { HomePage } from './pages/HomePage';
import { CreatorPage } from './pages/CreatorPage';
import { StandalonePage } from './pages/StandalonePage';

export const App: React.FC = () => {
  const getInitialPage = (): 'home' | 'creator' | 'standalone' => {
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (path.includes('standalone') || hash.includes('/standalone') || hash.includes('standalone')) {
      return 'standalone';
    }
    if (path.includes('creator') || hash.includes('/creator') || hash.includes('creator')) {
      return 'creator';
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<'home' | 'creator' | 'standalone'>(getInitialPage);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [a11yStatus, setA11yStatus] = useState<string>('');

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setA11yStatus(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 3200);
  }, []);

  const handleCopyText = useCallback(async (text: string, successLabel: string = 'Copied to clipboard!') => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-9999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      showToast(successLabel);
    } catch (err) {
      console.error('Copy failed: ', err);
      showToast('Failed to copy. Please copy manually.');
    }
  }, [showToast]);

  const navigateTo = useCallback((page: 'home' | 'creator' | 'standalone', hash?: string) => {
    setCurrentPage(page);

    // Update URL without breaking static GitHub Pages routing
    let targetUrl = './';
    if (page === 'creator') targetUrl = './creator.html';
    if (page === 'standalone') targetUrl = './standalone.html';

    const finalUrl = hash ? `${targetUrl}${hash}` : targetUrl;
    window.history.pushState({ page }, '', finalUrl);

    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  // Listen for browser Back/Forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const page = getInitialPage();
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync document title and meta description based on current page
  useEffect(() => {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (currentPage === 'creator') {
      document.title = 'Creator & Music • RSR Spectrum • RSR-Projects';
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Discover original music releases, YouTube channel @RSR_Spectrum, studio sessions, and creative technology by the developer of RSR-Projects and CastDrive.'
        );
      }
    } else if (currentPage === 'standalone') {
      document.title = 'RSR-Projects — Unified Multi-Screen & Creator Suite';
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Unified edition of RSR-Projects, CastDrive screen mirroring ecosystem, and RSR Spectrum creative music studio.'
        );
      }
    } else {
      document.title = 'RSR-Projects — Open Source Android & Multi-Screen Ecosystem';
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Official repository and custom landing page for RSR-Projects Android applications, featuring CastDrive and automated F-Droid repository distribution.'
        );
      }
    }
  }, [currentPage]);

  const handleSectionJump = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Dynamic Ambient Background with Cyber Parallax Depth */}
      <AmbientBackground />

      {/* Real-Time Laser Scroll Progress and HUD Navigator */}
      <ScrollHUD currentPage={currentPage} />

      {/* Accessible Skip to Content Link */}
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* Screen Reader Announcements */}
      <div id="a11y-status" className="sr-only" aria-live="polite" aria-atomic="true">
        {a11yStatus}
      </div>

      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {currentPage === 'home' && (
        <HomePage
          onCopyText={handleCopyText}
          onNavigateToCreator={() => navigateTo('creator')}
          onNavigateToSection={handleSectionJump}
        />
      )}

      {currentPage === 'creator' && (
        <CreatorPage
          onNavigateHome={() => navigateTo('home')}
          onNavigateToSection={handleSectionJump}
        />
      )}

      {currentPage === 'standalone' && (
        <StandalonePage
          onCopyText={handleCopyText}
          onNavigateToSection={handleSectionJump}
        />
      )}

      <Footer currentPage={currentPage} onNavigate={navigateTo} />

      <Toast message={toastMessage} />
    </>
  );
};

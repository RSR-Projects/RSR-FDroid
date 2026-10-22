import { useEffect } from 'react';

/**
 * Enhanced Creative Scroll Reveal & Intersection Hook
 * Automatically handles scroll-triggered entrance animations, parallax elements,
 * and tracks the currently active section for the HUD and navigation.
 */
export function useScrollAnimation(dependency?: unknown) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Helper to reveal an element
    const revealElement = (el: Element) => {
      el.classList.add('is-revealed');
    };

    if (prefersReducedMotion) {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealElement(entry.target);
            // Once revealed, unobserve to free up GPU and CPU cycles
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    const elements = document.querySelectorAll('[data-reveal]');
    elements.forEach((el) => {
      // Check if element is already within the visible viewport on load
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        revealElement(el);
      } else {
        observer.observe(el);
      }
    });

    // Throttled Parallax scroll handler - skip on mobile to prevent GPU lag
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      return () => {
        elements.forEach((el) => observer.unobserve(el));
        observer.disconnect();
      };
    }

    let ticking = false;
    const parallaxNodes = Array.from(
      document.querySelectorAll<HTMLElement>('[data-parallax-speed]')
    ).map((el) => ({
      el,
      speed: parseFloat(el.getAttribute('data-parallax-speed') || '0.05')
    }));

    const handleScrollParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          for (let i = 0; i < parallaxNodes.length; i++) {
            const item = parallaxNodes[i];
            const offset = scrollY * item.speed;
            item.el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScrollParallax, { passive: true });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollParallax);
    };
  }, [dependency]);
}

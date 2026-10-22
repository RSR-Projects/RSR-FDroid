import React from 'react';
import { CreatorProfile } from '../components/CreatorProfile';
import { CreatorMusicDeck } from '../components/CreatorMusicDeck';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface CreatorPageProps {
  onNavigateHome: () => void;
  onNavigateToSection: (hash: string) => void;
}

export const CreatorPage: React.FC<CreatorPageProps> = ({
  onNavigateHome,
  onNavigateToSection
}) => {
  // Activate scroll-triggered animation observer and parallax
  useScrollAnimation();

  return (
    <main id="main-content">
      <CreatorProfile
        onNavigateHome={onNavigateHome}
        onNavigateToSection={onNavigateToSection}
      />
      <section className="creator-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <CreatorMusicDeck />
        </div>
      </section>
    </main>
  );
};

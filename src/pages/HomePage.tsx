import React from 'react';
import { Hero } from '../components/Hero';
import { StackedDeckSection } from '../components/StackedDeckSection';
import { CastDriveShowcase } from '../components/CastDriveShowcase';
import { ScreenshotGallery } from '../components/ScreenshotGallery';
import { FDroidSection } from '../components/FDroidSection';
import { ChangelogSection } from '../components/ChangelogSection';
import { EcosystemSection } from '../components/EcosystemSection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HomePageProps {
  onCopyText: (text: string, successLabel?: string) => void;
  onNavigateToCreator: () => void;
  onNavigateToSection: (hash: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onCopyText,
  onNavigateToCreator,
  onNavigateToSection
}) => {
  // Activate scroll-triggered animation observer and parallax
  useScrollAnimation();

  return (
    <main id="main-content">
      <Hero onNavigateToSection={onNavigateToSection} />
      <StackedDeckSection 
        onNavigateToSection={onNavigateToSection} 
        onNavigateToCreator={onNavigateToCreator} 
      />
      <CastDriveShowcase />
      <ScreenshotGallery />
      <FDroidSection onCopyText={onCopyText} />
      <ChangelogSection />
      <EcosystemSection onNavigateToCreator={onNavigateToCreator} />
    </main>
  );
};

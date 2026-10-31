import React from 'react';
import { KnockDockHero } from '../components/KnockDockHero';
import { KnockDockDeckSection } from '../components/KnockDockDeckSection';
import { KnockDockShowcase } from '../components/KnockDockShowcase';
import { ScreenshotGallery } from '../components/ScreenshotGallery';
import { FDroidSection } from '../components/FDroidSection';
import { ChangelogSection } from '../components/ChangelogSection';
import { EcosystemSection } from '../components/EcosystemSection';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface KnockDockPageProps {
  onCopyText: (text: string, successLabel?: string) => void;
  onNavigateToCreator: () => void;
  onNavigateToCastDrive: () => void;
  onNavigateToSection: (hash: string) => void;
}

export const KnockDockPage: React.FC<KnockDockPageProps> = ({
  onCopyText,
  onNavigateToCreator,
  onNavigateToCastDrive,
  onNavigateToSection
}) => {
  // Activate scroll-triggered animation observer and parallax
  useScrollAnimation();

  return (
    <main id="main-content">
      <KnockDockHero onNavigateToSection={onNavigateToSection} />
      <KnockDockDeckSection
        onNavigateToSection={onNavigateToSection}
        onNavigateToCastDrive={onNavigateToCastDrive}
        onNavigateToCreator={onNavigateToCreator}
      />
      <KnockDockShowcase />
      <ScreenshotGallery appMode="knockdock" />
      <FDroidSection onCopyText={onCopyText} appMode="knockdock" />
      <ChangelogSection appMode="knockdock" />
      <EcosystemSection
        onNavigateToCreator={onNavigateToCreator}
        onNavigateToCastDrive={onNavigateToCastDrive}
      />
    </main>
  );
};

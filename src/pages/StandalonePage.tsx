import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { KnockDockHero } from '../components/KnockDockHero';
import { StackedDeckSection } from '../components/StackedDeckSection';
import { KnockDockDeckSection } from '../components/KnockDockDeckSection';
import { CastDriveShowcase } from '../components/CastDriveShowcase';
import { KnockDockShowcase } from '../components/KnockDockShowcase';
import { ScreenshotGallery } from '../components/ScreenshotGallery';
import { FDroidSection } from '../components/FDroidSection';
import { ChangelogSection } from '../components/ChangelogSection';
import { EcosystemSection } from '../components/EcosystemSection';
import { CreatorProfile } from '../components/CreatorProfile';
import { CreatorMusicDeck } from '../components/CreatorMusicDeck';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface StandalonePageProps {
  onCopyText: (text: string, successLabel?: string) => void;
  onNavigateToSection: (hash: string) => void;
}

export const StandalonePage: React.FC<StandalonePageProps> = ({
  onCopyText,
  onNavigateToSection
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'castdrive' | 'knockdock' | 'creator'>('all');

  // Trigger scroll reveals whenever the tab switches
  useScrollAnimation(activeTab);

  return (
    <main id="main-content">
      {/* Top Banner */}
      <div className="standalone-top-banner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="standalone-badge">
            <span className="standalone-badge-dot"></span>
            Unified Suite
          </span>
          <span>CastDrive &bull; KnockDock &bull; Windows PC Client &bull; RSR Spectrum Music</span>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <button
            className={`btn btn-sm ${activeTab === 'all' ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setActiveTab('all')}
          >
            All Sections
          </button>
          <button
            className={`btn btn-sm ${activeTab === 'castdrive' ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setActiveTab('castdrive')}
          >
            CastDrive
          </button>
          <button
            className={`btn btn-sm ${activeTab === 'knockdock' ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setActiveTab('knockdock')}
          >
            KnockDock
          </button>
          <button
            className={`btn btn-sm ${activeTab === 'creator' ? 'btn-primary' : 'btn-ghost'}`}
            onClick={() => setActiveTab('creator')}
          >
            Creator &amp; Music
          </button>
        </div>
      </div>

      {activeTab === 'castdrive' && (
        <>
          <Hero onNavigateToSection={onNavigateToSection} />
          <StackedDeckSection
            onNavigateToSection={onNavigateToSection}
            onNavigateToCreator={() => setActiveTab('creator')}
            onNavigateToKnockDock={() => setActiveTab('knockdock')}
          />
          <CastDriveShowcase />
          <ScreenshotGallery appMode="castdrive" />
          <FDroidSection onCopyText={onCopyText} appMode="castdrive" />
          <ChangelogSection appMode="castdrive" />
          <EcosystemSection
            onNavigateToCreator={() => setActiveTab('creator')}
            onNavigateToKnockDock={() => setActiveTab('knockdock')}
          />
        </>
      )}

      {activeTab === 'knockdock' && (
        <>
          <KnockDockHero onNavigateToSection={onNavigateToSection} />
          <KnockDockDeckSection
            onNavigateToSection={onNavigateToSection}
            onNavigateToCastDrive={() => setActiveTab('castdrive')}
            onNavigateToCreator={() => setActiveTab('creator')}
          />
          <KnockDockShowcase />
          <ScreenshotGallery appMode="knockdock" />
          <FDroidSection onCopyText={onCopyText} appMode="knockdock" />
          <ChangelogSection appMode="knockdock" />
          <EcosystemSection
            onNavigateToCreator={() => setActiveTab('creator')}
            onNavigateToCastDrive={() => setActiveTab('castdrive')}
          />
        </>
      )}

      {activeTab === 'all' && (
        <>
          <Hero onNavigateToSection={onNavigateToSection} />
          <StackedDeckSection
            onNavigateToSection={onNavigateToSection}
            onNavigateToCreator={() => setActiveTab('creator')}
            onNavigateToKnockDock={() => setActiveTab('knockdock')}
          />
          <CastDriveShowcase />
          <KnockDockShowcase />
          <ScreenshotGallery appMode="all" />
          <FDroidSection onCopyText={onCopyText} appMode="all" />
          <ChangelogSection appMode="all" />
          <EcosystemSection
            onNavigateToCreator={() => setActiveTab('creator')}
            onNavigateToKnockDock={() => setActiveTab('knockdock')}
          />
        </>
      )}

      {(activeTab === 'all' || activeTab === 'creator') && (
        <section className="creator-section" style={{ borderTop: activeTab === 'all' ? '1px solid rgba(99, 102, 241, 0.2)' : 'none' }}>
          <div className="container">
            <CreatorProfile
              onNavigateHome={() => setActiveTab('castdrive')}
              onNavigateToSection={onNavigateToSection}
            />
            <CreatorMusicDeck />
          </div>
        </section>
      )}
    </main>
  );
};

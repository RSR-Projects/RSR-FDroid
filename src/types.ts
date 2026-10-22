export interface Screenshot {
  num: number;
  src: string;
  title: string;
  desc: string;
}

export interface VideoRelease {
  id: string;
  title: string;
  url: string;
  duration: string;
  thumbnail: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  ytUrl: string;
  artwork: string;
  audioSrc: string;
}

export interface BtsItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  title: string;
  description: string;
  tags: string[];
}

export interface FeatureItem {
  title: string;
  description: string;
  tags: string[];
  iconType: 'receiver' | 'desktop' | 'modes' | 'touch' | 'audio' | 'browser' | 'display' | 'usb';
}

export interface ChangelogRelease {
  version: string;
  versionCodeBadge: string;
  dateLabel: string;
  isLatest?: boolean;
  items: Array<{
    title?: string;
    description: string;
  }>;
}

export interface EcosystemProject {
  title: string;
  badge: string;
  description: string;
  status: string;
  linkText: string;
  linkUrl: string;
  isExternal: boolean;
  accent?: boolean;
}
